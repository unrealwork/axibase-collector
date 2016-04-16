# Axibase Time Series Database Installation on Docker host

## Start `axibase/atsd` Container

```properties
docker run \
  -dit \
  -p 8088:8088 \
  -p 8443:8443 \
  -p 8081:8081 \
  -p 8082:8082/udp \
  -e ATSD_USER_NAME=myuser \
  -e ATSD_USER_PASSWORD=mypassword \
  -h atsd \
  --name=atsd \
  --restart=always \
  axibase/atsd:latest \
  tail -f /opt/atsd/atsd/logs/start.log
```

Replace `myuser` and `mypassword` with valid credentials of the built-in administrator user. 
Minimum password length is 6 characters.

It may take up to 5 minutes to initialize the database.

## Administrator Account

As an alternative to specifying administrator credentials as part of `docker run` command, you can launch the container without `ATSD_USER` variables and configure the built-in administrative account on initial login.

We recommend creating a separate [collector](collector-aacount.md) account for integration tasks.

## Known Issues

If the container fails to start, verify that your Docker host runs on a supported kernel level.

```
uname -a
```

* 3.13.0-79.123+
* 3.19.0-51.57+
* 4.2.0-30.35+

See "Latest Quick Workarounds" in [#18180](https://github.com/docker/docker/issues/18180)

