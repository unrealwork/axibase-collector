# Axibase Collector

## Overview

Axibase Collector is a Java-based ETL application that queries external data sources on schedule and uploads received data as series, properties, messages, and files into Axibase Time Series Database.

It supports [collections](collections.md)-based automation in order to query as many data sources as possible with the same configuration.

## Typical Use Cases

* Download CSV/TSV file from a web or FTP server and upload it into ATSD
* Query a web service, convert its JSON output into tabular format and upload it into ATSD
* Historize metrics by querying their current values and storing them in ATSD for analytics
* Offload prunable data from relational databases for long-term storage in ATSD
* Collect real-time performance metrics from Java applications (JMX), network devices (SNMP), etc.

## Supported Data/Network Protocols

* JDBC
* SNMP
* JMX
* ICMP
* TCP
* HTTP

## Supported File Formats

* CSV/TSV
* JSON

## Supported APIs

* Amazon Web Services CloudWatch
* Docker Engine
* HP OVPM (Performance Manager)

## Installation

* [Requirements](requirements.md)
* Installation:
  - Installation on [host](installation.md)
  - Installation in [Docker container](installation-on-docker.md)
* [Administrator Account](configure-administrator-account.md)
* [Collector account](https://github.com/axibase/atsd-docs/blob/master/administration/collector-account.md) in ATSD
* [ATSD Server Connection](atsd-server-connection.md)

## Jobs

* [Overview](job-generic.md)
* [Scheduling](scheduling.md)
* [Monitoring](monitoring.md)

## Automation

* [Item Lists](collections.md)

## Job Types

**Type** | **Description**
----- | -----
[AWS](jobs/aws.md) | Collects AWS statistics using CloudWatch API.
[Docker](jobs/docker.md) | Collects containers statistics using Docker Engine API.
[JDBC](jobs/jdbc.md) | Executes SQL queries against relational databases.<br>Stores resultset as series and properties.
[File](jobs/file.md) | Downloads CSV/TSV files from http:// and file:// sources and uploads them into ATSD for parsing.<br>Supports wildcards, placeholders and reliable delivery with pre- and post-upload file actions.
[JMX](jobs/jmx.md) | Collects MBean attribute values from Java applications.
[HTTP](jobs/http.md) | Executes HTTP requests or Web Driver scripts. <br>Stores transaction status and response code
[ICMP](jobs/icmp.md) | Pings hostnames/IP addresses and stores response status.
[JSON](jobs/json.md) | Downloads JSON documents and extracts series and properties using JSONPath.
[OVPM](jobs/ovpm.md) | Offloads statistics from HP OpenView Performance Manager.
[SNMP](jobs/snmp.md) | Queries SNMP devices using built-in and custom MIB files.
[TCP](jobs/tcp.md) | Connects to hostnames/IP addresses and stores connection status.


