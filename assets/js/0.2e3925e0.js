(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{375:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("Switch to the user under which the collector's java process is executing.")]),a("p",[t._v("To look up the Axibase Collector installation directory, run:")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),a("p",[t._v("To look up Axibase Collector installation directory, run:")]),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),a("p",[t._v("Follow the steps outlined in the following "),a("router-link",{attrs:{to:"updating-collector-on-docker.html"}},[t._v("note")]),t._v(".")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"updating-axibase-collector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-axibase-collector","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating Axibase Collector")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"download-the-latest-axibase-collector-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-the-latest-axibase-collector-release","aria-hidden":"true"}},[this._v("#")]),this._v(" Download the Latest Axibase Collector Release")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The latest release is available at the following "),e("a",{attrs:{href:"https://axibase.com/public/axibase-collector_latest.htm",target:"_blank",rel:"noopener noreferrer"}},[this._v("link")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("wget")]),this._v(" -O axibase-collector.tar.gz http://axibase.com/public/axibase-collector-v"),e("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("revision"),e("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v(".tar.gz\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"copy-archive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy-archive","aria-hidden":"true"}},[this._v("#")]),this._v(" Copy Archive")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Copy the "),e("code",[this._v("axibase-collector.tar.gz")]),this._v(" file to the server where Axibase Collector is running.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"switch-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch User")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("axibase@36e26a5fd70a:~$ "),a("span",{attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"axibase-collector.war"')]),t._v("\naxibase  25647 27.0  0.9 8037420 625988 ?      Sl   07:23   6:53 java -XX:PermSize"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("128m "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("su")]),this._v(" axibase\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"unpack-archive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unpack-archive","aria-hidden":"true"}},[this._v("#")]),this._v(" Unpack Archive")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("tar")]),this._v(" xvf axibase-collector.tar.gz\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"stop-the-collector-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-the-collector-process","aria-hidden":"true"}},[this._v("#")]),this._v(" Stop the Collector Process")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('axibase@36e26a5fd70a:~$ ps aux | grep "axibase-collector.war"\naxibase  25647 27.0  0.9 8037420 625988 ?      Sl   07:23   6:53 java -XX:PermSize=128m ...\n-Dlogback.configurationFile=/opt/axibase-collector/conf/logback.xml ...\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The installation directory is "),e("code",[this._v("/opt/axibase-collector")]),this._v(" in the above example.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("/opt/axibase-collector/bin/stop-collector.sh\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"replace-axibase-collector-war-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replace-axibase-collector-war-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Replace "),e("code",[this._v("axibase-collector.war")]),this._v(" File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Replace "),e("code",[this._v("/opt/axibase-collector/lib/axibase-collector.war")]),this._v(" with the version contained in the archive:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("cp")]),this._v(" ./axibase-collector/lib/axibase-collector.war /opt/axibase-collector/lib/\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"start-the-collector-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-the-collector-process","aria-hidden":"true"}},[this._v("#")]),this._v(" Start the Collector Process")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/opt/axibase-collector/bin/start-collector.sh\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updating-collector-on-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-collector-on-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating Collector on Docker")])}],!1,null,null,null);e.default=r.exports}}]);