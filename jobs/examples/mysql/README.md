# MySQL Server

## Overview

[MySQL](http://www.mysql.com/) is a free, open-source database engine available for all major platforms. (Technically, MySQL is a relational database management system (RDBMS).) MySQL represents an excellent introduction to modern database technology, as well as being a reliable mainstream database resource for high-volume applications.

## Requirements

- MySQL Server `5.7+`

## Installation steps

### Import MySQL Server job

* Open **Jobs:Import** and upload [mysql-server-jobs.xml](mysql-server-jobs.xml) file

### Configure MySQL Server Database Connection

* Open **Data Sources:Databases** page, select `10.102.0.7` database.
* Provide connection parameters to the target MySQL Server database as displayed below:

![](images/mysql-datasource.png)

* Execute the following test query to check the connection:

```SQL
SELECT 1
```
* Query result must be `Query OK`.

### Verify Job Configuration

* Open MySQL Server job
* Set Data Source to `10.102.0.7`

![](images/mysql-jdbc-job.png)

* Choose one of target ATSD instances if your Collector instance is connected to multiple ATSD servers.
* Save the Job
* Open each configuration, click on `Test` button and review output. See [Data Queries](#data-queries) below.

![](images/test_result.png)

### Schedule the Job

* Open `JDBC Job` page and click `Run` button for the MySQL Server JDBC job.
* Make sure that the job status is `COMPLETED` and `Items Read` and `Sent commands` are greater than 0.

![](images/test_run.png)

* If there are no errors, set job status to Enabled and save the job

### Verify Metrics in ATSD

* Login into ATSD
* Click on Metrics tab and filter metrics by name `mysql.*`

![](images/mysql-metrics.png)

## Viewing Data in ATSD

### Metrics

* List of collected [MySQL Server metrics](metric-list.md)

### Entity Groups

* Open **Admin: Entity Groups** page
* Create a new Entity Group, click on Expression 'Edit mode' and enter the following expression:

```
hasMetric('mysql.global_status.uptime')
```

* Save and verify that the group contains your MySQL database hosts

![](images/mysql-entity-group.png) 

### Portals

* Open **Configuration: Portals** page and import a MySQL portal from [portal-mysql.xml](portal-mysql.xml).
* Click Assign link and associate the portal with the entity group you created earlier
* Open Entity tabs, find mysql database by name, and click on its portal icon

![](images/mysql-portal-icon.png) 

[MySQL Server Perfomance Portal](http://apps.axibase.com/chartlab/9a720f9e)
![](images/mysql-portal.png)


## Data Queries

* Metrics Queries select most recent statistics 

```SQL
SELECT * FROM performance_schema.global_status
```


