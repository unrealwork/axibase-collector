(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{379:function(e,a,t){"use strict";t.r(a);var s=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"enabling-jmx-in-java-applications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabling-jmx-in-java-applications","aria-hidden":"true"}},[e._v("#")]),e._v(" Enabling JMX in Java Applications")]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),s("h3",{attrs:{id:"apache-activemq-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-activemq-server","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache ActiveMQ Server")]),s("h4",{attrs:{id:"reference-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-information","aria-hidden":"true"}},[e._v("#")]),e._v(" Reference Information")]),s("ul",[s("li",[e._v("Configuring JMX in ActiveMQ: "),s("a",{attrs:{href:"http://activemq.apache.org/jmx.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("activemq.apache.org/jmx.html")])])]),s("h4",{attrs:{id:"configure-jmx-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-jmx-properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure JMX properties")]),s("ul",[s("li",[e._v("Change to ActiveMQ installation directory:")])]),s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("cd")]),e._v(" /opt/apache-activemq-5.13.1\n")])]),s("ul",[s("li",[e._v("Modify JMX settings in the ActiveMQ JVM launch options. "),s("br"),e._v("Search for the "),s("code",[e._v("ACTIVEMQ_SUNJMX_START")]),e._v(" setting and change it as specified below.")])]),s("h5",{attrs:{id:"activemq-5-11-x-and-later"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activemq-5-11-x-and-later","aria-hidden":"true"}},[e._v("#")]),e._v(" ActiveMQ 5.11.x and later")]),s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("vi")]),e._v(" ./bin/env\n")])]),s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{attrs:{class:"token attr-name"}},[e._v("ACTIVEMQ_SUNJMX_START")]),s("span",{attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{attrs:{class:"token attr-value"}},[e._v('"$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote"')]),e._v("\n"),s("span",{attrs:{class:"token attr-name"}},[e._v("ACTIVEMQ_SUNJMX_START")]),s("span",{attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{attrs:{class:"token attr-value"}},[e._v('"$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.port=1090"')]),e._v("\n"),s("span",{attrs:{class:"token attr-name"}},[e._v("ACTIVEMQ_SUNJMX_START")]),s("span",{attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{attrs:{class:"token attr-value"}},[e._v('"$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.rmi.port=1090"')]),e._v("\n"),s("span",{attrs:{class:"token attr-name"}},[e._v("ACTIVEMQ_SUNJMX_START")]),s("span",{attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{attrs:{class:"token attr-value"}},[e._v('"$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.ssl=false"')]),e._v("\n"),s("span",{attrs:{class:"token attr-name"}},[e._v("ACTIVEMQ_SUNJMX_START")]),s("span",{attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{attrs:{class:"token attr-value"}},[e._v('"$ACTIVEMQ_SUNJMX_START -Djava.rmi.server.hostname=activemq_hostname"')]),e._v("\n"),s("span",{attrs:{class:"token attr-name"}},[e._v("ACTIVEMQ_SUNJMX_START")]),s("span",{attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{attrs:{class:"token attr-value"}},[e._v('"$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_CONF}/jmx.password"')]),e._v("\n"),s("span",{attrs:{class:"token attr-name"}},[e._v("ACTIVEMQ_SUNJMX_START")]),s("span",{attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{attrs:{class:"token attr-value"}},[e._v('"$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_CONF}/jmx.access"')]),e._v("\n")])]),s("h5",{attrs:{id:"activemq-5-10-x-and-earlier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activemq-5-10-x-and-earlier","aria-hidden":"true"}},[e._v("#")]),e._v(" ActiveMQ 5.10.x and earlier")]),s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("vi")]),e._v(" ./bin/activemq\n")])]),s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{attrs:{class:"token attr-name"}},[e._v("ACTIVEMQ_SUNJMX_START")]),s("span",{attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{attrs:{class:"token attr-value"}},[e._v('"-Dcom.sun.management.jmxremote \\\n   -Dcom.sun.management.jmxremote.port=1090 \\\n   -Dcom.sun.management.jmxremote.rmi.port=1090 \\\n   -Dcom.sun.management.jmxremote.ssl=false \\\n   -Djava.rmi.server.hostname=activemq_hostname \\\n   -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_BASE}/conf/jmx.password \\\n   -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_BASE}/conf/jmx.access"')]),e._v("\n")])]),s("blockquote",[s("p",[e._v("Replace "),s("code",[e._v("activemq_hostname")]),e._v(" with the full hostname or IP address of the ActiveMQ server.\nThis should be the same hostname that Axibase Collector will be using when connecting to the ActiveMQ server.")])]),s("p",[e._v("The result should be as shown in the image below:")]),s("p",[s("img",{attrs:{src:t(91),alt:"SUN_JMX_START_IMAGE"}})]),s("h4",{attrs:{id:"setup-jmx-user-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-jmx-user-credentials","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup JMX User Credentials")]),s("p",[e._v("Change to "),s("code",[e._v("./conf")]),e._v(" directory.")]),s("p",[e._v("Add/edit the "),s("code",[e._v("jmx.access")]),e._v(" and "),s("code",[e._v("jmx.password")]),e._v(" files as follows.")]),s("p",[e._v("Make sure the owner of these files is the same as ActiveMQ user.")]),s("p",[s("code",[e._v("jmx.access")]),e._v(":")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# The "monitorRole" role has readonly access.\nmonitorRole readonly\n')])]),s("p",[s("code",[e._v("jmx.password")]),e._v(":")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# The "monitorRole" role has password "abc123".\nmonitorRole abc123\n')])]),s("h4",{attrs:{id:"secure-password-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secure-password-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Secure Password File")]),s("p",[e._v("Secure access to the  "),s("code",[e._v("jmx.password")]),e._v(" file by restricting permissions:")]),s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("chmod")]),e._v(" -v 0600 ./conf/jmx.password\n")])]),s("h4",{attrs:{id:"restart-activemq-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restart-activemq-server","aria-hidden":"true"}},[e._v("#")]),e._v(" Restart ActiveMQ Server")]),s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("./bin/activemq stop\n./bin/activemq start\n")])])])}],r=t(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);a.default=n.exports},91:function(e,a,t){e.exports=t.p+"assets/img/very_new_screen.06fbf20d.png"}}]);