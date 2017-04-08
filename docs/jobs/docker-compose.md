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
      - COLLECTOR_USER_NAME=${C_USER}
      - COLLECTOR_USER_PASSWORD=${C_PASSWORD}
      - COLLECTOR_USER_TYPE=api-rw

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
      - COLLECTOR_ARGS=-atsd-url=https://${C_USER}:${C_PASSWORD}@atsd:8443 -job-enable=docker-socket
```

Launch containers:

```sh
export C_USER=myuser; export C_PASSWORD=mypassword; docker-compose up -d
```


## Specify Credentials in `base.yaml` File

`base.yml`

```yaml
version: '2'

services:
  base:
    environment:
      COLLECTOR_USER_NAME: myuser
      COLLECTOR_USER_PASSWORD: mypassword 
      COLLECTOR_USER_TYPE: api-rw
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
      - COLLECTOR_ARGS=-atsd-url=https://${COLLECTOR_USER_NAME}:${COLLECTOR_USER_PASSWORD}@atsd:8443 -job-enable=docker-socket
```

Pull latest images and launch the containers:

```sh
docker-compose pull && docker-compose up -d
```
