# Install ATSD and Axibase Collector Bundle

You can launch linked ATSD and Axibase Collector containers on the same Docker host with `docker-compose`.

## Create `docker-compose.yml` file

```yaml
version: '2'

services:

  atsd:
    image: axibase/atsd:latest
    ports:
      - "8088:8088"
      - "8443:8443"
      - "8081:8081"
      - "8082:8082/udp"
    container_name: atsd
    hostname: atsd
    environment:
      - ATSD_USER_NAME=${USER}
      - ATSD_USER_PASSWORD=${PASSWORD}

  collector:
    image: axibase/collector:latest
    depends_on:
      - atsd
    ports:
      - "9443:9443"
    container_name: axibase-collector
    environment:
      - COLLECTOR_ARGS=-atsd-url=https://${USER}:${PASSWORD}@atsd:8443
```

## Launch Containers

```sh
export USER=myuser; export PASSWORD=mypassword; docker-compose up -d
```

## Access UI

* ATSD url: https://docker_host:8443/
* Axibase Collector url: https://docker_host:9443/
