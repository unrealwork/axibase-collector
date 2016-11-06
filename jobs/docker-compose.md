# Launching Linked Containers with `docker-compose`

You can launch linked ATSD and Axibase Collector containers on the same Docker host with `docker-compose`. 
There are two alternatives for passing common parameters to both containers:

* Export parameters as environment variables
* Use composite yaml files
 
Make sure that the [docker.xml](docker.xml) file is present in the `/tmp` directory on the Docker host.

## Export Credentials as Environment Variables

`docker-compose.yml`

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
    restart: always
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
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - COLLECTOR_ARGS=-atsd-url=https://${USER}:${PASSWORD}@atsd:8443 -job-enable=docker-socket
```

Launch containers:

```sh
export USER=myuser; export PASSWORD=mypassword; docker-compose up -d
```


## Specify Credentials in `base.yaml` File

`base.yml`

```yaml
version: '2'

services:
  base:
    environment:
      ATSD_USER_NAME: myuser
      ATSD_USER_PASSWORD: mypassword 
```

`docker-compose.yml`

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
    restart: always
    extends:
      file: base.yml
      service: base

  collector:
    image: axibase/collector:latest
    depends_on:
      - atsd    
    ports:
      - "9443:9443"
    container_name: axibase-collector
    restart: always
    extends:
      file: base.yml
      service: base
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - COLLECTOR_ARGS=-atsd-url=https://${ATSD_USER_NAME}:${ATSD_USER_PASSWORD}@atsd:8443 -job-enable=docker-socket
```

Launch containers:

```sh
docker-compose up -d
```
