# JDBC

JDBC (Java Database Connectivity Technology) is an API for java programming language which provides methods for querying and updating a primarily relational database. JDBC protocol is supported by the Axibase Collector. [Read our detailed example of JDBC Jobs for SolarWinds.](/products/axibase-time-series-database/writing-data/collector/solarwinds/ "SolarWinds") Below are instruction on how to create a JDBC job and it's query settings.
<h4>JDBC Job</h4>
| FIELD           | DESCRIPTION |
| :-------------- |:-------------| 
| Enabled         | Determines if the job is active or disabled |
| Name            | Name of the collector job |
| Cron Expression | Expression	cron expression determining how frequently the collector job run | 
| ATSD            | ATSD server that will ingest the data |
|Data Source      | remote data source from which the collector will retrieve the data |
![JDBC Job](http://axibase.com/wp-content/uploads/2015/01/new_jdbc_JOB.png)

_______________________________________________________

<h4>JDBC Query</h4>
On the JDBC Job page click on “Create Query” to add a query.

| FIELD              | DESCRIPTION  |
| :----------------- |:-------------| 
| Query           | Query field must contain the entity name, time and a collection of metric columns |
| Default Entity  | Assign a default entity to the collected metrics |
| Entity Column   | Assign a column that contains the entity names | 
| Use Entity Lookup | Entity Lookup mappings will be searched for the entities being stored. For example if Entity Lookup mappings contain entity001=sensor001 and the entity being stored is named entity001 then it will be saved in ATSD as sensor001. More details can be found on the [Entity Lookup page](/products/axibase-time-series-database/download-atsd/administration/entity-lookup/ "Entity Lookup") |
| Tag Columns     | Columns that contain tags or meta data defining the series |
| Default Tags    | Assign predefined tags to all series |
| Put Type        | Type of data. Possible values: METRIC, PROPERTY, BOTH |
| Default Metric  | Assign a default metric to the collected series, all series will be stored in ATSD with this metric |
| Metric Columns  | Column containing the metric values |
| Ignored Metric Columns | Metric columns that will be skipped |
| Metric Name Column | Column containing metric (series) names |
| Metric Value Column | column containing metric (series) values. Can collect multiple value columns for the same metric, as is common in aggregation queries. For example: cnt, avg, max, min, sum. <br> Example query: <br> SELECT st.SAMPLE_TIME, e.ENTITY_NAME, sd.NAME AS METRIC, <br> COUNT(hs.STAT_VAL) AS "cnt", <br> AVG(hs.STAT_VAL) AS "avg", <br> SUM(hs.STAT_VAL) AS "sum", <br> MAX(hs.STAT_VAL) AS "max", <br> MIN(hs.STAT_VAL) AS "min" <br> FROM VPX_HIST_STAT1 ...|
| Metric Prefix | Metric prefix can be assigned to easily sort and differentiate the metrics in ATSD |
| Time Column | Column containing the time-stamp |
| Time Type | Time-stamp type <br> Possible values: TIMESTAMP, TIVOLI, TEXT, UNIX |
| Time Format | Rormat of the timestamp | 
| Time Round | Time will be rounded before storing the series in ATSD. <br> Possible values: MILLISECOND, SECONDS, MINUTE, HOUR, DAY |
| Time Zone | Time zone in which the data was originally collected and stored |
| Check Last Time | Ignore metrics that have time set to less than the previous entry |
| Query With Time | When executing the job, the server will be set the maximum time of the previous data |
| Max Rows | Maximum amount of row that will be collected with each batch, -1 is unlimited |
| Query Timeout Seconds| Amount of seconds after which the query will be interrupted, -1 is unlimited |

![JDBC Query](http://axibase.com/wp-content/uploads/2015/01/JDBC_query.png)




