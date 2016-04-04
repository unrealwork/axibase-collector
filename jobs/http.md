# HTTP

HTTP (Hypertext Transfer Protocol) is the foundation of all data communication and exchange for the whole world wide web.

HTTP protocol is supported by the Axibase Collector.

Below are screenshots of the HTTP job and configuration settings:

![HTTP Job](http://axibase.com/wp-content/uploads/2015/01/http-job.png)

___________________________________________________

### <code>http.status</code> metric values based on http response codes:


| Metric Value | Response Code |
|:------------- |:-------------|
| 0 | no error, HTTP status = 200, no match configured or response text matched |
| 1 | ConnectException |
| 2 | NoRouteToHostException |
| 3 | UnknownHostException |
| 4 | SocketTimeoutException |
| 5 | Other exceptions without HTTP response status |
| 200 | HTTP response status = 200 but response text failed to match |
| xxx | HTTP response status, for example 500 (Server Error) |

____________________________________________

![HTTP Configuration](http://axibase.com/wp-content/uploads/2015/01/http_job_collector.png)
