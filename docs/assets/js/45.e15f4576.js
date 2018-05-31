(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{125:function(t,e,i){t.exports=i.p+"assets/img/atsd-metric-temp.d8a3acaa.png"},126:function(t,e,i){t.exports=i.p+"assets/img/atsd-entity-temp.109523cf.png"},127:function(t,e,i){t.exports=i.p+"assets/img/pi-tags-statistics.8842dd24.png"},128:function(t,e,i){t.exports=i.p+"assets/img/pi-query-statistics.e98605cc.png"},129:function(t,e,i){t.exports=i.p+"assets/img/pi-jobs-list.7b24da7e.png"},130:function(t,e,i){t.exports=i.p+"assets/img/pi-test-5.3605ec74.png"},131:function(t,e,i){t.exports=i.p+"assets/img/pi-test-4.388e5e01.png"},132:function(t,e,i){t.exports=i.p+"assets/img/pi-test-3.28542171.png"},133:function(t,e,i){t.exports=i.p+"assets/img/pi-test-2.07f089af.png"},134:function(t,e,i){t.exports=i.p+"assets/img/pi-test-1b.1534a7dd.png"},135:function(t,e,i){t.exports=i.p+"assets/img/pi-test-1a.a804d948.png"},136:function(t,e,i){t.exports=i.p+"assets/img/pi-config.1e2e6ec8.png"},137:function(t,e,i){t.exports=i.p+"assets/img/pi-job.9b4f898a.png"},312:function(t,e,i){"use strict";i.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"pi-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pi-server","aria-hidden":"true"}},[this._v("#")]),this._v(" PI Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This document describes how to export archive data from a "),e("a",{attrs:{href:"http://www.osisoft.com/pi-system/pi-capabilities/pi-server/",target:"_blank",rel:"noopener noreferrer"}},[this._v("PI Server")]),this._v(" into the Axibase Time Series Database as series commands using the Collector PI job.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("PI SQL Data Access Server "),e("code",[this._v("1.5+")])]),e("li",[this._v("PI JDBC Driver "),e("code",[this._v("1.5+")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pi-job-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pi-job-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" PI Job Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Select "),e("strong",[this._v("PI")]),this._v(" in the "),e("strong",[this._v("Jobs")]),this._v(" dropdown. Click on the "),e("strong",[this._v("Add Job")]),this._v(" button. Fill in all the necessary fields.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i(137),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pi-task-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pi-task-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" PI Task Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Click on the "),e("strong",[this._v("Create Configuration")]),this._v(" button.\nProvide tag-to-entity mapping. You can use freemarker expressions in the "),e("code",[this._v("Entity")]),this._v(" field for string manipulations.\nIf you want to query only a subset of available tags or get picomp2 values satisfying the condition, fill in the "),e("code",[this._v("WHERE Filter")]),this._v(" fields.\n"),e("img",{attrs:{src:i(136),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When you finish, click on the [Test] button to see the queries executed by the job, returned result set, and generated ATSD network commands. During the test mode the number of queried picomp2 rows is limited by 1000.\n"),e("img",{attrs:{src:i(135),alt:""}}),this._v("\nIf the option "),e("code",[this._v("Use JOIN Clause while Fetching Tag Names")]),this._v(" is enabled, only one query is executed:\n"),e("img",{attrs:{src:i(134),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i(133),alt:""}}),e("img",{attrs:{src:i(132),alt:""}}),e("img",{attrs:{src:i(131),alt:""}}),e("img",{attrs:{src:i(130),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When configuration is done, save the job and run it.\nYou may see the execution details by clicking on the "),e("code",[this._v("View")]),this._v(" link in the "),e("code",[this._v("Execution Details")]),this._v(" column.\n"),e("img",{attrs:{src:i(129),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can see executed queries info by following the "),e("code",[this._v("Details")]),this._v(" link.\n"),e("img",{attrs:{src:i(128),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("Tag Statistics")]),this._v(" button will lead to the page with information on every processed PI tag, such as first and last collected measure time, last value, number of collected measures.\n"),e("img",{attrs:{src:i(127),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"verify-metrics-in-atsd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-metrics-in-atsd","aria-hidden":"true"}},[this._v("#")]),this._v(" Verify Metrics in ATSD")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Log in to ATSD.")]),e("li",[this._v("Click on the "),e("code",[this._v("Entities")]),this._v(" tab and filter entities by name, e.g. "),e("code",[this._v("temp")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i(126),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Follow the link in the "),e("code",[this._v("Metrics")]),this._v(" column")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i(125),alt:""}})])}],r=i(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),i("p",[t._v("PI JDBC Driver should be installed and added as a data source in Collector. Follow the steps in "),i("router-link",{attrs:{to:"export-metrics.html#provide-axibase-collector-with-pi-jdbc-driver"}},[t._v("the tutorial")]),t._v(" to do it.")],1),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19)])},s,!1,null,null,null);e.default=n.exports}}]);