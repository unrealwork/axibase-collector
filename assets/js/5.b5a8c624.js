(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{394:function(e,t,s){"use strict";s.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"monitoring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitoring","aria-hidden":"true"}},[this._v("#")]),this._v(" Monitoring")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Type: collector-job")]),s("li",[e._v("Source: job_name")]),s("li",[e._v("Severity: NORMAL if okay, MAJOR on PARTIAL_FAIL, and CRITICAL in case of ERROR")]),s("li",[e._v("Entity: Axibase Collector hostname")]),s("li",[e._v("Tag "),s("code",[e._v("status")]),e._v(": COMPLETED, PARTIAL_FAIL, FAIL")]),s("li",[e._v("Tag "),s("code",[e._v("job_name")])]),s("li",[e._v("Tag "),s("code",[e._v("job_type")])]),s("li",[e._v("Message: Completed in "),s("code",[e._v("N")]),e._v(" ms. Items read: "),s("code",[e._v("N")]),e._v(". Commands sent: "),s("code",[e._v("N")]),e._v(". An error will be included in the message if an error was raised.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[e._v("Message: Completed in "),s("code",[e._v("N")]),e._v(" ms. Files read: "),s("code",[e._v("N")]),e._v(". Files sent: "),s("code",[e._v("N")]),e._v(". "),s("br"),e._v("Failed requests: "),s("code",[e._v("N")]),e._v(" COMPLETED_COUNT=N ERROR_COUNT=N FILE_COUNT=N "),s("br"),e._v(" ROWS_PROCESSED=N. An error description will be included in the message if an error was raised.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(53),alt:"Collector Messages"}})])}],i=s(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("p",[e._v("Axibase Collector sends job status messages to ATSD upon completion so that job execution may be monitored using the built-in Rule Engine.")]),s("p",[e._v("Job status messages contain the following fields:")]),e._m(1),s("p",[e._v("Some job types provide an extended set of tags and a modified message:")]),s("ul",[s("li",[e._v("FILE job\n"),s("ul",[s("li",[e._v("Tag "),s("router-link",{attrs:{to:"./jobs/completion-messages.html"}},[s("code",[e._v("error type")])])],1),e._m(2)])])]),e._m(3)])},o,!1,null,null,null);t.default=n.exports},53:function(e,t,s){e.exports=s.p+"assets/img/collector_messages_atsd.f1d711e3.png"}}]);