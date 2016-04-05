# UPDATING AXIBASE COLLECTOR

Execute the following steps to Axibase Collector to the latest revision:

* Download Axibase Collector from the URL provided by Axibase Support.
* Copy the archive to the server where Axibase Collector is installed.

* Stop collector process:
```sh
./bin/stop-collector.sh
```
* Replace `./lib/axibase-collector.war` with the version contained in the archive.

* Open `./bin/start-collector.sh` in editor and modify the following parameter:
```sh
COLLECTOR_CLASS="AxibaseCollector"
```

* `cd` to bin directory and start Collector with:
```sh
./start-collector.sh
```
