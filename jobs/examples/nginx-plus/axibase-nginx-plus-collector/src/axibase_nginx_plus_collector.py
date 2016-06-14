#===============================================================================
# Axibase NGINX plus Collector main script.
# Run: 
#        python axibase_nginx_plus_collector.py -h 
# for more information.
#===============================================================================
from axibase_npc_core import Collector, Configuration, CollectorArgParser
parser = CollectorArgParser()
options, args = parser.parse_arguments()
user_config = Configuration(addresses=options.items, atsd_url=options.atsd_url, quiet=options.quiet)
collector = Collector(user_config)
collector.collect()