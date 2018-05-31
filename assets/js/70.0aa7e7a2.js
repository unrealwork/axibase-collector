(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{195:function(t,s,a){t.exports=a.p+"assets/img/bls-config.2c4bbae1.png"},301:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"json-job-example-bls"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json-job-example-bls","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON Job Example: BLS")]),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),n("p",[t._v("Download statistics from the "),n("a",{attrs:{href:"http://www.bls.gov",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bureau of Labor Statistics service")]),t._v(".")]),n("h2",{attrs:{id:"file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#file","aria-hidden":"true"}},[t._v("#")]),t._v(" File")]),n("h3",{attrs:{id:"uri"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uri","aria-hidden":"true"}},[t._v("#")]),t._v(" URI")]),n("p",[t._v("Example: "),n("code",[t._v("http://api.bls.gov/publicAPI/v2/timeseries/data/")])]),n("p",[t._v("POST request headers:")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Content-Type:application/json\n")])]),n("p",[t._v("POST request payload:")]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v('"seriesid"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"CUSR0000SA0"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h3",{attrs:{id:"local-copy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#local-copy","aria-hidden":"true"}},[t._v("#")]),t._v(" Local Copy")]),n("p",[n("a",{attrs:{href:"bls.json"}},[t._v("bls.json")])]),n("h3",{attrs:{id:"json-path"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json-path","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON Path")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("$"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Results"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("series"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("\n")])]),n("h3",{attrs:{id:"matched-objects"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#matched-objects","aria-hidden":"true"}},[t._v("#")]),t._v(" Matched Objects")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("$"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'Results'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'series'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'data'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'Results'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'series'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'data'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n$"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'Results'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'series'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'data'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("N")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"footnotes"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"period"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"M09"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"periodName"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"September"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"value"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"241.002"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"year"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"2016"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"footnotes"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token property"}},[t._v('"code"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"R"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token property"}},[t._v('"text"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Revised"')]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"period"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"M08"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"periodName"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"August"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"value"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"240.301"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"year"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"2016"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"footnotes"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token property"}},[t._v('"code"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"R"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token property"}},[t._v('"text"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Revised"')]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"period"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"M07"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"periodName"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"July"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"value"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"239.810"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"year"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"2016"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),n("h2",{attrs:{id:"commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[t._v("#")]),t._v(" Commands")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("series e:bls d:2016-09-01T00:00:00.000Z m:CUSR0000SA0=241.002\nseries e:bls d:2016-08-01T00:00:00.000Z m:CUSR0000SA0=240.301\nseries e:bls d:2016-07-01T00:00:00.000Z m:CUSR0000SA0=239.81\n")])]),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),n("ul",[n("li",[n("a",{attrs:{href:"bls-job.xml"}},[t._v("JSON job configuration")]),t._v(". Import xml into Collector.")])]),n("h2",{attrs:{id:"screenshot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#screenshot","aria-hidden":"true"}},[t._v("#")]),t._v(" Screenshot")]),n("p",[n("img",{attrs:{src:a(195),alt:"Job Screenshot"}})])])}],r=a(0),e=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=e.exports}}]);