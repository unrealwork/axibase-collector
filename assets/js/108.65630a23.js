(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{353:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("To automatically import and enable a job, use the following parameters:")]),t._m(2),t._m(3),t._m(4),a("p",[t._v("To enable one of the "),a("router-link",{attrs:{to:"pre-configured-jobs.html"}},[t._v("pre-configured jobs")]),t._v(", set the "),a("code",[t._v("-job-enable")]),t._v(" parameter:")],1),t._m(5),a("p",[t._v("For example, to enable a job with the name 'json-socrata':")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),a("p",[t._v("To load jobs from a remote file, specify the full path:")]),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),a("p",[t._v("For example, for a job with the name 'my-jmx-job':")]),t._m(18)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"job-autostart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#job-autostart","aria-hidden":"true"}},[this._v("#")]),this._v(" Job Autostart")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Name")])]),a("th",[a("strong",[t._v("Description")])])])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("-job-enable")])]),a("td",[t._v("Enable specified job by name. Support job names separated by commas.")])]),a("tr",[a("td",[a("code",[t._v("-job-path")])]),a("td",[t._v("Import a job from a specified file or HTTP(s) content. Supports comma seperated files. If the "),a("code",[t._v("job-enable")]),t._v(" parameter is not defined, "),a("strong",[t._v("ALL")]),t._v(" jobs in the file will be started.")])]),a("tr",[a("td",[a("code",[t._v("-job-execute")])]),a("td",[t._v("Run specified jobs by name after the start-up. Multiple job names can be specified, separated by comma.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note that the imported jobs will be enabled but will only run according to the schedule. To run a job manually, add the "),e("code",[this._v("-job-execute")]),this._v(" parameter.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"enable-pre-configured-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-pre-configured-job","aria-hidden":"true"}},[this._v("#")]),this._v(" Enable Pre-configured Job")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[this._v("./axibase-collector/bin/start-collector.sh -job-enable"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("job_name\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[this._v("./axibase-collector/bin/start-collector.sh -job-enable"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("json-socrata\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"load-job-from-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-job-from-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Load Job from File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To load and enable a job from file, use the "),e("code",[this._v("-job-path")]),this._v(" and "),e("code",[this._v("-job-enable")]),this._v(" parameters:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[this._v("./axibase-collector/bin/start-collector.sh -job-path"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("path_to_file -job-enable"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("job_name\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example, to enable a 'my-jmx-job' job loaded from the file "),e("code",[this._v("/tmp/job.xml")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[this._v("./axibase-collector/bin/start-collector.sh -job-path"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("/tmp/job.xml -job-enable"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("my-jmx-job\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[this._v("./axibase-collector/bin/start-collector.sh -job-path"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("https://raw.githubusercontent.com/axibase/axibase-collector/master/job-templates/icmp-ping.xml\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"enable-multiple-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-multiple-jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" Enable Multiple Jobs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[this._v("./axibase-collector/bin/start-collector.sh -job-path"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("/tmp/jobs.xml -job-enable"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("json-job,tcp-job\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"run-job-immediately"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-job-immediately","aria-hidden":"true"}},[this._v("#")]),this._v(" Run Job Immediately")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To execute a job immediately, use the "),e("code",[this._v("-job-execute")]),this._v(" parameter:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[this._v("./axibase-collector/bin/start-collector.sh -job-execute"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("job_name\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[this._v("./axibase-collector/bin/start-collector.sh -job-path"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("/tmp/job.xml -job-enable"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("my-jmx-job -job-execute"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("json-my-jmx-job\n")])])}],!1,null,null,null);e.default=r.exports}}]);