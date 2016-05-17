# Microsoft SCOM
## Overview

[Microsoft System Center Operations Manager
(SCOM)](http://www.microsoft.com/en-us/server-cloud/products/system-center-2012-r2/ "Microsoft SCOM")
is a cross-platform data center management system for operating systems
and hypervisors. It works with Microsoft Windows Server and Unix-based
hosts.

Using ATSD you can retrieve metrics and properties from VMware.

## Requirements

- Microsoft System Center Operations Manager `2005+`

## Installation steps

### Import Oracle EM JDBC job

* Open **Jobs:Import** and upload [collector-jobs-scom-jobs.xml](collector-jobs-scom-jobs.xml) file

### Configure Oracle EM Database Connection

* Open **Data Sources:Databases** page, select `scom` database.
* Provide connection parameters to the target Microsoft SCOM database as displayed below:

![](images/scom-datasource.png)

* Execute the following test query to check the connection:

```SQL
SELECT 1
```

* Query result must be is `Query OK`.


### Verify Job Configuration

* Open Oracle EM JDBC job
* Set Data Source to `scom`.

![](images/scom-job.png)

* Choose one of target ATSD instances if your Collector instance is connected to multiple ATSD servers.
* Save the Job
* Open each configuration, click on `Test` button and review output. See [Data Queries](#data-queries) below.

![](images/test_result.png)

### Schedule the Job

* Open `JDBC Job` page and click `Run` button for the Oracle EM JDBC job.
* Make sure that the job status is `COMPLETED` and `Items Read` and `Sent commands` are greater than 0.

![](images/test_run.png)

* If there are no errors, set job status to Enabled and save the job

### Verify Metrics in ATSD

* Login into ATSD
* Click on Metrics tab and filter metrics by name 'vmware.*'

![](images/atsd_metrics.png)

## Viewing Data in ATSD

### Metrics

* List of collected [VMware metrics](metric-list.md)

### Properties
* List of collected [VMware properties](properties-list.md)

### Entity Groups

- VMware VMs
- VMware Hosts
- VMware Clusters

### Portals

* [VMware Cluster Portal](http://axibase.com/chartlab/36ae5c9e/3/)

![](images/vmware_cluster_portal.png)

* [VMware Host Portal](http://axibase.com/chartlab/36ae5c9e)

![](images/vmware_host_portal.png)

* [VMware Host VMs](http://axibase.com/chartlab/36ae5c9e/2/)

![](images/vmware_hostvm_breakdown_portal.png)

* [ VMware VM Portal](http://axibase.com/chartlab/36ae5c9e/4/)

![](images/vmware_vm_portal.png)

## Data Queries
[Data queries](data-queries.md) that collect most popular metrics and properties.