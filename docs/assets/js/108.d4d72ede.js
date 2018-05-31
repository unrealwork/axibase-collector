(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{270:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("blockquote",[a("p",[t._v("Using Collector to monitor Docker? Launch container in privileged mode as described in this "),a("router-link",{attrs:{to:"./jobs/docker.html#local-collection"}},[t._v("document")]),t._v(".")],1)]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),a("p",[t._v("The launch command is different if the Collector container is used to "),a("router-link",{attrs:{to:"./jobs/docker.html#local-collection"}},[t._v("monitor statistics")]),t._v(" from the local Docker Engine.")],1),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),a("p",[t._v("For example, to set the maximum Java heap size, specify:")]),t._m(28),t._m(29),a("p",[t._v("It may take up to 5 minutes to initialize the application.")]),t._m(30),a("p",[t._v("Wait until the following message appears:")]),t._m(31),a("p",[t._v("This message indicates that the initial configuration is complete.")]),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),a("p",[t._v("Open "),a("code",[t._v("https://docker_hostname:32769")]),t._v(" in your browser and create an "),a("router-link",{attrs:{to:"configure-administrator-account.html"}},[t._v("administrator account")]),t._v(".")],1),t._m(37),t._m(38),a("p",[t._v("Configure the "),a("router-link",{attrs:{to:"atsd-server-connection.html"}},[t._v("ATSD Server connection")]),t._v(" to send data into an Axibase Time Series Database instance.")],1),t._m(39),a("p",[t._v("Review the following log files for any errors:")]),t._m(40),t._m(41)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installation-on-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation on Docker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"host-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Host Requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Docker Engine")]),this._v(" 1.7+")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"image-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-information","aria-hidden":"true"}},[this._v("#")]),this._v(" Image Information")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Image name: axibase/collector:latest")]),e("li",[e("a",{attrs:{href:"https://github.com/axibase/docker-axibase-collector/blob/master/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[this._v("Dockerfile")])]),e("li",[e("a",{attrs:{href:"https://hub.docker.com/r/axibase/collector/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Docker Hub")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"importing-an-image-in-restricted-environments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#importing-an-image-in-restricted-environments","aria-hidden":"true"}},[this._v("#")]),this._v(" Importing an Image in Restricted Environments")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the target Docker host has no direct connectivity to "),e("a",{attrs:{href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"}},[this._v("Docker Hub")]),this._v(", execute the following steps to prepare and load the Collector image:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Login into a Docker host which is connected to Docker Hub.")]),e("li",[this._v("Pull the Collector image from Docker Hub and export it into an archive file:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker pull axibase/collector:latest\ndocker save -o docker-axibase-collector.tar axibase/collector:latest\ngzip docker-axibase-collector.tar\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Copy the "),e("code",[this._v("docker-axibase-collector.tar.gz")]),this._v(" archive to the target Docker host.")]),e("li",[this._v("Import the image from the archive:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker load < docker-axibase-collector.tar.gz\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Alternatively, you can download a pre-built image file from "),e("a",{attrs:{href:"https://axibase.com/public/docker-axibase-collector.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[this._v("axibase.com")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"start-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-container","aria-hidden":"true"}},[this._v("#")]),this._v(" Start Container")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{attrs:{class:"token attr-name"}},[this._v("docker")]),this._v(" "),e("span",{attrs:{class:"token attr-value"}},[this._v("run \\\n --detach \\\n --publish-all \\\n --restart=always \\\n --name=axibase-collector \\\n axibase/collector:latest")]),this._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To automatically configure a connection to the Axibase Time Series Database, add the "),e("code",[this._v("-atsd-url")]),this._v(" parameter containing the ATSD hostname and https port (default 8443), as well as "),e("a",{attrs:{href:"https://axibase.com/docs/atsd/administration/collector-account.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("collector account")]),this._v(" credentials:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{attrs:{class:"token attr-name"}},[this._v("docker")]),this._v(" "),e("span",{attrs:{class:"token attr-value"}},[this._v("run \\\n --detach \\\n --publish-all \\\n --restart=always \\\n --name=axibase-collector \\\n axibase/collector:latest \\\n  -atsd-url=https://collector-user:collector-password@atsd_host:atsd_https_port")]),this._v("\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("If the user name or password contains a "),a("code",[t._v("$")]),t._v(", "),a("code",[t._v("&")]),t._v(", "),a("code",[t._v("#")]),t._v(", or "),a("code",[t._v("!")]),t._v(" character, escape it with backslash "),a("code",[t._v("\\")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The password must contain at least "),e("strong",[this._v("six")]),this._v(" (6) characters and is subject to the following "),e("a",{attrs:{href:"https://axibase.com/docs/atsd/administration/user-authentication.html#password-requirements",target:"_blank",rel:"noopener noreferrer"}},[this._v("requirements")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example, for user "),e("code",[this._v("adm-dev")]),this._v(" with the password "),e("code",[this._v("my$pwd")]),this._v(" sending data to ATSD at "),e("code",[this._v("https://10.102.0.6:8443")]),this._v(", specify:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{attrs:{class:"token attr-name"}},[this._v("docker")]),this._v(" "),e("span",{attrs:{class:"token attr-value"}},[this._v("run \\\n --detach \\\n --publish-all \\\n --restart=always \\\n --name=axibase-collector \\\n axibase/collector:latest \\\n  -atsd-url=https://adm-dev:my\\$pwd@10.102.0.6:8443")]),this._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"start-container-in-privileged-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-container-in-privileged-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Start Container in Privileged Mode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"launch-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launch-parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Launch Parameters")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Name")])]),a("th",[a("strong",[t._v("Required")])]),a("th",[a("strong",[t._v("Description")])])])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("--detach")])]),a("td",[t._v("Yes")]),a("td",[t._v("Run container in background and print container id.")])]),a("tr",[a("td",[a("code",[t._v("--publish-all")])]),a("td",[t._v("No")]),a("td",[t._v("Publish exposed https port (9443) to a random port.")])]),a("tr",[a("td",[a("code",[t._v("--restart")])]),a("td",[t._v("No")]),a("td",[t._v("Auto-restart policy. "),a("em",[t._v("Not supported in all Docker Engine versions.")])])]),a("tr",[a("td",[a("code",[t._v("--name")])]),a("td",[t._v("No")]),a("td",[t._v("Assign a host-unique name to the container.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To bind the collector to a particular port instead of a random one, replace "),e("code",[this._v("--publish-all")]),this._v(" with "),e("code",[this._v("--publish 10443:9443")]),this._v(", where the first number indicates an available port on the Docker host.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Environment Variables")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Name")])]),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Required")])]),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Description")])])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ATSD_SERVICE_HOST")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Host where Axibase Time Series Database is installed.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ATSD_SERVICE_PORT_HTTPS")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Https port.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ATSD_SERVICE_PORT_TCP")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tcp port for "),a("a",{attrs:{href:"https://axibase.com/docs/atsd/api/network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("network commands")]),t._v(".")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ATSD_URL")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("URL (protocol://host:port) for the Axibase Time Series Database connection.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("COLLECTOR_USER_NAME")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("User name for the "),a("a",{attrs:{href:"https://axibase.com/docs/atsd/administration/collector-rw-account.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("data collector")]),t._v(" account.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("COLLECTOR_USER_PASSWORD")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://axibase.com/docs/atsd/administration/user-authentication.html#password-requirements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Password")]),t._v(" for the data collector account.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("DOCKER_HOSTNAME")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Hostname of the Docker host where Axibase Collector container is running.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("JAVA_OPTS")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Java VM options."),a("br"),t._v("By default the collector starts with an option "),a("code",[t._v("-Xmx256m")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example, for user "),e("code",[this._v("adm-dev")]),this._v(" with the password "),e("code",[this._v("my$pwd")]),this._v(" sending data to ATSD at "),e("code",[this._v("https://10.102.0.6:8443")]),this._v(", specify:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{attrs:{class:"token attr-name"}},[this._v("docker")]),this._v(" "),e("span",{attrs:{class:"token attr-value"}},[this._v("run \\\n --detach \\\n --publish-all \\\n --restart=always \\\n --name=axibase-collector \\\n --env COLLECTOR_USER_NAME=adm-dev \\\n --env COLLECTOR_USER_PASSWORD=my\\$pwd \\\n --env ATSD_URL=https://10.102.0.6:8443 \\\n axibase/collector:latest")]),this._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{attrs:{class:"token attr-name"}},[this._v("docker")]),this._v(" "),e("span",{attrs:{class:"token attr-value"}},[this._v("run \\\n --detach \\\n --publish-all \\\n --restart=always \\\n --name=axibase-collector \\\n --env JAVA_OPTS=-Xmx512m \\\n axibase/collector:latest")]),this._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"check-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Check Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker exec -it axibase-collector tail -f /opt/axibase-collector/logs/axibase-collector.log\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("em",[this._v("FrameworkServlet 'dispatcher': initialization completed.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"validation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validation","aria-hidden":"true"}},[this._v("#")]),this._v(" Validation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker ps | grep axibase-collector\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES\nee15099d9f88        axibase/collector   "/bin/bash /opt/axiba"   33 seconds ago      Up 32 seconds       0.0.0.0:32769->9443/tcp   axibase-collector\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Take note of the public https port assigned to axibase-collector container, i.e. "),e("strong",[this._v("32769")]),this._v(" in the example above.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"login"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login","aria-hidden":"true"}},[this._v("#")]),this._v(" Login")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("docker_hostname")]),this._v(" is the hostname or IP address of the Docker host and "),e("strong",[this._v("32769")]),this._v(" is the external port number assigned to the Collector container in the previous step.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setup-atsd-connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-atsd-connection","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup ATSD Connection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker exec -it axibase-collector tail -n 100 /opt/axibase-collector/logs/axibase-collector.log\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker exec -it axibase-collector tail -n 100 /opt/axibase-collector/logs/err-collector.log\n")])])}],!1,null,null,null);e.default=s.exports}}]);