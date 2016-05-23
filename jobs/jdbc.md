# JDBC Job

## Overview

JDBC (Java Database Connectivity Technology) is an API for Java which provides methods for querying and updating a database. 

Axibase Collector can be configured to query a remote database to either obtain current statistics for the purpose of accumulating their history in Axibase Time Series Database or to offload incremental statistics into ATSD for long-term retention and analytics.

## Supported Databases

* ORACLE
* Microsoft SQL Server
* IBM DB2
* MYSQL
* POSTGRESQL
* SYBASE
* Apache DERBY
* SAP HANA
* CUSTOM

## Examples

* [Oracle EM](examples/oracle-enterprise-manager)
* [Microsoft SCOM](examples/scom)
* [SolarWinds](examples/solarwinds)
* [VMware](examples/vmware)

## Job Settings

Apart from [common](https://github.com/axibase/axibase-collector-docs/blob/master/job-generic.md), JDBC job has an additional field. <br>
**Data Source** list allows you to select a database that will be queried. The list contains all databases connected as data sources. 

![JDBC job settings](examples/oracle-enterprise-manager/images/oracle_job_ds.png)

#### Job Configuration

To add a new query, on the JDBC Job page click Create Query. <br>
Use the table below to fill in the fields and configure the query.

| FIELD              | DESCRIPTION  |
| :----------------- |:-------------| 
| Query           | Query field must contain the entity name, time and a collection of metric columns. |
| Default Entity  | Assign a default entity to the collected metrics. |
| Entity Column   | Assign a column that contains the entity names. | 
| Replacement Table |Select a [replacement table](../collections.md#replacement-tables) to convert entities. |
| Tag Columns     | Columns that contain tags or meta data defining the series. |
| Default Tags    | Assign predefined tags to all series. |
| Put Type        | Type of data. Possible values: SERIES, PROPERTY, BOTH. |
| Default Metric  | Assign a default metric to the collected series. All series will be stored in ATSD with this metric. |
| Metric Columns  | Column containing metric values. |
| Ignored Metric Columns | Metric columns that you want to skip. |
| Metric Name Column | Column containing metric (series) names. |
| Metric Value Column | Column containing metric (series) values. It is possible to collect multiple value columns for the same metric, as is common in aggregation queries. For example: cnt, avg, max, min, sum. <br> Example query: <br> SELECT st.SAMPLE_TIME, e.ENTITY_NAME, sd.NAME AS METRIC, <br> COUNT(hs.STAT_VAL) AS "cnt", <br> AVG(hs.STAT_VAL) AS "avg", <br> SUM(hs.STAT_VAL) AS "sum", <br> MAX(hs.STAT_VAL) AS "max", <br> MIN(hs.STAT_VAL) AS "min" <br> FROM VPX_HIST_STAT1 ...|
| Metric Prefix | Metric prefix can be assigned to easily sort and differentiate metrics in ATSD. |
| Ignore Number Parse Errors | Ignore cells that fail to parse from string into number without raising error. Default: false.  |
| Time Column | Column containing the time stamp. |
| Time Type | Time-stamp type. <br> Possible values: TIMESTAMP, TIVOLI, TEXT, UNIX |
| Time Format | Format of the timestamp | 
| Time Round | Time will be rounded before storing the series in ATSD. <br> Possible values: MILLISECOND, SECONDS, MINUTE, HOUR, DAY |
| Time Zone | Time zone in which the data was originally collected and stored. |
| Check Last Time | Ignore metrics that have time set to less than the previous entry. |
| Query With Time | When executing the job, the server will be set the maximum time of the previous data. |
| Max Rows | Maximum number of rows that will be collected with each batch, -1 is unlimited. |
| Query Timeout Seconds| Amount of seconds after which the query will be interrupted, -1 is unlimited. |

### Configuration Example
The image below shows an example JDBC query configuration. 

![JDBC Query](https://axibase.com/wp-content/uploads/2014/06/jdbc_job.png)




