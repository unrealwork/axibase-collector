# Docker Job

## Prerequisites

Install [Axibase Time-Series Database container](../atsd-install.md) on one of the Docker hosts. 

This ATSD instance will serve as a central repository for container properties, events, and statistics. 

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

The Docker job should start executing immediately, even if collector user has not been created. 

- Optionally, set auto-restart policy for the container if the Docker engine version supports this option `--restart-always=true`.
- On hosts with SELinux enabled the container will run into `permission denied` error when trying to read data from `/var/run/docker.sock`. Switch to Remote Collection option. Other alternatives: https://github.com/dpw/selinux-dockersock

#### Remote Collection

##### Launch Axibase Collector container

```properties
docker run -d -P \
   --name=axibase-collector \
  axibase/collector \
   -atsd-url=https://atsd_user:atsd_password@atsd_host:8443
```

##### Enable Remote API Access on Docker Hosts

* Login into Docker host via SSH and configure Docker engine API for [remote access](https://docs.docker.com/engine/security/https/#create-a-ca-server-and-client-keys-with-openssl).

* Edit /etc/default/docker file, set `DOCKER_CERT_PATH` variable to the directory containing {ca,cert,key}.pem files and add a TCP socket option on port 2376:

   ```
   # Set path to the folder containing {ca,server-cert,server-key}.pem files
   DOCKER_CERT_PATH=/home/docker/certificates
   export DOCKER_CERT_PATH
   
   # Modify daemon startup options
   DOCKER_OPTS="--tlsverify --tlscacert=$DOCKER_CERT_PATH/ca.pem --tlscert=$DOCKER_CERT_PATH/server-cert.pem --tlskey=$DOCKER_CERT_PATH/server-key.pem -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2376"
   ```
   
* Verify connectivity:
  
  ```sh 
   curl https://127.0.0.1:2376/info \
  --cert /home/docker/certificates/cert.pem \
  --key /home/docker/certificates/key.pem \
  --cacert /home/docker/certificates/ca.pem
  ```
   
* Copy {ca,cert,key}.pem files to your machine.
* On Admin>Certificate Import page, select Store Type=KEY, attach key.pem and cert.pem files, set Alias to docker-key-$HOST, where $HOST is the DNS name or IP address of the Docker host. Click Upload.
* On Admin>Certificate Import page, select Store Type: TRUST, attach ca.pem file, set Alias to docker-trust-$HOST. Click Upload.
* Open Data Sources > HTTP Pools page and clone `docker_host`.
* Rename the pool, set Server to $HOST.
* Click on `Default` Key Store and select docker-key-$HOST key alias.
* Click Test to verify connectivity and save the pool.
* Clone the built-in `docker-remote-api-keystore` job, rename it, set the target ATSD and change its HTTP pool to previous created pool.
* Open Docker configuration specified in the job, and click Test to validate API queries.
* Check Enabled box, save the job, and click Run.
    
## Validation

Login into ATSD UI and verify that the Docker host is displayed on Entities: Docker Hosts page.

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

## Troubleshooting

```sh
docker exec -it axibase-collector tail -f /opt/axibase-collector/logs/axibase-collector.log
```

The following message indicates that initial configuration is finished:

> FrameworkServlet 'dispatcher': initialization completed.

## UI

Check https port that is assigned to collector and open it in your browser: https://container-ip:port

```sh
docker ps | grep axibase-collector
```

Locate **docker-socket** job on the Jobs list and check that it's enabled and `Items Read` is not 0.

## Known Issues

If Axibase Collector fails to start, verify that your Docker host runs on a supported kernel level.

```sh
uname -a
```

* 3.13.0-79.123+
* 3.19.0-51.57+
* 4.2.0-30.35+

See “Latest Quick Workarounds” for Docker issue #18180 on https://github.com/docker/docker/issues/18180
