# Tomcat Servlet Container

## Overview

This document describes how to collect JMX metrics introduced in [Tomcat (Servlet Container)](http://tomcat.apache.org/) 6+ based applications for long-term retention and monitoring in Axibase Time Series Database.

## Requirements

Tomcat containers `6+`

## Installation steps

### Enable JMX in Tomcat based application

Configure your Tomcat based application for jmx connection. Configuration procedure is described [here](../../jmx.md).

### Import Tomcat job into Axibase Collector

 * Open **Jobs:Import** and upload job file depending on the version of your servlet container engine
    * [Catalina](configs/tomcat_catalina_job.xmls)
    * [Standalone]()

### Configure Tomcat JMX Connection

* Open **Jobs:JMX** page, select `jmx-tomcat` job.
* For each JMX Configuration:
    * provide connection parameters to the target Tomcat as displayed below:
    ![](images/tomcat_jmx_configuration.png)
    * Click `Test` button and make sure that the result similar to the screenshot
    ![](images/tomcat_test_jmx_configuration.png)

### Schedule the Job

* Open `JMX Job` page and click `Run` button for the Tomcat JMX job.
* Make sure that the job status is `COMPLETED` and `Items Read` and `Sent commands` are greater than 0.

![](images/test_run.png)

* If there are no errors, set job status to Enabled and save the job.

### Verify Metrics in ATSD

* Login into ATSD.
* Click on Metrics tab and filter metrics by name `jmx.tomcat*`.

![](images/tomcat_metrics.png)

## Viewing Data in ATSD

### Metrics

* List of collected [Tomcat metrics](metric-list.md)

### Properties

* List of collected [Tomcat properties](properties-list.md)


### Entity group

* Open **Admin:Entity Groups**, click `Import` button and upload  [tomcat_entity_group.xml](configs/tomcat_entity_group.xml)
* Select imported `apache-tomcat` group
* Verify that the group contains your Tomcat hosts


### Entity Views

* Open **Configuration:Entity Views**, click `Import` button and upload  [tomcat_entity_view.xml](configs/tomcat_entity_view.xml)
* Select imported `Apache Tomcat Containers` view
* Select Entity Group that you created earlier.
* Click on `View` button and browse information about your entities
![](images/tomcat_entity_view.png)


### Portal

* Open **Configuration: Portals** click `Import` button and upload [tomcat_portal.xml](configs/tomcat_portal.xml).
* Click Assign link and associate the portal with the entity group you created earlier
* Open Entity tabs, find java application by name, and click on its portal icon

![](images/tomcat_portal_icon.png)

**Tomcat Portal**
![](images/tomcat_portal.png)