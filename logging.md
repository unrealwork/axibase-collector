# Logging

### Copy log file

Copy log file to the Docker host on which Axibase Collector container is running:

```bash
docker cp axibase-collector:/opt/axibase-collector/logs/axibase-collector.log ./
```

### Copy all log files

Arhive log files from the Docker host on which Axibase Collector container is running:

```bash
docker exec -it axibase-collector tar cvf tmp/logs.tar.gz opt/axibase-collector/logs/
```

Copy the created archive to the Docker host on which Axibase Collector container is running:

```bash
docker cp axibase-collector:/tmp/logs.tar.gz ./
```