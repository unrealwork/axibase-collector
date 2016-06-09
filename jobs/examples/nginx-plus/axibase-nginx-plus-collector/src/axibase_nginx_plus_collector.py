#===============================================================================
# Axibase NGINX plus Collector main script
# run ''' python axibase_nginx_plus_collector.py -h ''' for more information
#===============================================================================
import optparse
from axibase_npc_core import Collector, Configuration
parser = optparse.OptionParser()
parser.add_option("-a", "--atsd-url", default="tcp://localhost:8081", help="URL of ATSD (default: %default)")
parser.add_option('-v', '--verbose', dest="verbose", default=False, action="store_true")
parser.add_option("-i", "--items", nargs='+', default=["http://demo.nginx.com/status"], help="List of items (default: %default)")
options, args = parser.parse_args()
user_config = Configuration(addresses=options.items, atsd_url=options.atsd_url, verbose=options.verbose)
collector = Collector(user_config)
collector.collect()