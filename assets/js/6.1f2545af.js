(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{393:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"logging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logging","aria-hidden":"true"}},[t._v("#")]),t._v(" Logging")]),s("h2",{attrs:{id:"copy-log-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-log-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Copy log file")]),s("p",[t._v("Copy log file to the Docker host on which Axibase Collector container is running:")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker "),s("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" axibase-collector:/opt/axibase-collector/logs/axibase-collector.log ./\n")])]),s("h2",{attrs:{id:"copy-all-log-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-all-log-files","aria-hidden":"true"}},[t._v("#")]),t._v(" Copy all log files")]),s("p",[t._v("Archive log files from the Docker host on which Axibase Collector container is running:")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker "),s("span",{attrs:{class:"token function"}},[t._v("exec")]),t._v(" -it axibase-collector "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" cvf tmp/logs.tar.gz opt/axibase-collector/logs/\n")])]),s("p",[t._v("Copy the created archive to the Docker host on which Axibase Collector container is running:")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker "),s("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" axibase-collector:/tmp/logs.tar.gz ./\n")])]),s("h2",{attrs:{id:"configure-collector-to-exit-and-dump-heap-on-outofmemory-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-collector-to-exit-and-dump-heap-on-outofmemory-error","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure Collector to Exit and Dump Heap on OutOfMemory Error")]),s("p",[t._v("Edit the "),s("code",[t._v("./axibase-collector/bin/start-collector.sh")]),t._v(" file.")]),s("p",[t._v("Make the following changes by adding 3 lines after "),s("strong",[s("code",[t._v("# Exit and dump heap on OoM after")])]),t._v(":")]),s("p",[t._v("Before:")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{attrs:{class:"token comment"}},[t._v('# GC_OPTS="-Xloggc:$LOGS/gc_$RANDOM.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+PrintGC"')]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('# COLLECTOR_JAVA_OPTS="$COLLECTOR_JAVA_OPTS $GC_OPTS"')]),t._v("\n\nCOLLECTOR_PID_FILE"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"'),s("span",{attrs:{class:"token variable"}},[t._v("$BIN")]),t._v('/collector.pid"')]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("type")]),t._v(" -p java "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null 2"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("1"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])]),s("p",[t._v("After:")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{attrs:{class:"token comment"}},[t._v('# GC_OPTS="-Xloggc:$LOGS/gc_$RANDOM.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+PrintGC"')]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('# COLLECTOR_JAVA_OPTS="$COLLECTOR_JAVA_OPTS $GC_OPTS"')]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Exit and dump heap on OoM")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("export")]),t._v(" JAVA_TOOL_OPTIONS"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"-XX:OnOutOfMemoryError=\\"kill \\-9 %p\\""')]),t._v("\nOOM_OPTS"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath='),s("span",{attrs:{class:"token variable"}},[t._v("$LOGS")]),t._v('"')]),t._v("\nCOLLECTOR_JAVA_OPTS"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"'),s("span",{attrs:{class:"token variable"}},[t._v("$COLLECTOR_JAVA_OPTS")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$OOM_OPTS")]),t._v('"')]),t._v("\n\nCOLLECTOR_PID_FILE"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"'),s("span",{attrs:{class:"token variable"}},[t._v("$BIN")]),t._v('/collector.pid"')]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("type")]),t._v(" -p java "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null 2"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("1"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])}],!1,null,null,null);a.default=e.exports}}]);