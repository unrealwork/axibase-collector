#===============================================================================
# Axibase NGINX plus Collector main script.
# Run: 
#        python axibase_nginx_plus_collector.py -h 
# for more information.
#===============================================================================
from axibase_npc_core import Collector, Configuration, CollectorArgParser
options, args = CollectorArgParser().parse_arguments()
user_config = Configuration(addresses=options.items, atsd_url=options.atsd_url, quiet=options.quiet)
Collector(user_config).collect()