# Axibase Collector

## Overview

Axibase Collector is a Java-based ETL application that queries external data sources on schedule and uploads received data as series, properties, messages, and files into [Axibase Time Series Database](http://axibase.com/products/axibase-time-series-database/) (ATSD).

The Collector supports data markers to minimize the load on the source systems as well as [list](collections.md)-based automation to efficiently copy data from multiple sources with re-usable configuration.

## Use Cases

* Download CSV/TSV file from a URL or an FTP server and upload it into ATSD.
* Offload data from a relational database for long-term storage in ATSD.
* Query a web service, convert its JSON output into tabular format, and upload it into ATSD.
* Historize metrics by querying current values and retaining their history in ATSD.
* Collect key performance metrics from Java applications (JMX), network devices (SNMP), etc.

## Supported Databases

* Oracle
* IBM DB2
* Microsoft SQL Server
* MySQL
* PostgreSQL
* Sybase
* Apache Derby
* Vertica
* ATSD
* SAP HANA
* OSISoft PI Data Archive
* OSISoft PIOleDBEnt
* Custom

## Supported Data/Network Protocols

* JDBC
* SNMP
* JMX
* ICMP
* TCP
* HTTP

## Supported File Formats

* CSV
* TSV
* Text
* JSON

## Supported Schemas

* [Open Data/SOCRATA](https://project-open-data.cio.gov/v1.1/schema/)

## Supported APIs

* Amazon Web Services CloudWatch
* Docker Engine
* HP OVPM (Performance Manager)

## Installation

* [Requirements](/docs/requirements.md)
* Installation:
  - Installation on [host](/docs/installation.md)
  - Installation in [Docker container](/docs/installation-on-docker.md)
* [Administrator Account](/docs/configure-administrator-account.md)
* [Collector account](https://github.com/axibase/atsd/blob/master/docs/administration/collector-account.md) in ATSD
* [ATSD Server Connection](/docs/atsd-server-connection.md)

## Jobs

* [Overview](/docs/job-generic.md)
* [Scheduling](/docs/scheduling.md)
* [Monitoring](/docs/monitoring.md)

## Automation

* [Item Lists](/docs/ollections.md)

## Job Types

**Type** | **Description**
----- | -----
[AWS](/docs/jobs/aws.md) | Collects AWS statistics using CloudWatch API.
[Docker](/docs/jobs/docker.md) | Collects container, image, and volume statistics using Docker Engine API.
[JDBC](/docs/jobs/jdbc.md) | Executes SQL queries against relational databases.<br>Converts rows into series,  property, or message commands.
[File](/docs/jobs/file.md) | Downloads CSV/TSV files from remote servers or local file system and uploads them into ATSD for parsing.<br>Supports HTTP/s, FTP, SFTP, SCP, and FILE protocols.
[JSON](/docs/jobs/json.md) | Downloads JSON files, parses the documents and converts JSON fields into series, property, and message commands using JSONPath.
[Socrata](/docs/jobs/socrata.md) | Downloads JSON documents published in Socrata schema and converts them into series, property, and message commands.
[JMX](/docs/jobs/jmx.md) | Collects MBean attribute values from Java applications.
[HTTP](/docs/jobs/http.md) | Executes HTTP requests or Web Driver scripts and stores response status and response times as metrics.
[ICMP](/docs/jobs/icmp.md) | Pings hostnames/IP addresses and stores response status.
[OVPM](/docs/jobs/ovpm.md) | Offloads statistics from HP OpenView Performance Manager.
[PI](/docs/jobs/pi.md) | Extracts PI points archive data via JDBC driver.
[SNMP](/docs/jobs/snmp.md) | Queries SNMP devices using built-in and custom MIB files.
[TCP](/docs/jobs/tcp.md) | Connects to hostnames/IP addresses and stores connection status.

## Administration

* [Monitoring](monitoring.md)
* [Logging](logging.md)
* [Settings](settings.md)

## Examples

**Name** | **Job Type** | **Description**
----- | ----- | ----
[ActiveMQ](/docs/jobs/examples/activemq) | JMX | Collect metrics about brokers, queues, pub/sub topics
[Derby Database](/docs/jobs/examples/derby) | JMX | Collect uptime metrics for the database
[File](/docs/jobs/examples/file) | File | Download CSV files
[HP OpenView](/docs/jobs/examples/hp-openview) | OVPM | Offload CODA metrics from OVPM
[Jetty](/docs/jobs/examples/jetty) | JMX | Collect sessions, requests, status from the Jetty server
[JSON](/docs/jobs/examples/json) | JSON | Download json file and convert it to CSV format
[JVM](/docs/jobs/examples/jvm) | JMX | Collect key JVM performance metrics:
[MySQL](/docs/jobs/examples/mysql) | JDBC | Collect database performance metrics
[nginx](/docs/jobs/examples/nginx) | File | Collect key web server metrics for nginx
[nginx-plus](/docs/jobs/examples/nginx-plus) | File | Collect extended web server metrics for nginx-plus
[Oracle EM](/docs/jobs/examples/oracle-enterprise-manager) | JDBC | Offload incremental database and application metrics collected by Oracle EM
[PI](/docs/jobs/examples/pi) | PI | Copy incremental tag values from PI Data Archive
[PostgreSQL](/docs/jobs/examples/postgres) | JDBC | Collect database performance metrics
[SCOM](/docs/jobs/examples/scom) | JDBC | Offload incremental server metrics collected by SCOM
[Socrata](/docs/jobs/examples/socrata) | Socrata | Download and parse datasets published in Socrata format
[SolarWinds](/docs/jobs/examples/solarwinds) | JDBC | Offload incremental network and server metrics collected by SolarWinds
[Tomcat](/docs/jobs/examples/tomcat) | JMX | Collect key container metrics exposed by Tomcat
[VMware](/docs/jobs/examples/vmware) | JDBC | Offload incremental cluster, host, VM metrics collected by VMware vCenter
