# AWS Job
AWS (Amazon Web Services) is a collection of cloud computing services that together work as on-demand computing platform offered by Amazon.com, Inc. <br>
AWS job allows you to collect data from Amazon Web Services and store it in ATSD.
#### AWS Configuration
To configure an AWS job, click Create AWS configuration. <br>
Use the table below to set configuration parameters. 

| Field        | Description    |
|:------------- |:--------------|
| Name   | Configuration name.    |
| HTTP Pool |  Data source.    |
| Endpoint  |  An endpoint is a URL that is the entry point for a web service. Amazon Web Services offer a regional endpoints that are helpful to reduce data latency in applications.   |
| Username  |  Username to interact with Amazon Web Services. |
| Access key id  |   Access key to interact with  Amazon SQS programmatically. For more information, see [Getting Your Access Key ID and Secret Access Key](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html).   |
| Secret access key  | Secret access key to interact with  Amazon SQS programmatically. For more information, see [Getting Your Access Key ID and Secret Access Key](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html).       |
| Namespaces  | Select the necesary namespace check boxes. In AWS, namespaces are containers for metrics. For more information, see [AWS Namespaces](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).   |
| Collect Status  |  Defines whether you want to collect information about status checks.|
| Property Refresh Interval, minutes | Defines how often you want to refresh collected data. |

#### AWS Configuration Example
The image below shows an AWS configuration example.

![](https://axibase.com/wp-content/uploads/2016/03/aws_config.png)
