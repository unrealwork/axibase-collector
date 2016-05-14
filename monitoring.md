# Monitoring

Axibase Collector sends job status messages into ATSD Upon completion so that job execution can be monitored using ATSD Rule Engine.

Job status messagesccontain the following fields:

* Type: collector-job
* Severity: NORMAL if ok, CRITICAL if failure
* Entity: Axibase Collector hostname
* Source: job_name
* Tags: job_name, job_type, status, write, error_type
* Message: Completed in `N` ms. Items read: `N`. Commands sent: `N`. An error will be included in the message if an error was raised.

The File Job has unique Messages:

* Message: Completed in `N` ms. Files read: `N`. Files sent: `N`. Failed requests: `N` <br> COMPLETED_COUNT=N ERROR_COUNT=N FILE_COUNT=N <br> ROWS_PROCESSED=N An error description will be included in the message if an error was raised.

The File Job has unique `error_type` tag values:

| **Error Type** | **Description** |
|---|---|
`FILE_NOT_FOUND` | No target file present in the specified directory.
`FILE_EMPTY` | Target file was found but was completely empty (no annotation, header or data).
`NO_DATA` | Target file was found but did not contain any data (contained an annotation and header, but no timestamps and values).
`UPLOAD_ERROR` | ATSD was not available during the scheduled job execution.
`PARSE_ERROR` | File could not be parsed by ATSD, for example: the timestamp was in a different format.
`NETWORK_ERROR` | Collector could not establish a network connection.
`LINE_COUNT_ERROR` | Target file contained less lines than specified in the “Minimum Line Count” setting.
`FIRST_LINE_ERROR` | First line of the target file does not match the “First Line” setting.

![Collector Messages](http://axibase.com/wp-content/uploads/2015/11/collector_messages_atsd.png)
