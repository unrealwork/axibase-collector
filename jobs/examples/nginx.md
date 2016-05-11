# NGINX Web Server Monitoring

## Overview

This document describes how to collect basic connection and request metrics from an NGINX basis status page for long-term retention and monitoring.

Collecting [NGINX Plus](https://www.nginx.com/products/) [live activity](https://www.nginx.com/products/live-activity-monitoring/) metrics is covered in a separate guide. 

## Requirements

* [NGINX server](http://nginx.org/en/download.html) with [ngx_http_stub_status_module](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html) support.
* [Axibase Collector](http://axibase.com/products/axibase-time-series-database/writing-data/collector/axibase-collector-installation/) for scheduling querying of the NGINX statistics page.
* [Axibase Time Series Database](http://axibase.com/products/axibase-time-series-database/download-atsd/) for centralized data repository.

## Enable Status Page in NGINX

### Check that `ngx_http_stub_status_module` is present

Verify that `ngx_http_stub_status_module` is present:

```sh
nginx -V 2>&1 | grep -o with-http_stub_status_module
```

If the output contains module name, the module is installed.

If the response is empty, upgrade to a [newer version of NGINX](http://nginx.org/en/CHANGES) or recompile your NGINX server with *-with-http_stub_status_module* option.

### Configure status page

Open in nginx.conf file and review [configuration example](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html#example) provided in NGINX documentation. 

Enable the page on **/nginx_status** URL so that its accessible at *<your_server_address>/nginx_status*. 

Reload the server to apply changes:

```sh
sudo nginx -s reload
```

Verify that status page is accessible by opening *<your_server_address>/nginx_status*:

```
Active connections: 291
server accepts handled requests
 16630948 16630948 31070465
Reading: 6 Writing: 179 Waiting: 106
```

### Restrict access to the status page

Once you verify that status page is enabled, restrict access to this page only to the IP address of the server where Axibase Collector is installed. 

Add the following line at the **beginning** of contents of your *location /nginx_status* directive in nginx.conf file:

```
allow <collector_ip_address>
```

 For example, if your collector is located at *10.102.0.6* , the configuration should look as follows:
 
```
location /nginx_status {
    allow 10.102.0.6;
    deny all;
    stub_status;
}
```

Reload the server:

```sh
sudo nginx -s reload
```

Repeat the process, if you have multiple NGINX servers.

## Import NGINX CSV parser configuration into ATSD

* Login into ATSD web interface.
* Open **Configuration:Parsers CSV** page. Click Import.
* Import [CSV parser](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx_atsd_csv_parser.xml) for NGINX status page.  

## Configuring FILE job in Axibase Collector

Axibase Collector will poll the NGINX status page every 5 seconds and upload the downloaded files into Axibase Time Series Database for parsing. 

### Create Item List for NGINX servers

* Login into Axibase Collector web interface
* Open **Collections:Item Lists** page
* Add a new TEXT Item List named **nginx-servers** containing hostnames or IP addresses of the monitored NGINX servers, one server per line.
* **Save** the list. See more information about Item Lists [here](/collections.md).
 
![Server list example](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx_server-list.png)

### Import FILE job

* Open **Jobs:Import** page.
* Import a new job from [nginx_collector_job.xml](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx_collector_job.xml).
* Open the imported job. 
* Adjust the schedule if necessary. Set Status to Enabled.
* If 'Storage' drop-down is set to `None`, select the target ATSD server.
* **Save** the job.
* Open `nginx-status` configuration.
* Select **nginx-servers** in the **Items List** drop-down. <br>The job will query each server in the list at the specified URL `http://${ITEM}:80/nginx-status` where `${ITEM}` will be replaced with the current server name.
* Click Test to validate the configuration.
* **Save** the configuration.

![NGINX test](nginx-collector-test.png)

### Validate Data Availability

* Login into ATSD web interface.
* Open Metrics tab and apply `nginx*` to view a list of nginx metrics.
* Click on Series link and check that metrics are present for each server in in the **nginx-servers** list.
 
### View Portals

* Open Entities page.
* Locate an NGINX server and click on Portals icon to view the built-in NGINX portal.

### NGINX Status Page Metrics

* Active connections
* Server accepts
* Server handled
* Server requests
* Reading
* Writing
* Waiting
