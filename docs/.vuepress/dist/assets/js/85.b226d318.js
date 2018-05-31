(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{217:function(e,a,t){e.exports=t.p+"assets/img/energinet-ftp-config.f695aeec.png"},280:function(e,a,t){"use strict";t.r(a);var r=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"file-job-example-energinet-market-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-job-example-energinet-market-data","aria-hidden":"true"}},[e._v("#")]),e._v(" FILE Job Example: Energinet Market Data")]),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),r("p",[e._v("Download 5-minute metering data (new files only) from the energinet.dk FTP server and upload it into ATSD.")]),r("p",[r("code",[e._v("http://www.energinet.dk/EN/El/Engrosmarked/Udtraek-af-markedsdata/Sider/Femminutters-maalinger.aspx")])]),r("h2",{attrs:{id:"file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file","aria-hidden":"true"}},[e._v("#")]),e._v(" File")]),r("h3",{attrs:{id:"uri"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uri","aria-hidden":"true"}},[e._v("#")]),e._v(" URI")]),r("p",[e._v("Template: "),r("code",[e._v('ftp000148:my-pwd@10.102.0.51:21/onlinedata/${TIME("now", "yyyyMMdd")}_onlinedata.txt')])]),r("p",[e._v("Example: "),r("code",[e._v("ftp000148:my-pwd@10.102.0.51:21/onlinedata/20160609_onlinedata.txt")])]),r("h3",{attrs:{id:"local-copy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#local-copy","aria-hidden":"true"}},[e._v("#")]),e._v(" Local Copy")]),r("p",[r("a",{attrs:{href:"20160609_onlinedata.txt"}},[e._v("20160609_onlinedata.txt")])]),r("h3",{attrs:{id:"first-lines"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#first-lines","aria-hidden":"true"}},[e._v("#")]),e._v(" First Lines")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" 1 Centrale kraftværker DK1\n 2 Centrale kraftværker DK2\n 3 Decentrale kraftværker DK1\n 4 Decentrale kraftværker DK2\n 5 Vindmøller  DK1\n 6 Vindmøller  DK2\n 7 Udveksling Jylland-Norge\n 8 Udveksling Jylland-Sverige\n 9 Udveksling Jylland-Tyskland\n10 Udveksling Sjælland-Sverige\n11 Udveksling Sjælland-Tyskland\n12 Udveksling Bornholm-Sverige\n13 Udveksling Fyn-Sjaelland\n14 Temperatur i Malling\n15 Vindhastighed i Malling\n16 CO2 udledning\n17 Havmøller  DK\n18 Landmøller  DK\n19 Solceller DK1\n20 Solceller DK2\n\nDato og tid      ;      1 ;      2 ;      3 ;      4 ;      5 ;      6 ;      7 ;      8 ;      9 ;     10 ;     11 ;     12 ;     13 ;     14 ;     15 ;     16 ;     17 ;     18 ;     19 ;     20 ;\n2016-06-09 00:00 ;    508 ;     16 ;    120 ;    100 ;    405 ;    106 ;   1411 ;   -261 ;    251 ;   -101 ;    441 ;      8 ;   -566 ;     11 ;      4 ;    241 ;    313 ;    198 ;      0 ;      0 ;\n2016-06-09 00:05 ;    472 ;     16 ;    121 ;     99 ;    389 ;    105 ;   1417 ;   -102 ;     68 ;    -34 ;    381 ;      9 ;   -558 ;     11 ;      5 ;    211 ;    301 ;    194 ;      0 ;      0 ;\n2016-06-09 00:10 ;    428 ;     17 ;    120 ;     99 ;    378 ;    115 ;   1405 ;    -86 ;    101 ;    -29 ;    378 ;      6 ;   -550 ;     11 ;      4 ;    206 ;    300 ;    193 ;      0 ;      0 ;\n2016-06-09 00:15 ;    405 ;     16 ;    121 ;    100 ;    361 ;    114 ;   1392 ;    -43 ;     88 ;    -11 ;    378 ;      8 ;   -542 ;     11 ;      3 ;    201 ;    288 ;    187 ;      0 ;      0 ;\n")])]),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),r("ul",[r("li",[r("a",{attrs:{href:"energinet-ftp-job.xml"}},[e._v("FILE job configuration")]),e._v(". Import xml into Collector.")]),r("li",[r("a",{attrs:{href:"energinet-ftp-parser.xml"}},[e._v("CSV Parser")]),e._v(". Import xml into ATSD.")])]),r("h2",{attrs:{id:"screenshot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#screenshot","aria-hidden":"true"}},[e._v("#")]),e._v(" Screenshot")]),r("p",[r("img",{attrs:{src:t(217),alt:"Job Screenshot"}})])])}],n=t(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);a.default=i.exports}}]);