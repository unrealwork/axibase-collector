# ATSD Installation on Docker host

## Requirements

* [Docker Engine](https://docs.docker.com/engine/installation/) 1.7+.

## Container References

* [Dockerfile](https://github.com/axibase/dockers/blob/master/atsd/Dockerfile)
* [Docker Hub](https://hub.docker.com/r/axibase/atsd/)

## Start `axibase/atsd:latest` Container

Replace `${collector-user}` and `${collector-password}` with new credentials for a built-in [collector account](collector-account.md) that will be created automatically. Minimum password length is 6 characters.

```properties
docker run \
  --detach \
  --interactive \
  --tty \
  --hostname=atsd \
  --name=atsd \
  --restart=always \  
  -p 8088:8088 \
  -p 8443:8443 \
  -p 8081:8081 \
  -p 8082:8082/udp \
  -e ATSD_USER_NAME=${collector-user} \
  -e ATSD_USER_PASSWORD=${collector-password} \
  axibase/atsd:latest \
  tail -f /opt/atsd/atsd/logs/start.log
```

It may take up to 5 minutes to initialize the database.

## Launch Parameters

**Name** | **Required** | **Description**
----- | ----- | -----
`--detach` | Yes | Run container in background and print container id.
`--interactive` | No | Keep `stdin` open even if not attached.
`--tty` | No | Allocate a pseudo-TTY.
`--hostname` | No | Assign hostname to the container.
`--name` | Yes | Assign a host-unique name to the container.
`--restart` | No | Auto-restart policy. _Not supported in all Docker Engine versions._
`-p` | No | Publish a container's port to the host
`-e ATSD_USER_NAME` | No | Username for the built-in collection account
`-e ATSD_USER_PASSWORD` | No | Password for the built-in collector account. Minimum length is 6 characters.

If `ATSD_USER_{NAME, PASSWORD}` credentials are specified as part of `docker run` command, no account will be created. In this case, you can launch the container without `ATSD_USER_{NAME, PASSWORD}` parameters and configure both administrator and [collector](collector-account.md) accounts on initial login.

## Exposed Ports

* 8088 – http
* 8443 – https
* 8081 – [TCP network commands](https://axibase.com/atsd/api/#network-commands)
* 8082 – [UDP network commands](https://axibase.com/atsd/api/#network-commands)
* 
## Port Mappings

Depending on your Docker host network configuration, you may need to change port mappings for the container in case some of the exposed ports are already taken.

```properties
docker run \
  --detach \
  --hostname=atsd \
  --name=atsd \
  --restart=always \  
  -p 9088:8088 \
  -p 9443:8443 \
  -p 9081:8081 \
  -p 9082:8082/udp \
  axibase/atsd:latest
```

## Known Issues

If the container fails to start, verify that your Docker host runs on a supported kernel level.

```
uname -a
```

* 3.13.0-79.123+
* 3.19.0-51.57+
* 4.2.0-30.35+

See "Latest Quick Workarounds" in [#18180](https://github.com/docker/docker/issues/18180)

