# Updaing Axibase Collector

Follow these steps to upgrade Axibase Collector to the latest revision:

* Download Axibase Collector `.tar.gz` archive to the server where collector is installed.

* Stop collector process:
```sh
./bin/stop-collector.sh
```
* Replace `./lib/axibase-collector.war` with the version contained in the archive.

* Start collector process:
```sh
./bin/start-collector.sh
```
