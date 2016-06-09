import json, urllib2, re, socket
from urlparse import urlparse
from datetime import datetime

##############################################################################################################
class Collector():
    def __init__(self, configuration):
        """
        Build a collector to collect data from NGINX-plus server and store it in ATSD.
        All the required data is provided via configuration object passed to the constructor.
        See :class:`Configuration` for more details.
        """
        self.configuration =  configuration
        
    def collect(self):
        """Collect data from all servers specified in configuration object passed to the constructor"""
        self.configuration.get_logger().log("Starting collection...")
        for address in self.configuration.get_addresses():
            self.configuration.get_logger().log("Processing" + str(address))
            fetched_data = urllib2.urlopen(address)
            self.configuration.get_logger().log("All data loaded.")
            nginx_stats = json.load(fetched_data)
            self.configuration.get_logger().log("The following json was obtained: " + str(nginx_stats))
            jsoner = _NginxJsonProcessor(self.configuration)
            self.configuration.get_logger().log("Traversing obtained json ... \n")
            commands = jsoner.traverse_json(entity=address, json_object=nginx_stats)
            self.configuration.get_logger().log("Commands built.")
            atsd = _ATSDManager(self.configuration)
            atsd.send_commands(commands)
            self.configuration.get_logger().log("All done.\n")


############################################################################################################
class Configuration:
    """ Configuration for ."""
    def __init__(self, addresses=["http://demo.nginx.com/status"], metric_prefix="nginx-plus.", atsd_url="tcp://localhost:8081", verbose=False):
        '''
        Args:
            addresses (list)              : Item list of all NGINX-plus servers to collect data from.
            metric_prefix (str)           : Metric prefix for all metrics 
            atsd_url (str)                : ATSD url to store data at
            verbose (bool)                : Flag indicating if program should generatew output  
        '''
        self.substitutions = {"server_zones/*/": "status_zone","stream/server_zones/*/": "status_zone","stream/upstreams/*/":"dyn_config_group","upstreams/*/":"backend","caches/*/":"cache"}
        self.addresses = addresses
        self.metric_prefix = metric_prefix
        self.atsd_url = atsd_url
        self.logger = _Logger(verbose)
        
    def get_internal_separator(self):
        return "/";
    def get_substitutions(self):
        return self.substitutions;
    def get_addresses(self):
        return self.addresses;
    def get_logger(self):
        return self.logger
    def get_metric_prefix(self):
        return self.metric_prefix;
    def get_atsd_url(self):
        return self.atsd_url
    
