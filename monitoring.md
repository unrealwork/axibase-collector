# Monitoring

Axibase Collector sends job status messages into ATSD upon completion so that job execution can be monitored using the built-in  Rule Engine.

Job status messages contain the following fields:

* Type: collector-job
* Severity: NORMAL if ok, CRITICAL if failure
* Entity: Axibase Collector hostname
* Source: job_name
* Tags: job_name, job_type, status, write, error_type
* Message: Completed in `N` ms. Items read: `N`. Commands sent: `N`. An error will be included in the message if an error was raised.

The File Job has unique Messages:

* Message: Completed in `N` ms. Files read: `N`. Files sent: `N`. Failed requests: `N` <br> COMPLETED_COUNT=N ERROR_COUNT=N FILE_COUNT=N <br> ROWS_PROCESSED=N An error description will be included in the message if an error was raised.

The File Job has unique `error_type` tag values included in [job completion](jobs/file.md#job-completion-messages) messages.


![Collector Messages](http://axibase.com/wp-content/uploads/2015/11/collector_messages_atsd.png)
