# NGINX Web Server Monitoring

## Overview

This document describes how to collect basic connection and request metrics from an NGINX basis status page for long-term retention and monitoring.

Collecting [NGINX Plus](https://www.nginx.com/products/) [live activity](https://www.nginx.com/products/live-activity-monitoring/) metrics is covered in a separate guide. 

## Requirements

* [NGINX server](http://nginx.org/en/download.html) with [ngx_http_stub_status_module](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html) support.
* [Axibase Collector](http://axibase.com/products/axibase-time-series-database/writing-data/collector/axibase-collector-installation/) for scheduling querying of the NGINX statistics page.
* [Axibase Time Series Database](http://axibase.com/products/axibase-time-series-database/download-atsd/) for centralized data repository.

## Enable Status Page in NGINX

### Verify that `ngx_http_stub_status_module` is present

```sh
nginx -V 2>&1 | grep -o with-http_stub_status_module
```

If the output contains module name, the module is installed.

If the response is empty, upgrade to a [newer version of NGINX](http://nginx.org/en/CHANGES) or recompile your NGINX server with *-with-http_stub_status_module* option.

Sample `nginx -V` output:

```
$ nginx -V
nginx version: nginx/1.4.6 (Ubuntu)
built by gcc 4.8.4 (Ubuntu 4.8.4-2ubuntu1~14.04)
TLS SNI support enabled
configure arguments: --with-cc-opt='-g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -D_FORTIFY_SOURCE=2' --with-ld-opt='-Wl,-Bsymbolic-functions -Wl,-z,relro' --prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf --http-log-path=/var/log/nginx/access.log --error-log-path=/var/log/nginx/error.log --lock-path=/var/lock/nginx.lock --pid-path=/run/nginx.pid --http-client-body-temp-path=/var/lib/nginx/body --http-fastcgi-temp-path=/var/lib/nginx/fastcgi --http-proxy-temp-path=/var/lib/nginx/proxy --http-scgi-temp-path=/var/lib/nginx/scgi --http-uwsgi-temp-path=/var/lib/nginx/uwsgi --with-debug --with-pcre-jit --with-ipv6 --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-http_addition_module --with-http_dav_module --with-http_geoip_module --with-http_gzip_static_module --with-http_image_filter_module --with-http_spdy_module --with-http_sub_module --with-http_xslt_module --with-mail --with-mail_ssl_module
```



### Configure status page

Open in nginx.conf file and review [configuration example](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html#example) provided in NGINX documentation. 

```sh
sudo nano /etc/nginx/nginx.conf
```

Enable the page on **/nginx_status** URL so that its accessible at *<your_server_address>/nginx_status*. 

```
location /nginx_status {
    stub_status;
}
```

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

Add the following lines at the **beginning** of *location /nginx_status* directive:

```
   allow <collector_ip_address>;
   deny all;
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

Repeat the process for each NGINX server that you would like to monitor.

## Import NGINX CSV parser configuration into ATSD

* Login into ATSD web interface.
* Open **Configuration:Parsers CSV** page. Click Import.
* Import [CSV parser](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx-atsd-csv-parser.xml) for NGINX status page.  

## Configuring FILE job in Axibase Collector

Axibase Collector will poll the NGINX status page every 5 seconds and upload the downloaded file into ATSD for parsing. 

### Create Item List for NGINX servers

* Login into Axibase Collector web interface
* Open **Collections:Item Lists** page
* Add a new TEXT Item List named **nginx-servers** containing hostnames or IP addresses of the monitored NGINX servers, one server per line.
* **Save** the list. See more information about Item Lists [here](/collections.md).
 
![Server list example](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx-server-list.png)

### Import FILE job

* Import [nginx-collector-job.xml](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx-collector-job.xml) job on **Jobs:Import** page.
* Open the nginx-statistics job. 
* If 'Storage' drop-down is set to `None`, select the target ATSD server.
* Set Status to Enabled.
* **Save** the job.

### Validate Data Availability

* Open nginx-status configuration.
* Click Test to verify processing.

![NGINX test](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx-collector-test.png)

* Login into ATSD web interface.
* Open Metrics tab and apply `nginx*` to review the list of nginx metrics received by ATSD.
* Click on Series link and check that metrics are present for each server in in the **nginx-servers** list.

![NGINX metrics](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx-metrics-list.png)

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
 
### View Portals

* Open Entities page.
* Locate an NGINX server and click on Portals icon to view the built-in NGINX portal.

![Basic NGINX portal](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx-portal-basic.png)


