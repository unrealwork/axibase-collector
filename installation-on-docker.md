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

To automatically configure Axibase Time Series Database connection add `-atsd-url` parameter:

```properties
docker run \
 --detach \
 --publish-all \
 --restart=always \
 --name=axibase-collector \
 axibase/collector:latest \
  -atsd-url=https://atsd_user:atsd_password@atsd_host:8443
```

If the container is launched to collect data from Docker Engine API on the local host, mount Unix socket as described [here](/jobs/docker.md#local-collection).  

## Launch Parameters

**Name** | **Required** | **Description**
----- | ----- | -----
`--detach` | Yes | Run container in background and print container id.
`--publish-all` | No | Publish all exposed ports to random ports
`--restart` | No | Auto-restart policy. _Not supported in all Docker Engine versions._
`--name` | Yes | Assign a unique name to the container.

To bind the collector to a particular port instead of a random one, replace `--publish-all` with `--publish 10443:8443`, where the first number indicates an available port on Docker host.

## Check Installation

It may take up to 5 minutes to initialize the application.

```sh
docker exec -it axibase-collector tail -f /opt/axibase-collector/logs/axibase-collector.log
```

Wait until the following message appears:

_FrameworkServlet 'dispatcher': initialization completed._

This message indicates that initial configuration is complete.

## Validation

```sh
docker ps | grep axibase-collector
```

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
ee15099d9f88        axibase/collector   "/bin/bash /opt/axiba"   33 seconds ago      Up 32 seconds       0.0.0.0:32769->9443/tcp   axibase-collector
```

Take note of the public port assigned to axibase-collector container, e.g. **32769** in the example above.

Enter `https://docker_hostname:public_port` to access the web interface and to setup an [administrator account](configure-administrator-account.md).

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

See "Latest Quick Workarounds" for Docker issue [#18180](https://github.com/docker/docker/issues/18180).
