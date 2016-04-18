# ATSD Installation on Docker host

## Start `axibase/atsd` Container

```properties
docker run \
  -dit \
  -p 8088:8088 \
  -p 8443:8443 \
  -p 8081:8081 \
  -p 8082:8082/udp \
  -e ATSD_USER_NAME=${collector-user} \
  -e ATSD_USER_PASSWORD=${collector-password} \
  -h atsd \
  --name=atsd \
  --restart=always \
  axibase/atsd:latest \
  tail -f /opt/atsd/atsd/logs/start.log
```

Replace `${collector-user}` and `${collector-password}` with valid credentials for the built-in [collector user](collector-account.md) with data write permissions. 
Minimum password length is 6 characters.

It may take up to 5 minutes to initialize the database.

## Exposed Ports

* 8088 – http
* 8443 – https
* 8081 – [TCP network commands](https://axibase.com/atsd/api/#network-commands)
* 8082 – [UDP network commands](https://axibase.com/atsd/api/#network-commands)

## Built-in User Accounts

As an alternative to specifying collector user credentials as part of `docker run` command, you can launch the container without `ATSD_USER_{NAME, PASSWORD}` variables and configure the built-in accounts on initial login.

We recommend using a separate [collector](collector-account.md) user account for integration tasks.

## Known Issues

If the container fails to start, verify that your Docker host runs on a supported kernel level.

```
uname -a
```

* 3.13.0-79.123+
* 3.19.0-51.57+
* 4.2.0-30.35+

See "Latest Quick Workarounds" in [#18180](https://github.com/docker/docker/issues/18180)

