# AXIBASE COLLECTOR INSTALLATION

**Step 1 [Optional].**
Create axibase user, if necessary:
```sh
sudo useradd -m axibase
sudo passwd axibase
```

**Step 2.**
Install Java 7:

**Option 1. OpenJDK on Ubuntu or Debian:**
```sh
sudo apt-get update
sudo apt-get install openjdk-7-jdk
```
**Option 2. OpenJDK on RHEL, SLES, CentOS:**
```sh
sudo yum install java-1.7.0-openjdk-devel
```
**Option 3. Oracle JDK:**

Download and install Java 7 rpm from: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html
```sh
sudo rpm -i jdk-7u80-linux-x64.rpm
```
**Step 3.**
Check that port 9443 is available. If the port is available, output of this command should be blank.
```sh
sudo netstat -tulnp | grep "9443"
```
**Step 4.**
Login as axibase user:
```sh
su axibase
```
**Step 5.**
Download and extract Axibase Collector package to the user’s home directory. The latest version and direct download link is available at here.
```sh
cd ~
wget https://www.axibase.com/public/axibase-collector-v${VERSION}.tar.gz
tar xvf axibase-collector-v${VERSION}.tar.gz
```
**Step 6.** 
Verify that ‘java’ command returns version 1.7.x
```sh
java -version
```
**Step 7.**
If port 9443 is occupied by other processes, open start-collector.sh script and set custom ports:
```sh
nano ~/axibase-collector/bin/start-collector.sh
COLLECTOR_OPTS="-httpsPort=10443"
```
**Step 8.**
Start Axibase Collector:
```sh
~/axibase-collector/bin/start-collector.sh
```
**Step 9.**
Check collector log file for message FrameworkServlet 'dispatcher': initialization completed.

It may take a few minutes for collector to initialize on first start.
```sh
tail -f ~/axibase-collector/logs/axibase-collector.log
```
**Step 10.** 
Configure Axibase Collector to send data into Axibase Time Series Database

*   [Configure ATSD connection](/products/axibase-time-series-database/writing-data/collector/axibase-collector-connect-to-atsd/)

#### Stoping Axibase Collector

In order to stop Axibase Collector, execute the following command:
```sh
~/axibase-collector/bin/stop-collector.sh
```
