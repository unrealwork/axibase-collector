(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{376:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"launching-linked-containers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#launching-linked-containers","aria-hidden":"true"}},[t._v("#")]),t._v(" Launching Linked Containers")]),n("p",[t._v("You can launch linked ATSD and Axibase Collector containers on the same Docker host with "),n("code",[t._v("docker-compose")]),t._v(".")]),n("p",[n("code",[t._v("docker-compose.yml")])]),n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{attrs:{class:"token key atrule"}},[t._v("version")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'2'")]),t._v("\n\n"),n("span",{attrs:{class:"token key atrule"}},[t._v("services")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n  "),n("span",{attrs:{class:"token key atrule"}},[t._v("atsd")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("image")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" axibase/atsd"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("ports")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"8081:8081"')]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"8443:8443"')]),t._v("\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("container_name")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" atsd\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("environment")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ADMIN_USER_NAME=$"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ADMUSR"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ADMIN_USER_PASSWORD=$"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ADMPWD"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" COLLECTOR_USER_TYPE=api"),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rw\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" COLLECTOR_USER_NAME=$"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("USR"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" COLLECTOR_USER_PASSWORD=$"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("PWD"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token key atrule"}},[t._v("collector")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("image")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" axibase/collector"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("ports")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"9443:9443"')]),t._v("\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("depends_on")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" atsd\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("volumes")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("environment")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" COLLECTOR_USER_NAME=$"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("USR"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" COLLECTOR_USER_PASSWORD=$"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("PWD"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ATSD_URL=https"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//atsd"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("8443")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" COLLECTOR_ARGS="),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("job"),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("enable=docker"),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("socket\n")])]),n("p",[t._v("Launch containers:")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export ADMUSR=auser; export ADMPWD=apassword; \\\n      export USR=cuser; export PWD=cpassword; \\\n      docker-compose up -d\n")])]),n("p",[t._v("Log in to ATSD on "),n("code",[t._v("https://docker_host:8443")]),t._v(" using administrator credentials.")])])}],!1,null,null,null);s.default=e.exports}}]);