(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{269:function(t,e,s){t.exports=s.p+"assets/img/collection_atsd_property_type.f8230d35.png"},270:function(t,e,s){t.exports=s.p+"assets/img/collection_query_type.35776ab2.png"},271:function(t,e,s){t.exports=s.p+"assets/img/collection_url_type_json.6a921ccd.png"},272:function(t,e,s){t.exports=s.p+"assets/img/collection_url_type.da5dae60.png"},273:function(t,e,s){t.exports=s.p+"assets/img/collection_script_type.24c52875.png"},274:function(t,e,s){t.exports=s.p+"assets/img/collection_file_type_filtered.574244fb.png"},275:function(t,e,s){t.exports=s.p+"assets/img/collection_file_type.70e4ed4f.png"},276:function(t,e,s){t.exports=s.p+"assets/img/collection_text_type.4368c071.png"},277:function(t,e,s){t.exports=s.p+"assets/img/item-list.dcea33c8.png"},366:function(t,e,s){"use strict";s.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"collections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collections","aria-hidden":"true"}},[this._v("#")]),this._v(" Collections")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-lists"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-lists","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Lists")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Items starting with the hash "),e("code",[this._v("#")]),this._v(" symbol are treated as comments and are ignored.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"#text"}},[this._v("TEXT")])]),e("li",[e("a",{attrs:{href:"#file"}},[this._v("FILE")])]),e("li",[e("a",{attrs:{href:"#script"}},[this._v("SCRIPT")])]),e("li",[e("a",{attrs:{href:"#url"}},[this._v("URL")])]),e("li",[e("a",{attrs:{href:"#query"}},[this._v("QUERY")])]),e("li",[e("a",{attrs:{href:"#atsd_property"}},[this._v("ATSD_PROPERTY")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("FILE")]),s("li",[t._v("HTTP")]),s("li",[t._v("ICMP")]),s("li",[t._v("JSON")]),s("li",[t._v("OVPM")]),s("li",[t._v("SNMP")]),s("li",[t._v("SOCRATA")]),s("li",[t._v("TCP")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To create a new list, open the "),e("strong",[this._v("Collections:Item Lists")]),this._v(" page, and click "),e("strong",[this._v("Add")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Field")])]),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Name")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Item List name.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Description")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Item List description.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Type")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Method used to retrieve list items. See "),s("a",{attrs:{href:"#types"}},[t._v("types")]),t._v(".")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Discard Duplicates")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Discard items with the same name."),s("br"),t._v("If true, the list discards duplicate items regardless of type (TEXT, FILE, SCRIPT)."),s("br"),t._v("String comparison for duplicate checks is case-sensitive.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Items")]),t._v(", "),s("code",[t._v("Path")]),t._v(", "),s("code",[t._v("Command")]),t._v("...")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Type-specific fields to configure the source for reading list items.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Use the "),e("code",[this._v("${ITEM}")]),this._v(" placeholder to access the value of the current item in the list while iterating.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example, include the "),e("code",[this._v("${ITEM}")]),this._v(" placeholder into the Path field in JSON job to query a different URL for each element in the list.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(277),alt:"Item List Example"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[this._v("#")]),this._v(" Functions")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-ls"}},[s("code",[t._v("$"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token identifier"}},[t._v("ITEM")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token identifier"}},[t._v("arguments")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Example: "),e("code",[this._v('${ITEM?keep_before("_")}')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-ls"}},[s("code",[t._v("$"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token identifier"}},[t._v("ITEM")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token identifier"}},[t._v("functionA")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token identifier"}},[t._v("arguments")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token identifier"}},[t._v("functionB")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token identifier"}},[t._v("arguments")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Example: "),e("code",[this._v('${ITEM?keep_before("_")?replace(".csv", "")}')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#types","aria-hidden":"true"}},[this._v("#")]),this._v(" Types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"text"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text","aria-hidden":"true"}},[this._v("#")]),this._v(" TEXT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("An Item List which stores strings entered in the "),e("code",[this._v("Items")]),this._v(" field on the form.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(276),alt:"TEXT Type"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file","aria-hidden":"true"}},[this._v("#")]),this._v(" FILE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("Field")])]),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("Description")])])])]),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[this._v("Path")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("Absolute path to the text file containing Item List elements")])]),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[this._v("Item Filter")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("Expression for matching item. This field also supports regex expression, for example: REGEXP(expression).")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(275),alt:"FILE Type"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Exclude items which end with "),e("code",[this._v("axibase.com")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(274),alt:"FILE Type"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#script","aria-hidden":"true"}},[this._v("#")]),this._v(" SCRIPT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Executes a script specified in the "),e("code",[this._v("Command")]),this._v(" field and reads lines from a standard output as list items.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Field")])]),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Path to the Script")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Relative path to a script file returning Item List elements."),s("br"),t._v("Scripts should be located in $AXIBASE_COLLECTOR_HOME/conf/scripts directory.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Command")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("A list of commands returning Item List elements. During execution a temporary file is created in the directory $AXIBASE_COLLECTOR_HOME/conf/scripts, also this directory is used as working directory."),s("br"),t._v("It is recommended to specify a command interpreter by providing a shebang on the first line, e.g. #!/usr/bin/env bash."),s("br"),t._v("You must provide the setting 'script.text.execute.allow=true' in server.properties file in order to be able to use this feature.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("Command")]),this._v(" field should start with the script file name (absolute path not supported) and optional script arguments.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(273),alt:"SCRIPT Type"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Example")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The directory "),e("code",[this._v("/tmp/report/csv")]),this._v(" contains CSV files. The Item List should contain a collection of file name prefixes before the underscore symbol.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("ent-1_file-1.csv\nent-1_file-2.csv\nent-1_file-3.csv\nent-2_file-1.csv\nent-2_file-2.csv\nent-3_file-3.csv\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("nano")]),this._v(" prefix.sh\n")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("#!/usr/bin/env bash")]),t._v("\ndir"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"'),s("span",{attrs:{class:"token variable"}},[t._v("$1")]),t._v('/*"')]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("file")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$dir")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -f "),s("span",{attrs:{class:"token variable"}},[t._v("$file")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v("  "),s("span",{attrs:{class:"token variable"}},[t._v("$file")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" *"),s("span",{attrs:{class:"token string"}},[t._v('"_"')]),t._v("* "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        filename"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("$"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("file"),s("span",{attrs:{class:"token comment"}},[t._v("##*/}")]),t._v("\n        b"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token variable"}},[t._v("${filename%_*}")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" -e "),s("span",{attrs:{class:"token string"}},[t._v('"'),s("span",{attrs:{class:"token variable"}},[t._v("$b")]),t._v('"')]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("chmod")]),this._v(" a+x prefix.sh\nprefix.sh /tmp/report/csv\n\nent-1\nent-1\nent-1\nent-2\nent-2\nent-3\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url","aria-hidden":"true"}},[this._v("#")]),this._v(" URL")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Field")])]),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("HTTP Pool")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP Pool specifying connection properties to ATSD from which the records will be retrieved.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Path")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP(s) Path to file. If HTTP Pool is enabled, the path should be relative. Otherwise the Path should be a full URI including the protocol, host, port and path.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Content Format")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Content format in the file. Supported formats: "),s("code",[t._v("MULTILINE_TEXT")]),t._v(" and "),s("code",[t._v("JSON")]),t._v(".")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Item Filter")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Expression for matching item. This field also supports regex expression, for example: REGEXP(expression).")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("JSON Path")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("JSON Path expression to match a list of items in the JSON document.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Separator")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Separator used when concatenating multiple field values.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the file is not found, an empty list is returned. List items should be separated with a line break when the "),e("code",[this._v("MULTILINE_TEXT")]),this._v(" format is selected.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"#example-with-multiline-text-content"}},[this._v("MULTILINE_TEXT")])]),e("li",[e("a",{attrs:{href:"#example-with-json-content"}},[this._v("JSON")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"example-with-multiline-text-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-with-multiline-text-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Example with "),e("code",[this._v("MULTILINE_TEXT")]),this._v(" content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(272),alt:"URL Type"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("em",[e("strong",[this._v("Example")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("URL = http://m.uploadedit.com/bbtc/1502281772577.txt\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("#ID\n2128406\n2513822\n2513836\n2513838\n2513839\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("2128406\n2513822\n2513836\n2513838\n2513839\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"example-with-json-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-with-json-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Example with "),e("code",[this._v("JSON")]),this._v(" content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(271),alt:"URL Type JSON"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query","aria-hidden":"true"}},[this._v("#")]),this._v(" QUERY")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Field")])]),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Database")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Database from which the item list records will be selected.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Query")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT query for retrieving item list elements. Values contained in multiple columns are concatenated using specified separator.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Separator")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Separator used when concatenating multiple column values.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Each item is created by concatenating values from "),e("strong",[this._v("all")]),this._v(" columns in a given row separated by the specified token.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(270),alt:"QUERY Type"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"atsd-property"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#atsd-property","aria-hidden":"true"}},[this._v("#")]),this._v(" ATSD_PROPERTY")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Requests a list of property records from ATSD with the "),e("a",{attrs:{href:"https://axibase.com/docs/atsd/api/data/properties/query.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("property query")]),this._v(" method.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Field")])]),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Description")])])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("HTTP Pool")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP Pool specifying connection properties to ATSD from which the records will be retrieved.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Property Type")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Property type to be retrieved.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Entity")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Entity name or pattern containing * as a wildcard.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Entity Group")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Entity group name to filter records for entities that are members of this group.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Entity Expression")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("An expression to filter entities: all or a subset matched with Entity/Entity Group fields.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Key/Tag Filter")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Expression for matching property records with specified keys or tags.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Keys/Tags")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("List of property keys and tags to be concatenated into a line using separator specified in Separator field. All fields are concatenated, if this field is set to *.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Entity Tags")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("List of entity tags to be concatenated into a line using separator specified in Separator field. All fields are concatenated, if this field is set to *.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Separator")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Separator used when concatenating multiple key/tag values.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(269),alt:"ATSD_PROPERTY Type"}})])}],a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("Item List is a collection of strings which can be iterated to execute repetitive requests (queries) within the same job configuration.")]),s("p",[t._v("The list can be defined by specifying items as text (one item per line) or by retrieving them from an external source such as file or script output.")]),t._m(2),s("p",[t._v("Supported list types:")]),t._m(3),s("p",[t._v("Job types with support for Item List automation:")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),s("p",[t._v("The items retain the original order as specified in the editor or returned by an external source.")]),t._m(10),t._m(11),t._m(12),s("p",[t._v("Item values can be further modified with built-in "),s("router-link",{attrs:{to:"jobs/placeholders.html#string-functions"}},[t._v("string functions")]),t._v(".")],1),t._m(13),t._m(14),s("p",[t._v("Multiple functions can be chained (executed from left to right):")]),t._m(15),t._m(16),t._m(17),s("p",[t._v("Item Lists may receive items from different sources. Currently the following types are implemented:")]),t._m(18),t._m(19),s("p",[t._v("List items should be separated by a line break.")]),t._m(20),t._m(21),s("p",[t._v("Reads lines from a file on the local filesystem.")]),t._m(22),s("p",[t._v("If the file is not found, an empty list is returned. List items in the file should be separated with a line break.")]),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),s("p",[t._v("The script should print items separated by line breaks to 'stdout'.")]),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),s("p",[t._v("Reads lines from a remote file/page.")]),t._m(38),t._m(39),s("p",[t._v("Examples:")]),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),s("p",[t._v("Remote file content:")]),t._m(45),s("p",[t._v("result:")]),t._m(46),t._m(47),t._m(48),t._m(49),s("p",[t._v("Selects data from a database with a SELECT query.")]),t._m(50),t._m(51),s("p",[t._v("If the result set is empty, an empty list is returned.")]),t._m(52),t._m(53),t._m(54),t._m(55),s("p",[t._v("Each item is created by concatenating field values (Keys/Tags + Entity Tags) separated by the specified token.")]),s("p",[t._v("If no property records are found, an empty list is returned.")]),t._m(56)])},i,!1,null,null,null);e.default=n.exports}}]);