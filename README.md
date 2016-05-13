# Axibase Collector Documentation

## Overview

Axibase Collector is a Java-based collection daemon that polls data from external sources and uploads it as series, properties, and messages into Axibase Time Series Database. 

The Collector can also download files in a variety of input formats and upload them into ATSD for parsing.

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

## Configuration

* [Administrator Account](configure-administrator-account.md)
* [Collector account](https://github.com/axibase/atsd-docs/blob/master/administration/collector-account.md) in ATSD
* [ATSD Server Connection](atsd-server-connection.md)

## Jobs

* [Overview](job-generic.md)
* [Scheduling](scheduling.md)
* [Monitoring](job-completion-messages.md)

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