############################################################################################################    
class _NginxJsonProcessor:
    def __init__(self, configuration):
        self.configuration = configuration
    
    def traverse_json(self, entity, json_object):
        root_command = _Command(command_type="series", metric_prefix=self.configuration.get_metric_prefix())
        root_command.set_entity(entity)
        self.build_command_tree(json_object, path_stack=list(), base_command=root_command)
        return self.build_final_commands(root_command, command_buffer=list(), result_commands=list())
     
    def build_command_tree(self, json_object, path_stack, base_command):
        built_command = base_command
        if (isinstance(json_object, dict)):
            instability = self.analyze_instability(self.join_to_path(path_stack))
            if instability:
                path_stack.pop()
                path_stack.append(instability["stable_name"])
                new_command = _Command(metric_prefix=self.configuration.get_metric_prefix())
                new_command.add_tag(instability["stable_name"], instability["instable_name"])
                base_command.add_child(new_command)
                built_command = new_command
            for key, value in json_object.items():
                path_stack.append(key)
                if (self.is_complex_part(value)):
                    self.build_command_tree(value, path_stack, built_command)
                else:
                    if self.is_metric(value):
                        self.configuration.get_logger().log("METRIC DETECTED:" + self.join_to_path(path_stack) + "=" + str(value))
                        built_command.add_metric(key, value)
                    else:
                        self.configuration.get_logger().log("TAG    DETECTED:" + self.join_to_path(path_stack) + "=" + str(value))
                        built_command.add_tag(key, value)
                path_stack.pop()
        elif (isinstance(json_object, list)):
            for i in range(len(json_object)):
                item_tag = str(i)
                path_stack.append(item_tag)
                new_command = _Command(metric_prefix=self.configuration.get_metric_prefix())
                new_command.add_tag("item", item_tag)
                built_command.add_child(new_command)
                self.build_command_tree(json_object[i], path_stack, new_command)
                path_stack.pop()
            
    def build_final_commands(self, command, command_buffer, result_commands):
        command_buffer.append(command.get_atsd_format())
        if command.children:
            for child in command.children:
                self.build_final_commands(child, command_buffer, result_commands)
        else:
            result_commands.append(" ".join(command_buffer))
        command_buffer.pop()
        return result_commands
            
    def analyze_instability(self, path):
        result = None
        for rule, substitution in self.configuration.get_substitutions().iteritems():
            pattern = "(" + rule.replace('*', ')(.*?)(') + ".*)"
            match = re.match(pattern, path)
            if match and match.group(2) != substitution:
                result = dict()
                result["stable_name"] = substitution
                result["instable_name"] = match.group(2)
                result["prefix_path"] = match.group(1) + substitution
        return result
            
    def is_complex_part(self, part):
        return isinstance(part, dict) or isinstance(part, list)
        
    def is_metric(self, value):
        try: 
            int(value)
            return True
        except:
            return False
               
    def join_to_path(self, stack):
        return self.configuration.get_internal_separator().join(stack) + self.configuration.get_internal_separator()

############################################################################################################
class _Logger:
    def __init__(self, verbosity):
        self.verbosity = verbosity
    
    def log(self, message):
        if self.verbosity:
            print datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f'), "|", message

#################################################################################
class _ATSDManager():
    def __init__(self, configuration):
        self.configuration = configuration
        
    def send_commands(self, commands):
        atsd_url_info = urlparse(self.configuration.get_atsd_url())
        sock = socket.socket()
        self.configuration.get_logger().log("Connecting...")
        sock.connect((atsd_url_info.hostname, atsd_url_info.port))
        self.configuration.get_logger().log("Preparing data...")
        command_batch =  "\n".join(commands)
        self.configuration.get_logger().log("Data prepared :\n\n" + str(command_batch) + "\n\n")
        self.configuration.get_logger().log("Sending...")
        sock.send(command_batch)
        sock.close()
        self.configuration.get_logger().log("Sent.")
        
########################33
class _Command:
    def __init__(self, command_type=None, metric_prefix=""):
        self.entity = ""
        self.metrics = dict()
        self.tags = dict()
        self.date = ""
        self.children = list()
        self.command_type = command_type
        self.metric_prefix = metric_prefix
        self.atsd_format = ""
                
    def __str__(self):
        return self.atsd_format
    
    def __repr__(self):
        return self.atsd_format
    
    def get_atsd_format(self):
        if not self.atsd_format:
            if self.command_type:
                self.atsd_format = self.command_type + " "
            if self.entity:
                self.atsd_format += "e:" + self.entity + " "
            for metric_name, metric in self.metrics.iteritems():
                self.atsd_format += "m:" + str(self.metric_prefix) + str(metric_name) + "=" + str(metric) + " "
            for tag_name, tag in self.tags.iteritems():
                self.atsd_format += "t:" + str(tag_name) + "=" + str(tag) + " "
            if self.date:
                self.atsd_format += "d:" + self.date
        return self.atsd_format
        
    def get_entity(self):
        return self.entity
    
    def get_metrics(self):
        return self.metrics
    
    def get_tags(self):
        return self.tags
    
    def get_date(self):
        return self.date
    
    def set_entity(self, entity):
        self.entity = entity
        
    def set_date(self, date):
        self.date = date
        
    def add_tag(self, tag_name, tag):
        self.tags[tag_name] = tag
        
    def add_metric(self, metric_name, metric):
        self.metrics[metric_name] = metric
        
    def add_child(self, child):
        self.children.append(child)
    
############################################################################################################