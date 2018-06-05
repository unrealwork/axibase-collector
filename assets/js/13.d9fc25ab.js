(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{386:function(t,e,i){"use strict";i.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ovpm-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ovpm-job","aria-hidden":"true"}},[this._v("#")]),this._v(" OVPM Job")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"job-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#job-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Job Settings")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Max. serial errors threshold")]),this._v(" - defines the maximum amount of consecutive errors after which no more queries will be sent.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i(75),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ovpm-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ovpm-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" OVPM Configuration")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Name")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Configuration name.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP Pool")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Data source.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Path")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Relative path to OVPM CSV endpoint.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("OVPM encoding")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Character set that is used to parse the resulting data.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Interval")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Data interval that will be downloaded.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Query With Time")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("When executing the job, the server will be set to the maximum time of the previous data.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Time Zone")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Time zone in which the data is collected.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Max Rows Per Request")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum amount of rows that will be retrieved.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Data Refresh Interval, seconds")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("OVPM sampling interval.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Error Threshold")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Amount of error requests after which no more queries will be sent.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Error Delay Interval, seconds")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Interval during which the current entity will be excluded from queries, in the case that there are previous errors.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Entity Group")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("List of hosts, entity groups created in Axibase Collector.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Batch Entities")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Defines the number of entities grouped in one query.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Tag Columns")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Columns containing tags.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Metrics")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("List of metrics that will be collected.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Put Type")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Type of data: metric, property, or both.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Default Property Type")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Default property type.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Property Type Column")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Column containing the property types.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Property Keys Columns")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Columns containing the property keys.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Property Values Columns")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Columns containing the property values.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i(74),alt:""}})])}],l=i(0),r=Object(l.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("p",[t._v("OVPM protocol is used to retrieve data from the HP OpenView Performance Manager.")]),t._m(1),i("p",[t._v("Apart from the general job settings that are specified in the "),i("router-link",{attrs:{to:"../job-generic.html"}},[t._v("Axibase Collector Jobs")]),t._v(", OVMP job has an additional job-specific parameter. "),i("br")],1),t._m(2),t._m(3),t._m(4),i("p",[t._v("To configure an OVPM job, click Create OVPM configuration.\nUse the table below to set configuration parameters.")]),t._m(5),t._m(6)])},a,!1,null,null,null);e.default=r.exports},74:function(t,e,i){t.exports=i.p+"assets/img/ovpm_config.703c37cd.png"},75:function(t,e,i){t.exports=i.p+"assets/img/ovpm_settings.d459255a.png"}}]);