(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{342:function(t,e,s){"use strict";s.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"kafka-consumer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka-consumer","aria-hidden":"true"}},[t._v("#")]),t._v(" Kafka Consumer")]),r("p",[t._v("To add a consumer in Axibase Collector, navigate to "),r("strong",[t._v("Data Sources > Kafka Consumers")]),t._v(' and select "Add".')]),r("h2",{attrs:{id:"supported-brokers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-brokers","aria-hidden":"true"}},[t._v("#")]),t._v(" Supported Brokers")]),r("p",[r("a",{attrs:{href:"https://kafka.apache.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Kafka")]),t._v(" 0.9.0.x +")]),r("h2",{attrs:{id:"settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#settings","aria-hidden":"true"}},[t._v("#")]),t._v(" Settings")]),r("table",[r("thead",[r("tr",[r("th",[r("strong",[t._v("Field")])]),r("th",[r("strong",[t._v("Description")])])])]),r("tbody",[r("tr",[r("td",[t._v("Name")]),r("td",[t._v("Name of consumer.")])]),r("tr",[r("td",[t._v("Server(s)")]),r("td",[t._v("A list of host/port pairs to use for establishing the initial connection to the Kafka cluster. The client will make use of all servers irrespective of which servers are specified here for bootstrapping—this list only impacts the initial hosts used to discover the full set of servers."),r("br"),t._v("This list should be in the form 'host1:port1,host2:port2,...'."),r("br"),t._v("Since these servers are just used for the initial connection to discover the full cluster membership (which may change dynamically), this list need not contain the full set of servers (you may want more than one, though, in case a server is down)")])]),r("tr",[r("td",[t._v("Security Protocol")]),r("td",[t._v("Protocol used to communicate with brokers."),r("br"),t._v("Supported protocols:"),r("br"),t._v("* PLAINTEXT"),r("br"),t._v("* SSL")])]),r("tr",[r("td",[t._v("Read Timeout, seconds")]),r("td",[t._v("The amount of time in seconds to block message reading.")])]),r("tr",[r("td",[t._v("Poll Timeout, ms")]),r("td",[t._v("The amount of time in milliseconds to block waiting for input.")])]),r("tr",[r("td",[t._v("Properties")]),r("td",[t._v("Extended consumer properties")])])])]),r("h2",{attrs:{id:"ssl-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssl-settings","aria-hidden":"true"}},[t._v("#")]),t._v(" SSL Settings")]),r("p",[t._v("If "),r("code",[t._v("SSL")]),t._v(" protocol is selected, we need to configure additional settings:")]),r("table",[r("thead",[r("tr",[r("th",[r("strong",[t._v("Field")])]),r("th",[r("strong",[t._v("Description")])])])]),r("tbody",[r("tr",[r("td",[t._v("Key Store")]),r("td",[t._v("Key stores:"),r("br"),t._v("* CUSTOM - use custom trust/key stores"),r("br"),t._v("* DEFAULT - use Collector stores")])]),r("tr",[r("td",[t._v("Trust Store Path")]),r("td",[t._v("The location of the trust store file.")])]),r("tr",[r("td",[t._v("Trust Store Password")]),r("td",[t._v("The password for the trust store file.")])]),r("tr",[r("td",[t._v("Two-Way Authentication")]),r("td",[t._v("Enable 2-Way Authentication (client verification).")])]),r("tr",[r("td",[t._v("Key Store Path")]),r("td",[t._v("The location of the key store file.")])]),r("tr",[r("td",[t._v("Key Store Password")]),r("td",[t._v("The store password for the key store file.")])]),r("tr",[r("td",[t._v("Key Alias")]),r("td",[t._v("The unique name of the entry in the store.")])]),r("tr",[r("td",[t._v("Key Password")]),r("td",[t._v("The password of the private key in the key store file.")])])])]),r("h2",{attrs:{id:"screenshots"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#screenshots","aria-hidden":"true"}},[t._v("#")]),t._v(" Screenshots")]),r("h3",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),r("p",[r("img",{attrs:{src:s(73),alt:"Kafka Consumer Configuration Example"}})]),r("h3",{attrs:{id:"test-result"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-result","aria-hidden":"true"}},[t._v("#")]),t._v(" Test Result")]),r("p",[r("img",{attrs:{src:s(72),alt:"Kafka Consumer Test Results"}})])])}],o=s(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);e.default=a.exports},72:function(t,e,s){t.exports=s.p+"assets/img/kafka_consumer_test_results.353c81bf.png"},73:function(t,e,s){t.exports=s.p+"assets/img/kafka_consumer_configuration.cfb0317b.png"}}]);