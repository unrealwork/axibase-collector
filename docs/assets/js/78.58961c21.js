(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{272:function(a,t,_){"use strict";_.r(t);var s=_(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"file-job-example-uk-airport-statistics"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#file-job-example-uk-airport-statistics","aria-hidden":"true"}},[a._v("#")]),a._v(" FILE Job Example: UK Airport Statistics")]),_("h2",{attrs:{id:"overview"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[a._v("#")]),a._v(" Overview")]),_("p",[a._v("Download airport traffic, passenger, and cargo statistics from the UK's "),_("a",{attrs:{href:"http://www.caa.co.uk/Data-and-analysis/UK-aviation-market/Airports/Datasets/UK-Airport-data/Airport-data-2016-03/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Civil Aviation Authority")]),a._v(".")]),_("p",[a._v("The data is available to be downloaded starting with January 2015 onwards.")]),_("p",[a._v("The Path field contains both "),_("code",[a._v("${DATE_ITEM()}")]),a._v(" and "),_("code",[a._v("${ITEM}")]),a._v(" placeholders so that different reports for multiple reporting periods can be queried with one configuration.")]),_("p",[a._v("The "),_("code",[a._v("${ITEM}")]),a._v(" placeholder returns files which are included in the Path and is also used in the metric prefix, so that metrics contained in one file are grouped together with a metric naming convention.")]),_("p",[_("code",[a._v("${DATE_ITEM()}")]),a._v(" function returns an array of dates, for example from 2015_01 until 2016_03. The last date in the list is determined dynamically based on current time.")]),_("h2",{attrs:{id:"item-list-contents"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#item-list-contents","aria-hidden":"true"}},[a._v("#")]),a._v(" Item List Contents")]),_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("Table_01_Size_of_UK_Airports.csv\nTable_02_2_Summary_of_Activity_at_UK_Airports.csv\nTable_03_Aircraft_Movements.csv\nTable_04_Transport_Movements_by_Type.csv\nTable_05_Air_Transport_Movements.csv\nTable_06_Air_Transport_Movements_vs_Prev_Year.csv\nTable_07_Airport_Landings_Diverted.csv\nTable_08_Air_Pax_by_Type_and_Nat_of_Op.csv\nTable_09_Terminal_and_Transit_Pax.csv\nTable_10_1_EU_and_Other_Intl_Terminal_Pax_Traffic.csv\nTable_10_2_Domestic_Terminal_Pax_Traffic.csv\nTable_11_International_Air_Pax_Traffic_to_from_UK_by_Country.csv\nTable_12_1_Intl_Air_Pax_Traffic_Route_Analysis.csv\nTable_12_3_Domestic_Air_Pax_Route_Analysis_by_Each_Reporting_Airport.csv\nTable_13_Freight_by_type_and_Nat_of_Op.csv\nTable_14_Intl_and_Domestic_Freight.csv\nTable_15_Freight_by_Aircraft_Configuration.csv\nTable_16_Mail_by_Type_and_Nat_of_Op.csv\nTable_17_Intl_and_Domestic_Mail.csv\nTable_18_Mail_by_Aircraft_Configuration.csv\nTable_19_Pax_and_Air_Transport_Movements_Split_by_Fixed_and_Rotary_Wing_Aircraft.csv\n")])]),_("p",[a._v("The following files have a different format and are excluded from the configuration:")]),_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("Table_02_1_Main_Outputs_of_UK_Airports.csv\nTable_06_Air_Transport_Movements_vs_Prev_Year.csv\nTable_07_Airport_Landings_Diverted.csv\nTable_11_International_Air_Pax_Traffic_to_from_UK_by_Country.csv\n")])]),_("h2",{attrs:{id:"file"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#file","aria-hidden":"true"}},[a._v("#")]),a._v(" File")]),_("h3",{attrs:{id:"uri"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uri","aria-hidden":"true"}},[a._v("#")]),a._v(" URI")]),_("p",[a._v("Template:")]),_("pre",{pre:!0,attrs:{class:"language-elm"}},[_("code",[_("span",{attrs:{class:"token hvariable"}},[a._v("http")]),_("span",{attrs:{class:"token operator"}},[a._v("://")]),_("span",{attrs:{class:"token hvariable"}},[a._v("www")]),_("span",{attrs:{class:"token punctuation"}},[a._v(".")]),_("span",{attrs:{class:"token hvariable"}},[a._v("caa")]),_("span",{attrs:{class:"token punctuation"}},[a._v(".")]),_("span",{attrs:{class:"token hvariable"}},[a._v("co")]),_("span",{attrs:{class:"token punctuation"}},[a._v(".")]),_("span",{attrs:{class:"token hvariable"}},[a._v("uk")]),_("span",{attrs:{class:"token operator"}},[a._v("/")]),_("span",{attrs:{class:"token hvariable"}},[a._v("uploadedFiles")]),_("span",{attrs:{class:"token operator"}},[a._v("/")]),_("span",{attrs:{class:"token constant"}},[a._v("CAA")]),_("span",{attrs:{class:"token operator"}},[a._v("/")]),_("span",{attrs:{class:"token constant"}},[a._v("Content")]),_("span",{attrs:{class:"token operator"}},[a._v("/")]),_("span",{attrs:{class:"token constant"}},[a._v("Standard_Content")]),_("span",{attrs:{class:"token operator"}},[a._v("/")]),_("span",{attrs:{class:"token constant"}},[a._v("Data_and_analysis")]),_("span",{attrs:{class:"token operator"}},[a._v("/")]),_("span",{attrs:{class:"token constant"}},[a._v("Datasets")]),_("span",{attrs:{class:"token operator"}},[a._v("/")]),_("span",{attrs:{class:"token constant"}},[a._v("Airport_stats")]),_("span",{attrs:{class:"token operator"}},[a._v("/")]),_("span",{attrs:{class:"token constant"}},[a._v("Airport_data_")]),_("span",{attrs:{class:"token operator"}},[a._v("$")]),_("span",{attrs:{class:"token punctuation"}},[a._v("{")]),_("span",{attrs:{class:"token constant"}},[a._v("DATE_ITEM")]),_("span",{attrs:{class:"token punctuation"}},[a._v("(")]),_("span",{attrs:{class:"token string"}},[a._v('"2015-01-01T00:00:00Z"')]),_("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),_("span",{attrs:{class:"token string"}},[a._v('"current_month - 3 * month"')]),_("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),_("span",{attrs:{class:"token number"}},[a._v("1")]),_("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),_("span",{attrs:{class:"token string"}},[a._v('"MONTH"')]),_("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),_("span",{attrs:{class:"token string"}},[a._v('"yyyy_MM"')]),_("span",{attrs:{class:"token punctuation"}},[a._v(")")]),_("span",{attrs:{class:"token punctuation"}},[a._v("}")]),_("span",{attrs:{class:"token operator"}},[a._v("/$")]),_("span",{attrs:{class:"token punctuation"}},[a._v("{")]),_("span",{attrs:{class:"token constant"}},[a._v("ITEM")]),_("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("`\n")])]),_("h3",{attrs:{id:"links-for-2016-01"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#links-for-2016-01","aria-hidden":"true"}},[a._v("#")]),a._v(" Links for 2016_01")]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_01_Size_of_UK_Airports.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_02_1_Main_Outputs_of_UK_Airports.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_02_2_Summary_of_Activity_at_UK_Airports.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_03_Aircraft_Movements.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_04_Transport_Movements_by_Type.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_05_Air_Transport_Movements.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_06_Air_Transport_Movements_vs_Prev_Year.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_07_Airport_Landings_Diverted.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_08_Air_Pax_by_Type_and_Nat_of_Op.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_09_Terminal_and_Transit_Pax.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_10_1_EU_and_Other_Intl_Terminal_Pax_Traffic.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_11_International_Air_Pax_Traffic_to_from_UK_by_Country.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_12_1_Intl_Air_Pax_Traffic_Route_Analysis.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_12_2_Domestic_Air_Pax_Traffic_Route_Analysis.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_12_3_Domestic_Air_Pax_Route_Analysis_by_Each_Reporting_Airport.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_13_Freight_by_type_and_Nat_of_Op.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_14_Intl_and_Domestic_Freight.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_15_Freight_by_Aircraft_Configuration.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_16_Mail_by_Type_and_Nat_of_Op.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_17_Intl_and_Domestic_Mail.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_18_Mail_by_Aircraft_Configuration.csv")])]),_("p",[_("code",[a._v("http://www.caa.co.uk/uploadedFiles/CAA/Content/Standard_Content/Data_and_analysis/Datasets/Airport_stats/Airport_data_2016_03/Table_19_Pax_and_Air_Transport_Movements_Split_by_Fixed_and_Rotary_Wing_Aircraft.csv")])]),_("h3",{attrs:{id:"local-copy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#local-copy","aria-hidden":"true"}},[a._v("#")]),a._v(" Local Copy")]),_("ul",[_("li",[_("a",{attrs:{href:"Table_01_Size_of_UK_Airports.csv"}},[a._v("Table_01_Size_of_UK_Airports.csv")])]),_("li",[_("a",{attrs:{href:"Table_02_1_Main_Outputs_of_UK_Airports.csv"}},[a._v("Table_02_1_Main_Outputs_of_UK_Airports.csv")])]),_("li",[_("a",{attrs:{href:"Table_02_2_Summary_of_Activity_at_UK_Airports.csv"}},[a._v("Table_02_2_Summary_of_Activity_at_UK_Airports.csv")])]),_("li",[_("a",{attrs:{href:"Table_03_Aircraft_Movements.csv"}},[a._v("Table_03_Aircraft_Movements.csv")])]),_("li",[_("a",{attrs:{href:"Table_04_Transport_Movements_by_Type.csv"}},[a._v("Table_04_Transport_Movements_by_Type.csv")])]),_("li",[_("a",{attrs:{href:"Table_05_Air_Transport_Movements.csv"}},[a._v("Table_05_Air_Transport_Movements.csv")])]),_("li",[_("a",{attrs:{href:"Table_06_Air_Transport_Movements_vs_Prev_Year.csv"}},[a._v("Table_06_Air_Transport_Movements_vs_Prev_Year.csv")])]),_("li",[_("a",{attrs:{href:"Table_07_Airport_Landings_Diverted.csv"}},[a._v("Table_07_Airport_Landings_Diverted.csv")])]),_("li",[_("a",{attrs:{href:"Table_08_Air_Pax_by_Type_and_Nat_of_Op.csv"}},[a._v("Table_08_Air_Pax_by_Type_and_Nat_of_Op.csv")])]),_("li",[_("a",{attrs:{href:"Table_09_Terminal_and_Transit_Pax.csv"}},[a._v("Table_09_Terminal_and_Transit_Pax.csv")])]),_("li",[_("a",{attrs:{href:"Table_10_1_EU_and_Other_Intl_Terminal_Pax_Traffic.csv"}},[a._v("Table_10_1_EU_and_Other_Intl_Terminal_Pax_Traffic.csv")])]),_("li",[_("a",{attrs:{href:"Table_10_2_Domestic_Terminal_Pax_Traffic.csv"}},[a._v("Table_10_2_Domestic_Terminal_Pax_Traffic.csv")])]),_("li",[_("a",{attrs:{href:"Table_11_International_Air_Pax_Traffic_to_from_UK_by_Country.csv"}},[a._v("Table_11_International_Air_Pax_Traffic_to_from_UK_by_Country.csv")])]),_("li",[_("a",{attrs:{href:"Table_12_1_Intl_Air_Pax_Traffic_Route_Analysis.csv"}},[a._v("Table_12_1_Intl_Air_Pax_Traffic_Route_Analysis.csv")])]),_("li",[_("a",{attrs:{href:"Table_12_3_Domestic_Air_Pax_Route_Analysis_by_Each_Reporting_Airport.csv"}},[a._v("Table_12_3_Domestic_Air_Pax_Route_Analysis_by_Each_Reporting_Airport.csv")])]),_("li",[_("a",{attrs:{href:"Table_13_Freight_by_type_and_Nat_of_Op.csv"}},[a._v("Table_13_Freight_by_type_and_Nat_of_Op.csv")])]),_("li",[_("a",{attrs:{href:"Table_14_Intl_and_Domestic_Freight.csv"}},[a._v("Table_14_Intl_and_Domestic_Freight.csv")])]),_("li",[_("a",{attrs:{href:"Table_15_Freight_by_Aircraft_Configuration.csv"}},[a._v("Table_15_Freight_by_Aircraft_Configuration.csv")])]),_("li",[_("a",{attrs:{href:"Table_16_Mail_by_Type_and_Nat_of_Op.csv"}},[a._v("Table_16_Mail_by_Type_and_Nat_of_Op.csv")])]),_("li",[_("a",{attrs:{href:"Table_17_Intl_and_Domestic_Mail.csv"}},[a._v("Table_17_Intl_and_Domestic_Mail.csv")])]),_("li",[_("a",{attrs:{href:"Table_18_Mail_by_Aircraft_Configuration.csv"}},[a._v("Table_18_Mail_by_Aircraft_Configuration.csv")])]),_("li",[_("a",{attrs:{href:"Table_19_Pax_and_Air_Transport_Movements_Split_by_Fixed_and_Rotary_Wing_Aircraft.csv"}},[a._v("Table_19_Pax_and_Air_Transport_Movements_Split_by_Fixed_and_Rotary_Wing_Aircraft.csv")])])]),_("h3",{attrs:{id:"content-table-01-size-of-uk-airports-csv"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#content-table-01-size-of-uk-airports-csv","aria-hidden":"true"}},[a._v("#")]),a._v(" Content: Table_01_Size_of_UK_Airports.csv")]),_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("rundate,reporting_period,airport_name,this_year_pax,this_year_total_pax_UK_airports,last_year_pax,last_year_total_pax_UK_airports\n05-May-2016 09:23,201603,HEATHROW, 75382273 , 255339341 , 73693612 , 241853321\n05-May-2016 09:23,201603,GATWICK, 40790754 , 255339341 , 38633115 , 241853321\n05-May-2016 09:23,201603,MANCHESTER, 23513057 , 255339341 , 22300925 , 241853321\n05-May-2016 09:23,201603,STANSTED, 23137198 , 255339341 , 20900098 , 241853321\n")])]),_("h2",{attrs:{id:"configuration"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[a._v("#")]),a._v(" Configuration")]),_("ul",[_("li",[_("a",{attrs:{href:"uk-caa-job.xml"}},[a._v("FILE job configuration")]),a._v(". Import xml into Collector.")]),_("li",[_("a",{attrs:{href:"uk-caa-parser.xml"}},[a._v("CSV Parser")]),a._v(". Import xml into ATSD.")])]),_("h2",{attrs:{id:"screenshot"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#screenshot","aria-hidden":"true"}},[a._v("#")]),a._v(" Screenshot")]),_("p",[_("img",{attrs:{src:"uk-caa-config.png",alt:"Job Screenshot"}})])])}],!1,null,null,null);t.default=r.exports}}]);