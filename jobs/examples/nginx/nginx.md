# NGINX Web Server Monitoring

## Overview

This document describes how to collect basic connection and request metrics from an NGINX basis status page for long-term retention and monitoring.

Collecting [NGINX Plus](https://www.nginx.com/products/) [live activity](https://www.nginx.com/products/live-activity-monitoring/) metrics is covered in a separate guide. 

## Requirements

* [NGINX server](http://nginx.org/en/download.html) with [ngx_http_stub_status_module](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html) support.
* [Axibase Collector](http://axibase.com/products/axibase-time-series-database/writing-data/collector/axibase-collector-installation/) for scheduling querying of the NGINX statistics page.
* [Axibase Time Series Database](http://axibase.com/products/axibase-time-series-database/download-atsd/) for centralized data repository.

## Server configuration

See [NGINX server configuration guide](./nginx-configure.md) to make sure your server is configured correctly.

## Import NGINX CSV parser configuration into ATSD

* Login into ATSD web interface.
* Open **Configuration:Parsers CSV** page. Click Import.
* Import [CSV parser](./configs/nginx-atsd-csv-parser.xml) for NGINX status page.  

## Configuring FILE job in Axibase Collector

Axibase Collector will poll the NGINX status page every 5 seconds and upload the downloaded file into ATSD for parsing. 

### Create Item List for NGINX servers

* Login into Axibase Collector web interface
* Open **Collections:Item Lists** page
* Add a new TEXT Item List named **nginx-servers** containing hostnames or IP addresses of the monitored NGINX servers, one server per line.
* **Save** the list. See more information about Item Lists [here](/collections.md).
 
![Server list example](./images/nginx-server-list.png)

### Import FILE job

* Import [nginx-collector-job.xml](./configs/nginx-collector-job.xml) job on **Jobs:Import** page.
* Open the nginx-statistics job. 
* If 'Storage' drop-down is set to `None`, select the target ATSD server.
* Set Status to Enabled.
* **Save** the job.

### Validate Data Availability

* Open nginx-status configuration.
* Click Test to verify processing.

![NGINX test](./images/nginx-collector-test.png)

* Login into ATSD web interface.
* Open Metrics tab and apply `nginx*` to review the list of nginx metrics received by ATSD.
* Click on Series link and check that metrics are present for each server in in the **nginx-servers** list.

![NGINX metrics](./images/nginx-metrics-list.png)

### NGINX Status Page Metrics

| Metric                  |                                      Description                                        |
|:-----------------------:|:----------------------------------------------------------------------------------------|
| Active connection       |The current number of active client connections including Waiting connections.           |
| Server accepts          |The total number of accepted client connections.                                         |
| Server handled          |The total number of handled connections.<br> Generally, the parameter value is the same as accepts unless some resource limits have been reached (for example, the worker_connections limit).                          |
| Server requests         |The total number of client requests.                                                     |
| Reading                 |The current number of connections where nginx is reading the request header.             |
| Writing                 |The current number of connections where nginx is writing the response back to the client.|
| Waiting                 |The current number of idle client connections waiting for a request.                     |
 
# Viewing Data in ATSD 
## Metrics
List of collected [NGINX server metrics](./nginx-basic-server-metrics.md)
## Portals
[Basic NGINX portal](http://apps.axibase.com/chartlab/34d82015)
![Basic NGINX portal](./images/nginx-portal-basic.png)


