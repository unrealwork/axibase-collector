# Axibase Collector Installation

## Install Java 7 JDK:

#### OpenJDK on Ubuntu or Debian

```sh
sudo apt-get update
sudo apt-get install openjdk-7-jdk
```

#### OpenJDK on RHEL, SLES, CentOS

```sh
sudo yum install java-1.7.0-openjdk-devel
```

#### Oracle JDK

Download Java 7 JDK from [Oracle web site](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html).

```sh
sudo rpm -i jdk-7u80-linux-x64.rpm
```

## Verify Java Installation

Verify that `java` command displays version 1.7.x.

```sh
java -version
```

## Install

Download Axibase Collector archive. The latest version and direct download link is available  [here](https://axibase.com/public/axibase-collector_latest.htm).

```sh
wget http://axibase.com/public/axibase-collector-v${VERSION}.tar.gz
```

Extract the archive.

```sh
tar xvf axibase-collector-v${VERSION}.tar.gz
```

## Check Ports

Check that port **9443** is available. If the port is available, output of this command should be blank.

```sh
sudo netstat -tulnp | grep "9443"
```

If port **9443** is taken by another processes, open start-collector.sh script and set a custom port:

```sh
nano ./axibase-collector/bin/start-collector.sh
COLLECTOR_OPTS="-httpsPort=10443"
```

## Start Collector

```sh
./axibase-collector/bin/start-collector.sh
```

It may take up to 5 minutes for collector to initialize.

## Check Installation

Check collector log file for message FrameworkServlet 'dispatcher': initialization completed.

```sh
tail -f ./axibase-collector/logs/axibase-collector.log
```

## Login

Open https://hostname:9443 in your browser and configure an administrator account.

## Setup ATSD connection

Configure Axibase Collector to send data into Axibase Time Series Database

*   [Configure ATSD connection](https://axibase.com/products/axibase-time-series-database/writing-data/collector/axibase-collector-connect-to-atsd/)

## Stoping Axibase Collector

In order to stop Axibase Collector, execute the following command:

```sh
./axibase-collector/bin/stop-collector.sh
```
