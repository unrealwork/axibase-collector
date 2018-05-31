(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{315:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"postgresql-data-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-data-queries","aria-hidden":"true"}},[e._v("#")]),e._v(" PostgreSQL Data Queries")]),a("h2",{attrs:{id:"postgresql-base-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-base-queries","aria-hidden":"true"}},[e._v("#")]),e._v(" PostgreSQL Base Queries")]),a("ul",[a("li",[e._v("Metrics Queries select the most recent statistics:")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM pg_stat_database WHERE datname NOT LIKE 'template%'\n")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT reltuples, relpages, relname FROM pg_class WHERE relkind = 'r' AND relname NOT LIKE 'pg_%' ORDER BY relpages DESC limit 10;\n")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM pg_stat_activity\n")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM pg_stat_database_conflicts WHERE datname NOT LIKE 'template%'\n")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM pg_stat_bgwriter\n")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM pg_stat_user_tables where idx_scan > 0\n")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM pg_stat_user_indexes WHERE idx_scan > 0\n")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM pg_statio_user_tables WHERE heap_blks_read > 10\n")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM pg_statio_user_indexes WHERE idx_blks_hit > 1000\n")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT reltuples, relpages, relname FROM pg_class WHERE relkind = 'r' AND relname NOT LIKE 'pg_%' ORDER BY relpages\nDESC limit 10;\n")])])])}],!1,null,null,null);t.default=r.exports}}]);