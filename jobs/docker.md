# Docker Job

## Prerequisites

* [Docker Engine v1.7+](https://docs.docker.com/engine/installation/) to collect container properties, events, and statistics.
* [Axibase Time-Series Database](../atsd-install.md) container as a centralized metrics store and rule engine.

## Installation

#### Local Collection

Run Axibase Collector container on each Docker host locally. It will gather statistics from the Docker engine API exposed locally on Unix socket at [/var/run/docker.sock](https://docs.docker.com/engine/reference/api/docker_remote_api/)

![Local Collection](docker-local.png)

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
`--name` | No | Assign a host-unique name to the container.
`--restart` | No | Auto-restart policy. _Not supported in all Docker Engine versions._
`--publish-all` | No | Publish all exposed ports to random ports

#### Remote Collection

In remote collection mode Axibase Collector fetches data from multiple remote Docker hosts using https protocol.  

![Local Collection](docker-remote.png)

##### Enable Remote API Access on Docker Hosts

* Login into each Docker host via SSH and generate [client and server certificates](docker-certificates.md).

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

* Find https port assigned to `axibase-collector` container. 

```sh
docker ps -a | grep axibase-collector
```

* Login into Axibase Collector web interface at https://hostname:port
* Open **Jobs:Docker:Add Job** page and enter job name. Click **Enabled** to enable the job. Click Save.
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

## Testing and Evaluating

You can launch both **atsd** and **axibase-collector** containers in a test environment using [`docker-compose`](docker-compose.md)
