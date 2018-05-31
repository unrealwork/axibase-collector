(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{373:function(t,e,i){"use strict";i.r(e);var a=i(0),l=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"scheduling"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scheduling","aria-hidden":"true"}},[t._v("#")]),t._v(" Scheduling")]),i("h2",{attrs:{id:"scheduled-execution"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-execution","aria-hidden":"true"}},[t._v("#")]),t._v(" Scheduled Execution")]),i("p",[t._v("Axibase Collector executes enabled jobs based on a schedule.")]),i("p",[t._v("The number of concurrently executing jobs is set to 32 by default and is controlled with "),i("code",[t._v("quartz.properties")]),t._v(".")]),i("p",[t._v("Jobs execute simultaneously, whereas configurations inside the same job are executed sequentially.")]),i("p",[t._v("Multiple instances of the same job may not run at the same time. If the job is in STARTED status and it is scheduled to execute again, the new execution will not be triggered until the current job instance finishes processing.")]),i("h2",{attrs:{id:"manual-execution"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#manual-execution","aria-hidden":"true"}},[t._v("#")]),t._v(" Manual Execution")]),i("p",[t._v("Jobs can be executed manually with the "),i("code",[t._v("Run")]),t._v(" action, regardless of its schedule or status.")]),i("p",[t._v("Manual execution produces the same results as a scheduled execution.")]),i("p",[t._v("The manual mode is useful for running temporarily disabled jobs (for example when developing new jobs or troubleshooting existing jobs).")]),i("h2",{attrs:{id:"cron-expressions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cron-expressions","aria-hidden":"true"}},[t._v("#")]),t._v(" Cron Expressions")]),i("p",[t._v("A cron expression is a string that determines a schedule for executing a job.")]),i("p",[t._v("Fields in a cron expression have the following order:")]),i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("[seconds] [minutes] [hours] [day-of-month] [month] [day-of-week]\n")])]),i("p",[i("img",{attrs:{src:"http://axibase.com/wp-content/uploads/2016/03/cron_expressions.png",alt:"Cron Expressions"}})]),i("p",[t._v("Field Control Symbols:")]),i("table",[i("thead",[i("tr",[i("th",[i("strong",[t._v("Name")])]),i("th",[i("strong",[t._v("Description")])])])]),i("tbody",[i("tr",[i("td",[t._v("*")]),i("td",[t._v("Any value")])]),i("tr",[i("td",[t._v("?")]),i("td",[t._v("No specific value")])]),i("tr",[i("td",[t._v("R")]),i("td",[t._v("Random value within allowed value range")])]),i("tr",[i("td",[t._v(",")]),i("td",[t._v("Value list separator")])]),i("tr",[i("td",[t._v("-")]),i("td",[t._v("Range of values")])]),i("tr",[i("td",[t._v("/")]),i("td",[t._v("Step values")])])])]),i("p",[t._v("For example, "),i("code",[t._v("0 0 8 * * ?")]),t._v(" means execution at 08:00:00 every day.")]),i("p",[t._v("Field Constraints:")]),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Name")])]),i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Allowed Values")])])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("second")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("0-59, R")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("minute")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("0-59, R")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("hour")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("0-23, R")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("day-of-month")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("1-31, ?")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("month")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("1-12 or JAN-DEC")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("day-of-week")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("1-7 or MON-SUN, ?")])])])]),i("ul",[i("li",[t._v("If the specific value is set in "),i("code",[t._v("day-of-week")]),t._v(", "),i("code",[t._v("day-of-month")]),t._v(" should be set to "),i("code",[t._v("?")]),t._v(", e.g. "),i("code",[t._v("0 0 6 ? * MON")]),t._v(".")]),i("li",[t._v("If the specific value is set in "),i("code",[t._v("day-of-month")]),t._v(", "),i("code",[t._v("day-of-week")]),t._v(" should be set to "),i("code",[t._v("?")]),t._v(", e.g. "),i("code",[t._v("0 0 6 */2 * ?")]),t._v(".")])]),i("p",[t._v("Second, minute, and hour fields support "),i("strong",[t._v("R")]),t._v(" (random) symbol to randomize execution time.")]),i("h3",{attrs:{id:"cron-expression-examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cron-expression-examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Cron Expression Examples")]),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Expression")])]),i("th",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("Second")])]),i("th",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("Minute")])]),i("th",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("Hour")])]),i("th",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("Day of Month")])]),i("th",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("Month")])]),i("th",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("Day of Week")])]),i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Description")])])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 0/15 * * * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0/15")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Every 15 minutes.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 5 4 * * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("At 04:05 every day.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0/10 * * * * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0/10")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Every 10 seconds.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 0/1 * * * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0/1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Every minute.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 0 0 * * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Every day at 00:00.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("R 0/5 * * * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("R")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0/5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Every 5 minutes at a random second.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("R R 2 * * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("R")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("R")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("At a random minute and second past the 2nd hour.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 5,35 * * * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5,35")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Every hour at the 5th and 35th minute.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 0 6 ? * MON")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("6")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("MON")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Every Monday at 06:00.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 5 0 * 8 ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("8")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("At 00:05 every day in August.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("30 15 14 1 * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("30")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("15")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("14")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("At 14:15:30 on the 1st of every month.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 0 22 ? * 1-5")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("22")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1-5")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("At 22:00 on Mon, Tue, Wed, Thu and Fri.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 5 0-10/2 * * ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0-10/2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("At every 9th minute past the 0, 2, 4, 6, 8, and 10th hour.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("0 0 0,12 1 */2 ?")])]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("0,12")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("*/2")]),i("td",{staticStyle:{"text-align":"right"}},[t._v("?")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("At 00:00 and 12:00 on the 1st in "),i("br"),t._v("January, March, May, July, September and November.")])])])]),i("h2",{attrs:{id:"execution-state"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#execution-state","aria-hidden":"true"}},[t._v("#")]),t._v(" Execution State")]),i("p",[t._v("Jobs can have the following executing states:")]),i("ul",[i("li",[t._v("STARTING")]),i("li",[t._v("STARTED")]),i("li",[t._v("STOPPED")]),i("li",[t._v("STOPPING")]),i("li",[t._v("COMPLETED")]),i("li",[t._v("ABANDONED")]),i("li",[t._v("FAILED")])])])}],!1,null,null,null);e.default=l.exports}}]);