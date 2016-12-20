# Job Autostart

## Overview

To automatically start a job, use the following Collector parameters:

**Name** | **Description**
----- | -----
`-job-enable` | Enable specified job by name. Support job names separated by commas.
`-job-path` | Import a job from a specified file or HTTP(s) content. Supports comma seperated files. If the `job-enable` parameter is not defined, **ALL** jobs in the file will be started.
`-job-execute` | Immediately run specified job by name. Support job names separated by commas.

## Autostart Pre-configured Job

To automatically start one of the [pre-configured jobs](pre-configured-jobs.md), use the `-job-enable` parameter:

```sh
./axibase-collector/bin/start-collector.sh -job-enable=job_name
```
 
For example, for a job with the name 'json-socrata':

```sh
./axibase-collector/bin/start-collector.sh -job-enable=json-socrata
```

## Autostart Job from File

To automatically start a job from file, use the `-job-path` and `-job-enable` parameters:

```sh
./axibase-collector/bin/start-collector.sh -job-path=path_to_file -job-enable=job_name
```
 
For example, for a job with the name 'json-socrata' from the file `/tmp/job.xml`:

```sh
./axibase-collector/bin/start-collector.sh -job-path=/tmp/job.xml -job-enable=json-socrata
```

For example, for a remote job file:

```sh
./axibase-collector/bin/start-collector.sh -job-path=https://raw.githubusercontent.com/axibase/axibase-collector-docs/master/job-templates/icmp-ping.xml
```

## Autostart Multiple Jobs

```sh
./axibase-collector/bin/start-collector.sh -job-path=/tmp/jobs.xml -job-enable=json-job,tcp-job
```

## Execute Job Immediately

To execute a job immediately, use the `-job-execute` parameter:

```sh
./axibase-collector/bin/start-collector.sh -job-execute=job_name
```

For example, for a job with the name 'json-socrata':

```sh
./axibase-collector/bin/start-collector.sh -job-execute=json-socrata
```
