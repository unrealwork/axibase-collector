# Installation on Docker

## Host Requirements

* [Docker Engine](https://docs.docker.com/engine/installation/) 1.7+.

## Image Information

* Image name: axibase/collector:latest
* [Dockerfile](https://github.com/axibase/docker-axibase-collector/blob/master/Dockerfile)
* [Docker Hub](https://hub.docker.com/r/axibase/collector/)

## Start Container

```properties
docker run \
 --detach \
 --publish-all \
 --restart=always \
 --name=axibase-collector \
 axibase/collector:latest
```

To automatically configure Axibase Time Series Database connection add `-atsd-url` parameter containing ATSD hostname and https port (default 8443) and [collector account](https://github.com/axibase/atsd-docs/blob/master/administration/collector-account.md) credentials:

```properties
docker run \
 --detach \
 --publish-all \
 --restart=always \
 --name=axibase-collector \
 axibase/collector:latest \
  -atsd-url=https://collector-user:collector-password@atsd_host:atsd_https_port
```

If the container is launched to collect data from Docker Engine API on the local host, mount Unix socket as described [here](/jobs/docker.md#local-collection).  

## Launch Parameters

**Name** | **Required** | **Description**
----- | ----- | -----
`--detach` | Yes | Run container in background and print container id.
`--publish-all` | No | Publish exposed https port (9443) to a random port
`--restart` | No | Auto-restart policy. _Not supported in all Docker Engine versions._
`--name` | No | Assign a host-unique name to the container.

To bind the collector to a particular port instead of a random one, replace `--publish-all` with `--publish 10443:9443`, where the first number indicates an available port on Docker host.

## Check Installation

It may take up to 5 minutes to initialize the application.

```sh
docker exec -it axibase-collector tail -f /opt/axibase-collector/logs/axibase-collector.log
```

Wait until the following message appears:

> _FrameworkServlet 'dispatcher': initialization completed._

This message indicates that initial configuration is complete.

## Validation

```sh
docker ps | grep axibase-collector
```

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
ee15099d9f88        axibase/collector   "/bin/bash /opt/axiba"   33 seconds ago      Up 32 seconds       0.0.0.0:32769->9443/tcp   axibase-collector
```

Take note of the public https port assigned to axibase-collector container, e.g. **32769** in the example above.

## Login

Open https://hostname:9443 in your browser and create an [administrator account](configure-administrator-account.md).

## Setup ATSD Connection

Configure [ATSD Server connection](atsd-server-connection.md) to send data into an Axibase Time Series Database instance.

## Troubleshooting

Review the following log files for any errors:

```sh
docker exec -it axibase-collector tail -n 100 /opt/axibase-collector/logs/axibase-collector.log
```

```sh
docker exec -it axibase-collector tail -n 100 /opt/axibase-collector/logs/err-collector.log
```

## Known Issues

If the container fails to start, verify that the Docker host runs on a supported kernel level. 

```sh
uname -a 
```

* 3.13.0-79.123+ 
* 3.19.0-51.57+ 
* 4.2.0-30.35+ 

See "Latest Quick Workarounds" for Docker issue [#18180](https://github.com/docker/docker/issues/18180#issuecomment-193708192).
