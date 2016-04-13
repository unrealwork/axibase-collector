# Docker Job

## Prerequisites

Install [Axibase Time-Series Database container](../atsd-install.md) on one of the Docker hosts. 

This ATSD instance will serve as a centralized repository for container and image properties, events, and statistics collected from multiple Docker hosts in your environment. 

## Installation

#### Local Collection

Run Axibase Collector container on each Docker host locally. It will gather statistics from the Docker engine API exposed locally on Unix socket at [/var/run/docker.sock](https://docs.docker.com/engine/reference/api/docker_remote_api/)

- Replace `atsd_host`, `atsd_user`, and `atsd_password` with ATSD hostname and user credentials below.
- Start Axibase Collector container:

```properties
docker run -d -P \
   --name=axibase-collector \
   -v /var/run/docker.sock:/var/run/docker.sock \
  axibase/collector \
   -atsd-url=https://atsd_user:atsd_password@atsd_host:8443 \
   -job-enable=docker-socket
```

- Enable auto-restart for the container if Docker engine supports option `--restart-always=true`.
- On Docker hosts with SELinux enabled the container will run into `permission denied` error when trying to read data from `/var/run/docker.sock` Unix socket. Fall back to Remote Collection option or disable SELinux in test environments. Other alternatives: https://github.com/dpw/selinux-dockersock

#### Remote Collection

Launch an Axibase Collector container and configure multiple Docker jobs each using a different HTTP pool with SSL encryption and certificate keys for accessing Docker engine API remotely.  

Docker remote job example: [docker-remote-job.xml](docker-remote-job.xml)

## Testing

You can launch linked ATSD and Axibase Collector containers on the same Docker host with docker-compose. 
There are two alternatives for passing common parameters to both containers:

* Export parameters as environment variables
* Use composite yaml files
 
Make sure [docker.xml](docker.xml) file is present in /tmp directory on the Docker host.

#### Export credentials as environment variables

docker-compose.yml

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
      - COLLECTOR_ARGS=-atsd-url=https://${USER}:${PASSWORD}@atsd:8443 job-enable=docker-socket
```

Launch containers:

```sh
export USER=myuser; export PASSWORD=mypassword; docker-compose up
```


### Specify credentials in base yaml file

base.yml

```yaml
version: '2'

services:
  base:
    environment:
      ATSD_USER_NAME: myuser
      ATSD_USER_PASSWORD: mypassword 
```

docker-compose.yml

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
      - COLLECTOR_ARGS=-atsd-url=https://${ATSD_USER_NAME}:${ATSD_USER_PASSWORD}@atsd:8443 job-enable=docker-socket
```

Launch containers:

```sh
docker-compose up
```