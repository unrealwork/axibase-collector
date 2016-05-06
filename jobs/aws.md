# AWS Job

## Overview

AWS job allows you to collect data from [Amazon Web Services CloudWatch](https://aws.amazon.com/cloudwatch/) service and store CloudWatch metrics in ATSD for long-term retention and alerting.

Each job can include multiple configurations, each collecting data from one of CloudWatch [regional endpoints](http://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region). Configurations are executed sequentially within each job invocation.

## Configuration Settings

| **Field**        | **Description**    |
|:------------- |:--------------|
| Name   | Configuration name.    |
| HTTP Pool |  Pool of http connections used to execute CloudWatch API requests, points at one of CloudWatch [region endpoints](http://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region).    |
| Endpoint  |  An endpoint is a URL that is the entry point for CloudWatch service. Amazon Web Services offer a regional endpoints that are helpful to reduce data latency in applications.   |
| Username  |  Username to interact with Amazon Web Services. |
| Access key id  |   Access key. For more information, see [Getting Your Access Key ID and Secret Access Key](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html).   |
| Secret access key  | Secret access key. For more information, see [Getting Your Access Key ID and Secret Access Key](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html).       |
| Namespaces  | CloudWatch metric namespaces including Default and Custom Namespaces. To minimize the number of requests, select namespaces for AWS services that you're actually using. For more information, see [AWS Namespaces](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).   |
| Collect Status  |  Enable collection of service status metrics, for AWS services that expose such metrics.|
| Property Refresh Interval, minutes | Interval for refreshing properties about collected resources. |

## Installation

* Create a read-only [IAM account](aws-iam.md) for fetching CloudWatch statistics.
* Job Wizard



## AWS Configuration Example

![](https://axibase.com/wp-content/uploads/2016/03/aws_config.png)
