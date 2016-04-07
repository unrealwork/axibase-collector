# TCP Job

TCP (Transmission Control Protocol) is one of the major IP protocols which provides reliable data delivery between systems connected to a local area network or the internet.

#### TCP Job Configuration
Use the table below to create TCP job configuration.

| FIELD           | DESCRIPTION      
| :--------------- |:-------------|
| Configuration Name | Name of the configuration. |
| TCP Port           | Target machine TCP port. |
| Collection | Collection of target websites and servers. Collection list (hostnames, websites and IP addresses) are created on the Collections page (found on the main menu). |
| Metric Name       | Name of collected metric. |
| Request Timeout, seconds | The number of seconds the server will wait for the request. |
| Failure Retests | Number attempts to re-establish the connection. |
| Failure Retest Delay, seconds | Delay between attempts to re-establish connection. | 

#### Configuration Example
![TCP Configuration](http://axibase.com/wp-content/uploads/2015/01/tcp_collector.png)
