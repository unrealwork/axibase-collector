# Collecting Data from NGINX Web Server
This document describes how to organize a process of monitoring your NGINX server statistics with Axibase Collector sending data to Axibase Time Series Database.

## Requirements
* [NGINX version 0.1.18 or higher](http://nginx.org/en/download.html) compiled with [ngx_http_stub_status_module](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html) support.
* Axibase Time Series Database. For installation instructions, see [Axibase Time Series Database Download Options](http://axibase.com/products/axibase-time-series-database/download-atsd/).
* Axibase Collector. For installation instructions, see [Axibase Collector Installation](http://axibase.com/products/axibase-time-series-database/writing-data/collector/axibase-collector-installation/).

# Stage 1: Configuring NGINX
## Configuring NGINX to respond with a statistics page
See a simple [configuration example](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html#example) provided by NGINX documentation. 
You can verify that ngx_http_stub_status_module is installed using the following command:
```sh
nginx -V 2>&1 | grep -o with-http_stub_status_module
```
Later we will assume that your server's statistics page is located at *<your_server_address>/basic_status*. To make changes take effect reload your NGINX server with the following command:
```sh
sudo nginx -s reload
```
You can verify that your statistics page is accessible by visiting *<your_server_address>/basic_status* and getting the result similar to the following:

![Statistics page example](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx_stat_example.png)
## Restricting access to the statistics page
After your server is able to respond with statistics you should make sure the statistics page is accessible for your Axibase Collector. To allow your collector to access your statistics page just add the following line
```
allow <collector_ip_address>
```
at the **beginning** of contents of your *location /basic_status* directive. For example, if your collector is located at *1.1.1.1* , the part of nginx.conf that is responsible for statistics page may look like this:
```
location /basic_status {
    allow 1.1.1.1;
    deny 2.2.2.2;
    allow 192.168.1.0/24;
    deny all;
    stub_status;
}
```
Do not forget to reload your NGINX server.

## Results
By now your NGINX server is ready to respond to your collector machine with a page containing basic statistics if collector visits *<your_server_address>/basic_status*.

# Stage 2: Configuring Axibase Collector
Now your collector should be configured to obtain data from NGINX server and send it to Axibase Time Series Database. It can be done by creating a new file job with proper settings. You can do it by importing existing job configuration for NGINX servers to your collector's list of jobs and making necessary changes for your case.
## Importing provided job configuration
To import the above configuration do the following steps:
* Download and save [existing job configuration for NGINX servers](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx_collector_job.xml)
* Login to your Axibase Collector web interface
* Go to **Jobs** in the upper menu
* Click **Import** at the bottom side of the page
* Choose the saved file from step 1 and click **Import**
* Click **Back**

## Setting list of servers to be monitored
Now you should see **nginx-statistics** file job in the whole list of your jobs.
The **nginx-statistics** file job will visit each *<server_name>/basic_status* page, where *<server_name>* is a single name of a server from **nginx-servers** collection. To edit the target list of NGINX servers that will be monitored:
* Go to your Axibase Collector home page
* Go to **Collections**
* Click on **nginx-servers** collections
* Fill the **Items** form with your list of server addresses, for example:
 
![Server list example](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx_server-list.png)
* Click **Save**

## Setting target Axibase Time Series Database
* Go to your Axibase Collector home page
* Go to **Jobs**
* Click at **nginx-statistics**
* Select the needed ATSD target it it exists from the drop down menu, otherwise create a new one clicking at the *plus sign* to the right of the menu. The target ATSD should be configured as shown in the Stage 3.

## Results
By now, your collector is able to take some data every 5 seconds from all NGINX servers you listed and send it in CSV format to Axibase Timeseries Database.

# Stage 3: Configuring Axibase Time Series Database
## Creating an appropriate CSV parser
The database should be able to process the CSV data that it has received from configured collector. Therefore, a special CSV parser should be created. It can be done by importing provided configurations for a new CSV parser. To add a new parser follow these steps:
* Download and save [existing nginx statistics CSV parser configuration](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/examples/nginx_atsd_csv_parser.xml)
* Login to your Axibase Time Series Database web interface
* Click **Configuration** -> **Parsers:CSV**
* Click **Import** and choose file from the first step
* Click **Import** again. Message about successful import should appear

# Result
By now you have an Axibase Time Series Database that is ready to receive data from the collector. It is available to visually present obtained data using **nginx-basic** portal that by default is assigned to **nginx-basic-servers**.

# Stage 4: Launching
When everything has been configured the monitoring process can be started. To start the process:
* Login to your Axibase Collector web interface
* Go to **Jobs** in the upper menu
* Click at **nginx-statistics**
* Check **Enabled** field
* Click **Save**

# Result
Now your collector gets data from your NGINX servers and transmits it to the ATSD you specified. You can see the results of monitoring an NGINX server by entering ATSD web interface, going to **Entities** tab and clicking a list icon in the **Portals** column near the desired server.

### End of configuration.
