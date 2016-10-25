# TCP Job

TCP (Transmission Control Protocol) is one of the major IP protocols which provides reliable data delivery between systems connected to a local area network or the Internet.

#### TCP Job Configuration
Use the table below to create a TCP job configuration.

| Field          | Description   | 
| :--------------- |:-------------|
| Configuration Name | Name of the configuration. |
| Default TCP Port           | Target machine TCP port. |
| Item List | Collection of the target websites and servers. Item lists (hostnames, websites, and IP addresses) are created on the Items Lists page (found on the main menu under Collections). |
| Metric Name       | Name of the collected metric. |
| Metric Prefix     | Metric prefix can be assigned to easily sort and differentiate metrics in ATSD. |
| Default Tags      | Assign predefined tags to all series. |
| Request Timeout, seconds | The number of seconds the server will wait for the request. |
| Failure Retests | Number of attempts to re-establish the connection. |
| Failure Retest Delay, seconds | Delay between attempts to re-establish the connection. | 

#### Configuration Example
![TCP Configuration](tcp-configuration.png)
