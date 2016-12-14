# Job Autostart

## Overview

To automatically start a job, use Collector parameters:

**Name** | **Description**
----- | -----
`-job-enable` | Enable specified job by name. Support job names separated by comma.
`-job-path` | Import job from specified file or HTTP(s) content. Support files separated by comma. If `job-enable` parameter is not defined, ALL jobs in the file will be started.

## Autostart Pre-configured Job

To automatically start one of the [pre-configured jobs](pre-configured-jobs.md), use the '-job-enable' parameter:

```sh
./axibase-collector/bin/start-collector.sh -job-enable=job_name
```
 
For example, for job with name 'json-socrata':

```sh
./axibase-collector/bin/start-collector.sh -job-enable=json-socrata
```

## Autostart Job from File

To automatically start job from file, use the '-job-path' and '-job-enable' parameters:

```sh
./axibase-collector/bin/start-collector.sh -job-path=path_to_file -job-enable=job_name
```
 
For example, for job with name 'json-socrata' from the file '/tmp/job.xml':

```sh
./axibase-collector/bin/start-collector.sh -job-path=/tmp/job.xml -job-enable=json-socrata
```

For example, for remote job file:

```sh
./axibase-collector/bin/start-collector.sh -job-path=https://raw.githubusercontent.com/axibase/axibase-collector-docs/master/job-templates/icmp-ping.xml
```

## Autostart Multiple Jobs

```sh
./axibase-collector/bin/start-collector.sh -job-path=/tmp/jobs.xml -job-enable=json-job,tcp-job
```
