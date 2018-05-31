(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{361:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"kafka-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-job","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka Job")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"job-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#job-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Job Settings")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(72),alt:"Kafka job settings"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"job-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#job-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Job Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To configure a Kafka job, click on the "),e("code",[this._v("Create Configuration")]),this._v(" button.\nUse the table below to set configuration parameters.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Field")])]),s("th",[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",[t._v("Group Id")]),s("td",[t._v("A unique string that identifies the consumer group this consumer belongs to.")])]),s("tr",[s("td",[t._v("Topic Name")]),s("td",[t._v("A topic is a category or feed name to which messages are published.")])]),s("tr",[s("td",[t._v("Offset Reset Strategy")]),s("td",[t._v("Initial offset:"),s("br"),t._v("* EARLIEST: automatically reset the offset to the earliest offset"),s("br"),t._v("* LATEST: automatically reset the offset to the latest offset"),s("br"),t._v("* LAST_N: reset the offset to the lastes offset and substract "),s("code",[t._v("Last Cont")]),t._v(" value from it."),s("br"),s("br"),t._v("Offset strategies (EARLIEST, LATEST) use at first job running, then job uses the last committed offset."),s("br"),t._v("The "),s("code",[t._v("LAST_N")]),t._v(" offset strategy doesn't use last committed offset, it uses last N records each time job executes.")])]),s("tr",[s("td",[t._v("Last Count")]),s("td",[t._v("The number of last messages.")])]),s("tr",[s("td",[t._v("Message Format")]),s("td",[s("a",{attrs:{href:"https://axibase.com/docs/atsd/api/network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Network API Command")]),t._v(" or JSON. Network API Command will be stored in ATSD as is. The JSON message will be parsed into command(s).")])]),s("tr",[s("td",[t._v("Use Listener")]),s("td",[t._v("Enable continuous listener of messages instead of scheduled polling.")])]),s("tr",[s("td",[t._v("Ignore Invalid Commands")]),s("td",[t._v("If enabled, skip messages for which no valid command can be created."),s("br"),t._v("If the message is invalid and this case is not enabled, the job will fail with an error.,")])]),s("tr",[s("td",[t._v("Commit")]),s("td",[t._v("Send commands into ATSD synchronously and wait until the commands have been committed to the underlying storage.")])]),s("tr",[s("td",[t._v("Batch Size")]),s("td",[t._v("Number of commands to send into ATSD in one request.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"json-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" JSON Settings")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If "),e("code",[this._v("JSON")]),this._v(" message format is selected, we need to configure JSON fields mapping to command fields:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"entity-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entity-fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Entity Fields")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Name")])]),s("th",[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",[t._v("Entity")]),s("td",[t._v("Entity name, specified literally or extracted from the specific field in the matched object.")])]),s("tr",[s("td",[t._v("Entity Prefix")]),s("td",[t._v("Text added to the entity name, retrieved from the specified field. For example, if Entity Prefix is set to 'custom.', and the field value is 'my-host', the resulting entity name will be 'custom.my-host'.")])]),s("tr",[s("td",[t._v("Entity Expression")]),s("td",[t._v("Freemarker expression to convert entities."),s("br"),t._v("For example:"),s("br"),t._v("${city?keep_after('.')}"),s("br"),t._v("${LOOKUP('city codes', city)}")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"time-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#time-fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Time Fields")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Name")])]),s("th",[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",[t._v("Time Default")]),s("td",[t._v("Specify time value for all commands.")])]),s("tr",[s("td",[t._v("Time Field")]),s("td",[t._v("Field with values that specify time for all commands.")])]),s("tr",[s("td",[t._v("Time Format")]),s("td",[t._v("Date format applied when parsing time value.")])]),s("tr",[s("td",[t._v("Time Zone")]),s("td",[t._v("Time zone can be optionally applied if the extracted date is in local time, otherwise the local Collector time zone is in effect.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"series-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#series-fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Series Fields")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Name")])]),s("th",[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",[t._v("Metric Prefix")]),s("td",[t._v("Text added to the metric name. For example, if Metric Prefix is set to 'custom.', and the metric name is 'cpu_busy', the resulting metric name will be 'custom.cpu_busy'.")])]),s("tr",[s("td",[t._v("Included Fields")]),s("td",[t._v("By default, all numeric fields from nested objects are included in commands. The list of included fields can be overridden explicitly by specifying their names, separated by comma.")])]),s("tr",[s("td",[t._v("Excluded Fields")]),s("td",[t._v("List of particular field names to be excluded from commands. Applies when 'Included Fields' is empty.")])]),s("tr",[s("td",[t._v("Annotation Fields")]),s("td",[t._v("List of fields whose values will be saved as 'text' annotation along with the numeric value.")])]),s("tr",[s("td",[t._v("Metric Name & Value")]),s("td",[t._v("Metric name and value extracted from the given fields in the matched object.")])]),s("tr",[s("td",[t._v("Field Expressions")]),s("td",[t._v("Freemarker expressions to convert metric fields."),s("br"),t._v("For example:"),s("br"),t._v("${city?keep_after('.')}"),s("br"),t._v("${LOOKUP('city codes', city)}")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"property-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#property-fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Property Fields")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Name")])]),s("th",[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",[t._v("Property Default Type")]),s("td",[t._v("Property type that will be used as a default type for all properties.")])]),s("tr",[s("td",[t._v("Property Type Field")]),s("td",[t._v("Field with value that will be used as property type.")])]),s("tr",[s("td",[t._v("Property Key Fields")]),s("td",[t._v("Fields that should be included into the Property command value collection.")])]),s("tr",[s("td",[t._v("Property Value Fields")]),s("td",[t._v("Fields that should be loaded to a collection as properties.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"message-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message-fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Message Fields")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Name")])]),s("th",[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",[t._v("Message Default Type")]),s("td",[t._v("Message type that will be used as a default type for all messages.")])]),s("tr",[s("td",[t._v("Message Type Field")]),s("td",[t._v("Field with value that will be used as message type.")])]),s("tr",[s("td",[t._v("Message Default Type")]),s("td",[t._v("Message source that will be used as a default source for all messages.")])]),s("tr",[s("td",[t._v("Message Type Field")]),s("td",[t._v("Field with value that will be used as message source.")])]),s("tr",[s("td",[t._v("Message Tag Fields")]),s("td",[t._v("Message tags, included as tags into the message command.")])]),s("tr",[s("td",[t._v("Message Default")]),s("td",[t._v("Message value that will be used as a default text for all messages.")])]),s("tr",[s("td",[t._v("Message Field")]),s("td",[t._v("Field with value that will be used as message text.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(71),alt:"Kafka Configuration Example"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(70),alt:"Kafka JSON mapping settings"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Sample Message:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"pitagname"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token string"}},[t._v('"AXI.R06PIS01:SIC-84-601.PV"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"pitagvalue"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token string"}},[t._v('"149.478"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"pointtype"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token string"}},[t._v('"Float32"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"questionable"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"substituted"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token string"}},[t._v('"2015-12-25T11:28:14.000"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"localtime"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token string"}},[t._v('"2015-12-25T13:28:14.000"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"annotated"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"original_timestamp_from_sdk"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token string"}},[t._v('"2015-12-25T13:28:14.000"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"path"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token string"}},[t._v('"/Axibase/NUR/AXI/Upstream/84BR02"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Sample Command:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("series e:/axibase/nur/axi/upstream/84br02 d:2015-12-25T13:28:14.000Z m:AXI.R06PIS01:SIC-84-601.PV=149.478\n")])])}],r=s(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("The Kafka job provides a way to read messages from Apache Kafka broker(s) to convert them into series, property, and message commands.")]),t._m(2),s("p",[t._v("Apart from "),s("router-link",{attrs:{to:"../job-generic.html"}},[t._v("common")]),t._v(", Kafka job has an additional "),s("code",[t._v("Consumer")]),t._v(" field. "),s("br"),s("strong",[t._v("Consumer")]),t._v(" list allows you to select a "),s("router-link",{attrs:{to:"kafka-consumer.html"}},[t._v("consumer")]),t._v(" that will be used.")],1),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),s("ul",[s("li",[s("router-link",{attrs:{to:"examples/kafka/network-format/"}},[t._v("Network API Command")])],1),s("li",[s("router-link",{attrs:{to:"examples/kafka/json-format/"}},[t._v("JSON")])],1)]),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26)])},a,!1,null,null,null);e.default=n.exports},70:function(t,e,s){t.exports=s.p+"assets/img/kafka_json_mapping_settings.0d719f0b.png"},71:function(t,e,s){t.exports=s.p+"assets/img/kafka_job_configuration.12feb6c2.png"},72:function(t,e,s){t.exports=s.p+"assets/img/kafka_job.4f14bf78.png"}}]);