# Axibase Time Series Database Installation

## Installation on Docker host

Replace `myuser` and `mypassword` with valid credentials of the biult-in administrator user. 
Minimum password length is 6 characters.

```sh
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

Alternatively, you can launch the container without `ATSD_USER_NAME` and `ATSD_USER_PASSWORD` variables and configure the administrative account on initial login.

It may take up to 5 minutes to initialize the database.
