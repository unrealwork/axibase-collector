# TCP Job

TCP (Transmission Control Protocol) is one of the major IP protocols which provides reliable data delivery between systems connected to a local area network or the internet. TCP protocol is supported by the Axibase Collector.

| FIELD           | DESCRIPTION      
| :--------------- |:-------------|
| Enabled         | Determines if the job is active or disabled |
|Name             | Name of the collector job |
| Cron Expression | Cron expression determining how frequently the collector job runs |
|ATSD             | ATSD server that will ingest the data| .
![TCP Job](http://axibase.com/wp-content/uploads/2015/01/tcp-job.png)

| FIELD           | DESCRIPTION      
| :--------------- |:-------------|
| Configuration Name | Name of current configuration |
| TCP Port           | Target machine TCP port |
| Collection | Collection of target websites and servers. Collection list (hostnames, websites and IP addresses) are created on the Collections page (found on the main menu) |
| Metric Name       | Name of collected metric| .
![TCP Configuration](http://axibase.com/wp-content/uploads/2015/01/tcp_collector.png)
