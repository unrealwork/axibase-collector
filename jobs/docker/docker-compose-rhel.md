# Launching Linked Containers with `docker-compose`

You can launch linked ATSD and Axibase Collector containers on the same Docker host with `docker-compose`.
There are two alternatives for passing common parameters to both containers:

* Export parameters as environment variables
* Use composite yml files

## Export Credentials as Environment Variables

`docker-compose.yml`

```yaml
version: '2'

services:

  atsd:
    image: registry.connect.redhat.com/axibase/atsd:latest
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
    image: registry.connect.redhat.com/axibase/collector:latest
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


## Specify Credentials in `.env` File

`.env`

```yaml
COLLECTOR_USER_NAME=myuser
COLLECTOR_USER_PASSWORD=mypassword
COLLECTOR_USER_TYPE=api-rw

```

`docker-compose.yml`

```yaml
version: '2'

services:
  atsd:
    image: registry.connect.redhat.com/axibase/atsd:latest
    ports:
      - "8088:8088"
      - "8443:8443"
      - "8081:8081"
      - "8082:8082/udp"
    container_name: atsd
    hostname: atsd
    restart: always

  collector:
    image: registry.connect.redhat.com/axibase/collector:latest
    depends_on:
      - atsd
    ports:
      - "9443:9443"
    container_name: axibase-collector
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - COLLECTOR_ARGS=-atsd-url=https://${COLLECTOR_USER_NAME}:${COLLECTOR_USER_PASSWORD}@atsd:8443 -job-enable=docker-socket
```

Pull latest images and launch the containers:

```sh
docker-compose pull && docker-compose up -d
```
