# PostgreSQL

## Overview
This document describes how to collect statistics' metrics introduced in [PostgreSQL](http://www.mysql.com/) 9.1+ for long-term retention and monitoring in Axibase Time Series Database.

The process involves enabling a JDBC job in Axibase Collector to poll statistics' tables and and uploading the counters into ATSD for processing.

## Requirements

- PostgreSQL `9.1+`

## Installation steps

## Create readonly user

* Create user
```sh
adduser readonly
```
* Login as `postgres` user
```sh
sudo su postgres
```

* Go to psql console

```
psql
```

* Run following commands **in psql console:**

```
postgres=# CREATE ROLE readonly;
postgres=# GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
postgres=# ALTER USER readonly WITH PASSWORD 'readonly';
postgres=# ALTER USER readonly VALID UNTIL 'infinity';
postgres=# ALTER ROLE readonly login;
```


* Configure file **/etc/postgresql/${POSTGRES_VERSION}/main/pg_hba.conf**
> add the following row (modify allowed ip to your network):

```
host    all             readonly        10.102.0.0/24           trust
```

* Configure **/etc/postgresql/${POSTGRES_VERSION}/main/postgresql.conf**
> edit the following row (set your external ip address):

```
listen_addresses = 'localhost,10.102.0.9'		# what IP address(es) to listen on;
```


### Import PostgreSQL job into Axibase Collector

* Open **Jobs:Import** and upload [postgres-jobs.xml](postgres-jobs.xml) file

### Configure PostgreSQL Database Connection

* Open **Data Sources:Databases** page, select `10.102.0.9` database.
* Provide connection parameters to the target PostgreSQL database as displayed below:

![](images/postgres-datasource.png)

* Execute the following test query to check the connection:

```SQL
SELECT 1
```
* Query result must be `Query OK`.

### Verify Job Configuration

* Open PostgreSQL job
* Set Data Source to `10.102.0.7`

![](images/postgres-jdbc-job.png)

* Choose one of target ATSD instances if your Collector instance is connected to multiple ATSD servers.
* Save the Job
* Open each configuration, click on `Test` button and review output. See [Data Queries](#data-queries) below.

![](images/test_result.png)

### Schedule the Job

* Open `JDBC Job` page and click `Run` button for the PostgreSQL JDBC job.
* Make sure that the job status is `COMPLETED` and `Items Read` and `Sent commands` are greater than 0.

![](images/test_run.png)

* If there are no errors, set job status to Enabled and save the job

### Verify Metrics in ATSD

* Login into ATSD
* Click on Metrics tab and filter metrics by name `postgres.*`

![](images/postgres-metrics.png)

## Viewing Data in ATSD

### Metrics

* List of collected [PostgreSQL metrics](metric-list.md)

### Properties

* List of collected [PostgreSQL properties](properties-list.md)

### Entity Groups

* Open **Admin: Entity Groups** page
* Create a new Entity Group, click on Expression 'Edit mode' and enter the following expression:

```javascript
hasMetric('postgres.global_status.uptime')
```

* Save and verify that the group contains your PostgreSQL database hosts

![](images/postgres-entity-group.png)

### Portals

* Open **Configuration: Portals** page and import a postgres portal from [portal-postgres.xml](portal-postgres.xml).
* Click Assign link and associate the portal with the entity group you created earlier
* Open Entity tabs, find postgres database by name, and click on its portal icon

![](images/postgres-portal-icon.png)

[PostgreSQL Portal](http://apps.axibase.com/chartlab/faf6be23)
![](images/postgres-portal.png)


## Data Queries

Metrics Queries select most recent statistics described in this [file](data-queries.md).


