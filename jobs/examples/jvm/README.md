# Java Virtual Machine

## Overview

This document describes how to collect JMX metrics introduced in [Java Virtual Machine (JVM)](http://www.mysql.com/) 7+ based applications for long-term retention and monitoring in Axibase Time Series Database.

## Requirements

Java Virtual Machine `7+`

## Installation steps

### Import JVM job into Axibase Collector

 * Open **Jobs:Import** and upload [jmx-jvm-job.xml](mysql-server-jobs.xml) file

### Configure JMV JMX Connection

* Open **Jobs:JMX** page, select `jmx-jvm` job.
* For each JMX Configuration:
    * provide connection parameters to the target JVM as displayed below:
    ![](images/jvm_jmx_configuration.png)
    * Click `Test` button and make sure that the result similar to the screenshot
    ![](images/jvm_test_jmx_configuration.png)

### Schedule the Job

* Open `JMX Job` page and click `Run` button for the JVM JMX job.
* Make sure that the job status is `COMPLETED` and `Items Read` and `Sent commands` are greater than 0.

![](images/test_run.png)

* If there are no errors, set job status to Enabled and save the job

### Verify Metrics in ATSD

* Login into ATSD
* Click on Metrics tab and filter metrics by name `jmx.jvm*`

![](images/jvm_metrics.png)

## Viewing Data in ATSD

### Entity group

* Open **Admin:Entity Groups**, click `Import` button and upload  [jvm_entity_group.xml](jvm_entity_group.xml)
* Select imported `java-virtual-machine` group
* Verify that the group contains your JVM hosts


### Entity Views

* Open **Configuration:Entity Views**, click `Import` button and upload  [jvm_entity_view.xml](jvm_entity_view.xml)
* Select imported `Java Applications` view
* Select Entity Group that you created earlier.
* Click on `View` button and browse information about your entities
![](images/jvm_entity_view.png)


### Portal
* Open **Configuration: Portals** page and import a JVM portal from [jvm_portal.xml](jvm_portal.xml).
* Click Assign link and associate the portal with the entity group you created earlier
* Open Entity tabs, find java application by name, and click on its portal icon

![](images/jvm_portal_icon.png)

**JVM Portal**
![](images/jvm_portal.png)


### Rules