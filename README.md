# Axibase Collector Documentation

## Overview

Axibase Collector is a Java application that collects data from external sources and uploads them as series, properties,  messages, and CSV files into Axibase Time Series Database.

The Collector supports commonly used data exchange protocols including JDBC, SNMP, JMX, JSON, CSV, ICMP, TCP, HTTP, OVPM, Files as well as specific APIs such as Amazon Web Services and Docker Engine.

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
* [TCP](jobs/tcp.MD)


