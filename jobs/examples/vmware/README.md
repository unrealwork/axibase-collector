# VMware

## Overview

[VMware vCenter](https://www.vmware.com/products/vcenter-server) provides a centralized platform for managing VMware vSphere environments.

VMware vCenter collects and stores statistics from ESX servers in an Microsoft SQL Server database (`VIM_VCDB`) which Axibase Collector queries every 20 minutes to offload incremental statistics from `VPX_HIST_STAT1` table into Axibase Time Series Database for long-term retention and operations analytics.

## Requirements

- VMware vCenter `5.x+`

## Installation steps

### Import VMware JDBC job

* Open **Jobs:Import** and upload [collector-jobs-vmware-jobs.xml](collector-jobs-vmware-jobs.xml) file

### Configure VMware Database Connection

* Open **Data Sources:Databases** page, select `sql-vmware` database.
* Provide connection parameters to the target `VIM_VCDB` database as displayed below:

![](images/vmware-datasource.png)

* Execute the following test query to check the connection:

```SQL
SELECT 1
```


### Verify Job Configuration

* Open VMware job
* Set Data Source to sql-vmware.

![](images/vmware-job.png)

* Choose a target ATSD server if your Collector instance is connected to multiple ATSD servers.
* Save the Job
* Open each configuration, click on `Test` button and review output. See [Data Queries](#data-queries) below.

![](images/test_result.png)

### Schedule the Job

* Open `JDBC Job` page and click `Run` button for the VMware job.
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

- `solarwinds-base`
- `solarwind-vmware-vm`
- `solarwind-vmware-host`
- `solarwind-vmware-cluster`

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





