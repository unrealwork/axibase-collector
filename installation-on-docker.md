# Installation on Docker

## Requirements

Docker version 1.6+.
For Docker installation steps see [Docker official website](https://docs.docker.com/engine/installation/).

## Resources

* [Dockerfile](https://github.com/axibase/docker-axibase-collector/blob/master/Dockerfile)
* [Docker Hub](https://hub.docker.com/r/axibase/collector/)

## Launch

```properties
docker run -d -P\
--name="axibase-collector" \
axibase/collector
```

To automatically configure Axibase Time Series Database connection add `-atsd-url` parameter:

```properties
docker run -d -P \
   --name=axibase-collector \
  axibase/collector \
   -atsd-url=https://atsd_user:atsd_password@atsd_host:8443
```

Optionally, add restart policy if the Docker engine version supports option `--restart-always=true`:

```properties
docker run -d -P \
   --name=axibase-collector \
   --restart-always=true \
  axibase/collector \
   -atsd-url=https://atsd_user:atsd_password@atsd_host:8443
```

If the collector container is launched to monitor local Docker host, mount Unix socket as described [here](/jobs/docker.md#local-collection).  


## Check

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

Take note of the public port assigned to axibase-collector container.

Enter `https://ip_address:public_port` to access the web interface and to setup administrator account.

## Troubleshooting

Review axibase-collector.log and err-collector.log files for any errors.

```sh
docker exec -it axibase-collector tail -f -n 50 /opt/axibase-collector/logs/axibase-collector.log
```

```sh
docker exec -it axibase-collector tail -f -n 50 /opt/axibase-collector/logs/err-collector.log
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
