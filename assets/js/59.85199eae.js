(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{169:function(t,e,s){t.exports=s.p+"assets/img/mysql-portal.67ca512c.png"},170:function(t,e,s){t.exports=s.p+"assets/img/mysql-portal-icon.df2e9e8d.png"},171:function(t,e,s){t.exports=s.p+"assets/img/mysql-entity-group.3f4273eb.png"},172:function(t,e,s){t.exports=s.p+"assets/img/mysql-metrics.6d60884c.png"},173:function(t,e,s){t.exports=s.p+"assets/img/test_run.8cad42a9.png"},174:function(t,e,s){t.exports=s.p+"assets/img/test_result.b0463673.png"},175:function(t,e,s){t.exports=s.p+"assets/img/mysql-jdbc-job.0ed95715.png"},176:function(t,e,s){t.exports=s.p+"assets/img/mysql-datasource.02839f01.png"},299:function(t,e,s){"use strict";s.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mysql-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-server","aria-hidden":"true"}},[this._v("#")]),this._v(" MySQL Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This document describes how to collect global status metrics from "),e("code",[this._v("performance_schema")]),this._v(" introduced in "),e("a",{attrs:{href:"http://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"}},[this._v("MySQL")]),this._v(" 5.7+ for long-term retention and monitoring in the Axibase Time Series Database.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The process involves enabling a JDBC job in Axibase Collector to poll a "),e("code",[this._v("global_status")]),this._v(" table and uploading the counters to ATSD for processing.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("MySQL Server "),e("code",[this._v("5.7+")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-steps","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation Steps")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"create-a-read-only-account-in-the-target-mysql-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-read-only-account-in-the-target-mysql-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a Read-Only Account in the Target MySQL Server")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'axibase-ro'")]),t._v("@'collector_host"),s("span",{attrs:{class:"token string"}},[t._v("' IDENTIFIED BY '")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token string"}},[t._v("';\nGRANT SELECT ON performance_schema.* TO '")]),t._v("axibase"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("ro"),s("span",{attrs:{class:"token string"}},[t._v("'@'")]),t._v("collector_host'"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFLUSH "),s("span",{attrs:{class:"token keyword"}},[t._v("PRIVILEGES")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'axibase-ro'")]),t._v("@'collector_host"),s("span",{attrs:{class:"token string"}},[t._v("' IDENTIFIED BY '")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token string"}},[t._v("';\nGRANT SELECT ON performance_schema.* TO '")]),t._v("axibase"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("ro"),s("span",{attrs:{class:"token string"}},[t._v("'@'")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("'"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFLUSH "),s("span",{attrs:{class:"token keyword"}},[t._v("PRIVILEGES")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"allow-external-connection-to-the-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allow-external-connection-to-the-database","aria-hidden":"true"}},[this._v("#")]),this._v(" Allow External Connection to the Database")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Modify "),e("code",[this._v("mysql.cnf")]),this._v(" by setting "),e("code",[this._v("bind-address = 0.0.0.0")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"import-mysql-server-job-into-axibase-collector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-mysql-server-job-into-axibase-collector","aria-hidden":"true"}},[this._v("#")]),this._v(" Import MySQL Server Job into Axibase Collector")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Open "),e("strong",[this._v("Jobs:Import")]),this._v(" and upload the "),e("a",{attrs:{href:"https://github.com/unrealwork/axibase-collector/blob/master/jobs/examples/mysql/mysql-server-jobs.xml",target:"_blank",rel:"noopener noreferrer"}},[this._v("mysql-server-jobs.xml")]),this._v(" file.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configure-mysql-server-database-connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-mysql-server-database-connection","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure MySQL Server Database Connection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Open the "),e("strong",[this._v("Data Sources:Databases")]),this._v(" page and select the "),e("code",[this._v("10.102.0.7")]),this._v(" database.")]),e("li",[this._v("Provide connection parameters to the target MySQL Server database as displayed below:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(176),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Execute the following test query to check the connection:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("SELECT 1\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Query result must be "),e("code",[this._v("Query OK")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"verify-job-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-job-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Verify Job Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Open MySQL Server job.")]),e("li",[this._v("Set Data Source to "),e("code",[this._v("10.102.0.7")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(175),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Choose one of the target ATSD instances if your Collector instance is connected to multiple ATSD servers.")]),e("li",[this._v("Save the Job.")]),e("li",[this._v("Open each configuration, click on the [Test] button and review output. See "),e("a",{attrs:{href:"#data-queries"}},[this._v("Data Queries")]),this._v(" below.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(174),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"schedule-the-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schedule-the-job","aria-hidden":"true"}},[this._v("#")]),this._v(" Schedule the Job")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Open the "),s("code",[t._v("JDBC Job")]),t._v(" page and click the [Run] button for the MySQL Server JDBC job.")]),s("li",[t._v("Make sure that the job status is "),s("code",[t._v("COMPLETED")]),t._v(" and "),s("code",[t._v("Items Read")]),t._v(" and "),s("code",[t._v("Sent commands")]),t._v(" are greater than 0.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(173),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("If there are no errors, set job status to Enabled and save the job.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"verify-metrics-in-atsd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-metrics-in-atsd","aria-hidden":"true"}},[this._v("#")]),this._v(" Verify Metrics in ATSD")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Log in to ATSD.")]),e("li",[this._v("Click on the Metrics tab and filter metrics by name "),e("code",[this._v("mysql.*")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(172),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"viewing-data-in-atsd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#viewing-data-in-atsd","aria-hidden":"true"}},[this._v("#")]),this._v(" Viewing Data in ATSD")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metrics","aria-hidden":"true"}},[this._v("#")]),this._v(" Metrics")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"entity-groups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entity-groups","aria-hidden":"true"}},[this._v("#")]),this._v(" Entity Groups")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Open the "),e("strong",[this._v("Admin: Entity Groups")]),this._v(" page.")]),e("li",[this._v("Create a new Entity Group, click on Expression 'Edit mode', and enter the following expression:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("hasMetric")]),e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{attrs:{class:"token string"}},[this._v("'mysql.global_status.uptime'")]),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Save and verify that the group contains your MySQL database hosts:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(171),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"portals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#portals","aria-hidden":"true"}},[this._v("#")]),this._v(" Portals")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Open the "),e("strong",[this._v("Configuration: Portals")]),this._v(" page and import a MySQL portal from "),e("a",{attrs:{href:"https://github.com/unrealwork/axibase-collector/blob/master/jobs/examples/mysql/portal-mysql.xml",target:"_blank",rel:"noopener noreferrer"}},[this._v("portal-mysql.xml")]),this._v(".")]),e("li",[this._v("Click Assign link and associate the portal with the entity group you created earlier.")]),e("li",[this._v("Open Entity tabs, find the mysql database by name, and click on its portal icon.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(170),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"http://apps.axibase.com/chartlab/cf72dec3",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[this._v("MySQL Server Perfomance Live Portal")])]),e("img",{attrs:{src:s(169),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"data-queries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-queries","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Queries")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Metrics Queries select most recent statistics:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("SELECT * FROM performance_schema.global_status\n")])])}],a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),s("p",[t._v("To allow connection from any IP address, use the wildcard for remote address:")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),s("ul",[s("li",[t._v("List of collected "),s("router-link",{attrs:{to:"metric-list.html"}},[t._v("MySQL Server metrics")]),t._v(".")],1)]),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45)])},r,!1,null,null,null);e.default=n.exports}}]);