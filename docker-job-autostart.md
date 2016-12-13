# Job Autostart on Docker

## Overview

To automatically start a job(s) on Docker, use Collector parameters:

**Name** | **Description**
----- | -----
`-job-enable` | Enable specified job by name. Support job names separated by comma.
`-job-path` | Import job from specified file. Support files separated by comma.

## Autostart Pre-configured Job

To automatically start one of the [pre-configured jobs](pre-configured-jobs.md), use the '-job-enable' parameter with [pre-configured ATSD](installation-on-docker.md#start-container):

```properties
docker run \
 --detach \
 --publish-all \
 --restart=always \
 --name=axibase-collector \
 axibase/collector:latest \
  -atsd-url=https://collector-user:collector-password@atsd_host:atsd_https_port \
  -job-enable=job_name
```
 
For example, for job with name 'json-socrata':

```properties
docker run \
 --detach \
 --publish-all \
 --restart=always \
 --name=axibase-collector \
 axibase/collector:latest \
  -atsd-url=https://collector-user:collector-password@atsd_host:atsd_https_port \
  -job-enable=json-socrata
```

## Autostart Job from File

To automatically start job from file, use the '-job-path' and '-job-enable' parameters:

```properties
docker run \
 --detach \
 --publish-all \
 --restart=always \
 --name=axibase-collector \
 axibase/collector:latest \
  -atsd-url=https://collector-user:collector-password@atsd_host:atsd_https_port \
  -job-path=path_to_file \
  -job-enable=job_name
```
 
For example, for job with name 'json-socrata' from the file '/tmp/job.xml':

```properties
docker run \
 --detach \
 --publish-all \
 --restart=always \
 --name=axibase-collector \
 axibase/collector:latest \
  -atsd-url=https://collector-user:collector-password@atsd_host:atsd_https_port \
  -job-path=/tmp/job.xml \
  -job-enable=json-socrata
```

## Autostart Multiple Jobs

```properties
docker run \
 --detach \
 --publish-all \
 --restart=always \
 --name=axibase-collector \
 axibase/collector:latest \
  -atsd-url=https://collector-user:collector-password@atsd_host:atsd_https_port \
  -job-enable=docker-socket,docker-tcp
```
