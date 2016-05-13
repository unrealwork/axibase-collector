# HP OpenView
## Overview
[HP OpenView](https://h20392.www2.hp.com/portal/swdepot/displayProductInfo.do?productNumber=PERFMINFO "HP OpenView") software provides large-scale system and network management of an organization’s IT infrastructure.

Using ATSD you can retrieve metrics and properties from HP OpenView.

## Requirements

- HP OpenView `9.+`

## Installation steps

### Import HP OpenView JDBC job
* Open **Jobs:Import** and upload [collector-jobs-ovpm-jobs.xml](collector-jobs-ovpm-jobs.xml) file

### Configure HP Open View HTTP Pool

* Open **Data Sources:HTTP Pools** page, select `ovpm-1` database.
* Provide connection parameters to the target Oracle EM database as displayed below:

![](images/oracle_database_example.png)



## Metric list
* List of collected [HP OpenView metrics](metric-list.md)

## Entity group list

## Portal List

[OVPM Portal](http://axibase.com/chartlab/f9d176ac/2/)

![](images/ovpm_portal_linux.png "HP OpenView")
![](images/ovpm_portal_windows.png "ovpm_portal_windows")
