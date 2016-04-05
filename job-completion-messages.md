# COLLECTOR JOB COMPLETION MESSAGES
Upon completion, Axibase Collector Job status messages are sent to ATSD so that job execution can be monitored using Rule Engine.

Message sent by Axibase Collector contain the following fields:

* Type: collector-job
* Severity: NORMAL if ok, CRITICAL if failure
* Entity: Axibase Collector hostname
* Source: job_name
* Tags: job_name, job_type, status, write, error_type
* Message: Completed in `N` ms. Items read: `N`. Commands sent: `N`. An error will be included in the message if an error was raised.

The File Job has unique Messages:

* Message: Completed in `N` ms. Files read: `N`. Files sent: `N`. Failed requests: `N` <br> COMPLETED_COUNT=N ERROR_COUNT=N FILE_COUNT=N <br> ROWS_PROCESSED=N An error description will be included in the message if an error was raised.

The File Job has unique `error_type` tag values:

`FILE_NOT_FOUND` – there was no target file present in the specified directory. <br>
`FILE_EMPTY` – the target file was found but was completely empty (no annotation, header or data). <br>
`NO_DATA` – the target file was found but did not contain any data (contained an annotation and header, but no timestamps and values). <br>
`UPLOAD_ERROR` – ATSD was not available during the scheduled job execution. <br>
`PARSE_ERROR` – the file could not be parsed by ATSD, for example: the timestamp was in a different format. <br>
`NETWORK_ERROR` – Axibase Collector could not establish a network connection. <br>
`LINE_COUNT_ERROR` – the target file contained less lines than specified in the “Minimum Line Count” setting. <br>
`FIRST_LINE_ERROR` – the first line of the target file does not match the “First Line” setting. <br>

![Collector Messages](http://axibase.com/wp-content/uploads/2015/11/collector_messages_atsd.png)
