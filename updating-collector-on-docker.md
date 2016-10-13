# Updating Axibase Collector on Docker

### Download the latest Axibase Collector Release

The latest release is available at the following [link](https://axibase.com/public/axibase-collector_latest.htm).

```bash
wget -O axibase-collector.tar.gz http://axibase.com/public/axibase-collector-v{revision}.tar.gz
```

### Copy Archive

Copy the `axibase-collector.tar.gz` file to the server where Docker is running.

### Unpack Archive

```bash
tar xvf axibase-collector.tar.gz
```

### Stop the Collector Process

```bash
docker exec -it axibase-collector /opt/axibase-collector/bin/stop-collector.sh
```

### Replace `axibase-collector.war` File

Replace `/opt/axibase-collector/lib/axibase-collector.war` in container with the version contained in the archive.

```bash
docker cp ./axibase-collector/lib/axibase-collector.war axibase-collector:/opt/axibase-collector/lib/
```

### Start the Collector Process

```sh
docker exec -it axibase-collector /opt/axibase-collector/bin/start-collector.sh
```
