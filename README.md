# Axibase Collector Documentation

## Overview

Axibase Collector is a Java-based integration scheduler that collects data from external sources and uploads it as series, properties, and messages into Axibase Time Series Database. It can also download files in a variety of input formats and upload them into ATSD in CSV format.

The Collector supports commonly used data exchange protocols including JDBC, SNMP, JMX, JSON, CSV/TSV, ICMP, TCP, HTTP, OVPM as well as specific APIs such as Amazon Web Services and Docker Engine.

## Installation

* [Requirements](requirements.md)
* Installation on [host](installation.md)
* Installation in [Docker container](installation-on-docker.md)

## Configuration

* [Administrator Account](configure-administrator-account.md)
* [Collector account](collector-account.md) in ATSD
* [ATSD Server Connection](atsd-server-connection.md)

## Jobs

* [Overview](job-generic.md)
* [Scheduling](scheduling.md)
* [Completion](job-completion-messages.md)

## Job Types

* [AWS](jobs/aws.md)
* [Docker](jobs/docker.md)
* [File](jobs/file.md)
* [HTTP](jobs/http.md)
* [ICMP](jobs/icmp.md)
* [JDBC](jobs/jdbc.md)
* [JMX](jobs/jmx.md)
* [JSON](jobs/json.md)
* [OVPM](jobs/ovpm.md)
* [SNMP](jobs/snmp.md)
* [TCP](jobs/tcp.md)


