# Docker Job

## Prerequisites

* [Docker Engine v1.7+](https://docs.docker.com/engine/installation/) to collect container properties, events, and statistics.
* [Axibase Time-Series Database](../atsd-install.md) container as a centralized metrics store and rule engine.

## Installation

#### Local Collection

Run Axibase Collector container on each Docker host locally. It will gather statistics from the Docker engine API exposed locally on Unix socket at [/var/run/docker.sock](https://docs.docker.com/engine/reference/api/docker_remote_api/)

- Replace `atsd_host`, `atsd_user`, and `atsd_password` with ATSD hostname and user credentials below.
- Start Axibase Collector container:

```properties
docker run \
   --detach \
   --publish-all \
   --restart=always \   
   --name=axibase-collector \
   --volume /var/run/docker.sock:/var/run/docker.sock \
  axibase/collector \
   -atsd-url=https://atsd_user:atsd_password@atsd_host:8443 \
   -job-enable=docker-socket
```

It may take up to 5 minute to initialize the application on first start.

The Docker job should start executing immediately, even if collector user has not been created. 

> On hosts with SELinux enabled the container will run into `permission denied` error when trying to read data from  `/var/run/docker.sock`. Switch to Remote Collection option. Other alternatives: https://github.com/dpw/selinux-dockersock

##### Launch Parameters

**Name** | **Required** | **Description**
----- | ----- | -----
`--detach` | Yes | Run container in background and print container id.
`--name` | Yes | Assign a host-unique name to the container.
`--restart` | No | Auto-restart policy. _Not supported in all Docker Engine versions._
`--publish-all` | No | Publish all exposed ports to random ports

#### Remote Collection

##### Enable Remote API Access on Docker Hosts

* Login into each Docker host via SSH and enable Docker Engine for [remote API access](https://docs.docker.com/engine/security/https/#create-a-ca-server-and-client-keys-with-openssl).

* Edit /etc/default/docker file

   ```properties
   # Set path to the folder containing {ca,server-cert,server-key}.pem files
   DOCKER_CERT_PATH=/home/ubuntu/certs
   export DOCKER_CERT_PATH
   
   # Add TCP socket on port 2376
   DOCKER_OPTS="--tlsverify --tlscacert=$DOCKER_CERT_PATH/ca.pem --tlscert=$DOCKER_CERT_PATH/server-cert.pem --tlskey=$DOCKER_CERT_PATH/server-key.pem -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2376"
   ```
   
* Verify connectivity
  
  ```properties 
   curl https://127.0.0.1:2376/info \
  --cert /home/docker/certificates/cert.pem \
  --key /home/docker/certificates/key.pem \
  --cacert /home/docker/certificates/ca.pem
  ```
   
* Copy {ca,cert,key}.pem files to your machine.

* Start Axibase Collector container.

```properties
docker run \
   --detach \
   --publish-all \
   --name=axibase-collector \
  axibase/collector \
   -atsd-url=https://atsd_user:atsd_password@atsd_host:8443
```

* Login into Axibase Collector. 
* Open **Jobs:Docker:Add Job** page and enter job name. Click **Enabled** to enable the job.
* Modify cron expression, by the default the job will be executed every minute. To execute the job every 15 seconds, enter `0/15 * * * * ?`. Click Save.
* Click **Use Wizard** button, specify Docker Engine hostname, API port (2376) and attach {cert,key,ca}.pem files.
* Click Validate and Save the job if the test is successfull.
    
## Validation

Login into ATSD and verify that connected Docker hosts are displayed on Entities: Docker Hosts page.

If the Docker host is missing in ATSD, open Jobs page in Collector, check **Result** column and review **Execution Details** page for any errors.

## Container Launch Troubleshooting

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

===

## Launching Linked Containers with docker-compose

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
