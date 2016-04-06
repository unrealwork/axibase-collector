# JDBC

JDBC (Java Database Connectivity Technology) is an API for java programming language which provides methods for querying and updating a primarily relational database. JDBC protocol is supported by the Axibase Collector. <br> [Read our detailed example of JDBC Jobs for SolarWinds.](https://axibase.com/products/axibase-time-series-database/writing-data/collector/solarwinds/ "SolarWinds").<br> From this article, you can learn  how to create a JDBC job and configure its query settings.
<h4>Job Configuration</h4>

On the JDBC Job page click on “Create Query” to add a query.

| FIELD              | DESCRIPTION  |
| :----------------- |:-------------| 
| Query           | Query field must contain the entity name, time and a collection of metric columns. |
| Default Entity  | Assign a default entity to the collected metrics. |
| Entity Column   | Assign a column that contains the entity names. | 
| Use Entity Lookup |Collector will serch Entity Lookup mappings for stored entities. For example if Entity Lookup mappings contain entity001=sensor001 and the stored entity is entity001 then it will be saved in ATSD as sensor001. More details can be found on the [Entity Lookup page](https://axibase.com/products/axibase-time-series-database/download-atsd/administration/entity-lookup/). |
| Tag Columns     | Columns that contain tags or meta data defining the series. |
| Default Tags    | Assign predefined tags to all series. |
| Put Type        | Type of data. Possible values: SERIES, PROPERTY, BOTH. |
| Default Metric  | Assign a default metric to the collected series. All series will be stored in ATSD with this metric. |
| Metric Columns  | Column containing metric values. |
| Ignored Metric Columns | Metric columns that you want to skip. |
| Metric Name Column | Column containing metric (series) names. |
| Metric Value Column | Column containing metric (series) values. It is possible to collect multiple value columns for the same metric, as is common in aggregation queries. For example: cnt, avg, max, min, sum. <br> Example query: <br> SELECT st.SAMPLE_TIME, e.ENTITY_NAME, sd.NAME AS METRIC, <br> COUNT(hs.STAT_VAL) AS "cnt", <br> AVG(hs.STAT_VAL) AS "avg", <br> SUM(hs.STAT_VAL) AS "sum", <br> MAX(hs.STAT_VAL) AS "max", <br> MIN(hs.STAT_VAL) AS "min" <br> FROM VPX_HIST_STAT1 ...|
| Metric Prefix | Metric prefix can be assigned to easily sort and differentiate metrics in ATSD. |
| Time Column | Column containing the time stamp. |
| Time Type | Time-stamp type <br> Possible values: TIMESTAMP, TIVOLI, TEXT, UNIX |
| Time Format | Format of the timestamp | 
| Time Round | Time will be rounded before storing the series in ATSD. <br> Possible values: MILLISECOND, SECONDS, MINUTE, HOUR, DAY |
| Time Zone | Time zone in which the data was originally collected and stored. |
| Check Last Time | Ignore metrics that have time set to less than the previous entry. |
| Query With Time | When executing the job, the server will be set the maximum time of the previous data. |
| Max Rows | Maximum number of rows that will be collected with each batch, -1 is unlimited |
| Query Timeout Seconds| Amount of seconds after which the query will be interrupted, -1 is unlimited |

![JDBC Query](http://axibase.com/wp-content/uploads/2015/01/JDBC_query.png)




