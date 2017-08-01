# Docker Job

## Overview

The Docker Job collects container statistics, states, and events from Docker daemons via the [Docker Engine Remote API](https://docs.docker.com/engine/reference/api/docker_remote_api/).

Information is collected for the following object types:

* Host
* Image
* Container
* Volume
* Network

## Job Settings

**Name** | **Description**
----- | -----
`API Version` | API version used when querying the Docker Engine API. Defaults to 'latest'. <br>Can be set to a specific version to ensure compatibility.
`Lifecycle Event Monitoring` | Enables continuous monitoring of container lifecycle events instead of scheduled polling.
`Property Interval`, minutes | Interval for refreshing detailed image and container properties.
`Statistics Interval`, seconds | Interval at which utilization statistics from running containers are collected.
`Process Interval`, minutes | Interval at which top process list is collected from running docker containers.
`Excluded Processes` | Lists processes, separated by comma, to exclude from collection. Expressions support the wildcard option (*).
`Environment Tags` | List of ENV variables stored as entity tags.

## Prerequisites

* [Docker Engine v1.7+](https://docs.docker.com/engine/installation/)
* [Axibase Time Series Database](https://github.com/axibase/atsd/blob/master/installation/docker.md) container as a centralized metrics store and rule engine.

## Local Installation

In local collection mode, Axibase Collector containers run on each Docker host and gather statistics locally from the Docker engine API exposed at the [/var/run/docker.sock](https://docs.docker.com/engine/reference/api/docker_remote_api/) Unix socket.

![Local Collection](docker-local.png)

- Create a [collector account](https://github.com/axibase/atsd/blob/master/administration/collector-rw-account.md) in ATSD.
- Replace `atsd_host` and `atsd_https_port` with the ATSD hostname/IP address and https port (default 8443).
- Replace `collector-rw` and `collector-password` with valid credentials in the script below.
- Start Axibase Collector container:

```properties
docker run \
   --detach \
   --publish-all \
   --restart=always \
   --name=axibase-collector \
   --volume /var/run/docker.sock:/var/run/docker.sock \
   --env=DOCKER_HOSTNAME=`hostname -f` \
  axibase/collector \
   -atsd-url=https://collector-rw:collector-password@atsd_host:atsd_https_port \
   -job-enable=docker-socket
```

If the user name or password contains `$`, `&`, `#`, or `!` character, escape it with backslash `\`.

The password must contain at least **six** (6) characters and is subject to the following [requirements](https://github.com/axibase/atsd/blob/master/administration/user-authentication.md#password-requirements).

For example, for user `adm-dev` with password `my$pwd` sending data to ATSD at https://10.102.0.6:8443 specify:

```properties
docker run \
   --detach \
   --publish-all \
   --restart=always \
   --name=axibase-collector \
   --volume /var/run/docker.sock:/var/run/docker.sock \
   --env=DOCKER_HOSTNAME=`hostname -f` \
  axibase/collector \
   -atsd-url=https://adm-dev:my\$pwd@10.102.0.6:8443 \
   -job-enable=docker-socket
```

It may take up to 5 minute to initialize the Collector's database from the initial start.

The Docker job should start executing immediately.

> On hosts with SELinux enabled, the container will run into a `permission denied` error when trying to read data from  `/var/run/docker.sock`. Switch to the Remote Collection option. Other alternatives: https://github.com/dpw/selinux-dockersock

**Launch Parameters**

**Name** | **Required** | **Description**
----- | ----- | -----
`--detach` | Yes | Run container in background and print container id.
`--name` | No | Assign a host-unique name to the container.
`--restart` | No | Auto-restart policy. _Not supported in all Docker Engine versions._
`--publish-all` | No | Publish all exposed ports to random ports.
`--env` | No | Set environment variables.

## Remote Collection

In remote collection mode Axibase Collector fetches data from multiple remote Docker hosts using https protocol.  

![Local Collection](docker-remote.png)

### Enable Remote API Access on Docker Hosts

* Log in to the Docker host via SSH and generate [client and server certificates](docker-certificates.md).

* Configure the Docker daemon for secure access by default.

* Edit the `/etc/default/docker` file for Ubuntu or create a `/etc/sysconfig/docker` file for CentOS:

   ```properties
   # Set path to the folder containing {ca,server-cert,server-key}.pem files
   DOCKER_CERT_PATH=/home/docker/certs
   export DOCKER_CERT_PATH

   # Add TCP socket on port 2376
   DOCKER_OPTS="--tlsverify --tlscacert=$DOCKER_CERT_PATH/ca.pem --tlscert=$DOCKER_CERT_PATH/server-cert.pem --tlskey=$DOCKER_CERT_PATH/server-key.pem -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2376"
   ```

* For CentOS, additionally create the file `/etc/systemd/system/docker.service.d/docker.conf`:

   ```properties
   [Service]
   EnvironmentFile=-/etc/sysconfig/docker
   ExecStart=
   ExecStart=/usr/bin/docker daemon $DOCKER_OPTS
   ```

* Restart Docker daemon:

  ```sh
  sudo service docker restart
  ```

* Ensure that the Docker status is Active and there are no warnings:

  ```sh
  sudo service docker status
  ```

* Verify connectivity:

  ```properties
   curl https://127.0.0.1:2376/info \
  --cert /home/ubuntu/certs/cert.pem \
  --key /home/ubuntu/certs/key.pem \
  --cacert /home/ubuntu/certs/ca.pem
  ```
* Copy the `{ca,cert,key}.pem` files to your machine.

### Launch Axibase Collector Container

* Create a [collector account](https://github.com/axibase/atsd/blob/master/administration/collector-rw-account.md) in ATSD.

* Start Axibase Collector container, replacing `collector-rw` and `collector-password` with valid credentials:

```properties
docker run \
   --detach \
   --publish-all \
   --name=axibase-collector \
  axibase/collector \
   -atsd-url=https://collector-rw:collector-password@atsd_host:atsd_https_port
```

If the user name or password contains a `$`, `&`, `#`, or `!` character, escape it with backslash `\`.

The password must contain at least **6** characters and is subject to the following [requirements](https://github.com/axibase/atsd/blob/master/administration/user-authentication.md#password-requirements).

* Find the https port assigned to the `axibase-collector` container.

```sh
docker ps -a | grep axibase-collector
```

* Log in to the Axibase Collector web interface at `https://hostname:port`.
* Open the **Jobs > Docker > Add Job** page and enter the job name. Click **Enabled** to enable the job. Click Save.
* Click the [Use Wizard] button, specify the Docker Engine hostname, API port (2376), and attach `{cert,key,ca}.pem` files.
* Click Validate and then Save if the test is successful.

## Validation

Log in to ATSD and verify that connected Docker hosts are displayed on the 'Entities: Docker Hosts' page.

If the Docker host is missing in ATSD, open the 'Jobs' page in Collector, check the **Result** column, and review the **Execution Details** page for any errors.

## Container Launch Troubleshooting

```sh
docker exec -it axibase-collector tail -f /opt/axibase-collector/logs/axibase-collector.log
```

The following message indicates that the initial configuration is finished:

> FrameworkServlet 'dispatcher': initialization completed.

## UI

Verify the https port that is assigned to the collector and open it in your browser: https://container-ip:port

```sh
docker ps | grep axibase-collector
```

Locate the **docker-socket** job on the 'Jobs' list and verify that it is enabled and that the `Items Read` column is not 0.

## Known Issues

If Axibase Collector fails to start, verify that your Docker host runs on a supported kernel level.

```sh
uname -a
```

* 3.13.0-79.123+
* 3.19.0-51.57+
* 4.2.0-30.35+

See "Workarounds" in [#18180](https://github.com/docker/docker/issues/18180#issuecomment-193708192)

## Testing and Evaluating

You can launch both the **atsd** and **axibase-collector** containers in a [test environment](docker-compose.md) using  `docker-compose`.
