# AWS Job

## Overview

AWS job allows you to collect data from [Amazon Web Services CloudWatch](https://aws.amazon.com/cloudwatch/) service and store CloudWatch metrics in ATSD for long-term retention and alerting.

In addition, AWS job can be configured to collect availability metrics, where applicable. 

The AWS job can include multiple configurations to query metrics from different [regional endpoints](http://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region). The endpoints are queried sequentially within each job invocation.

## Supported Namespaces

AWS Namespace is a group of metrics exposed by a particular resource type.

Each configuration can be configured to collect metrics from multiple AWS metric namespaces available in the region.

To minimize the number of API queries, choose to collect data only for AWS services that you're actually using. 

For more information, see [AWS Namespaces](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html)

* AWS/AutoScaling 
* AWS/Billing 
* AWS/CloudFront
* AWS/CloudSearch 
* AWS/Events 
* AWS/Logs
* AWS/DynamoDB 
* AWS/ECS 
* AWS/ElastiCache
* AWS/EBS 
* AWS/EC2 
* AWS/EC2Spot
* AWS/ELB 
* AWS/ElasticMapReduce 
* AWS/ES
* AWS/Kinesis 
* AWS/Firehose 
* AWS/Lambda
* AWS/ML 
* AWS/OpsWorks 
* AWS/Redshift
* AWS/RDS 
* AWS/Route53 
* AWS/SNS
* AWS/SQS 
* AWS/S3 
* AWS/SWF
* AWS/StorageGateway 
* AWS/WAF 
* AWS/WorkSpaces
* CustomMetrics

The underlying metrics in each namespace are stored in ATSD using the following naming convention:

```css
{namespace}.{metric-name}.{statistic-name}
```

The name is normalized by replacing forward slash and whitespace symbols with underscore.

For example, `AWS/Billing Estimated Charges` metric is stored as 4 metrics:

* aws_billing.estimatedcharges.maximum
* aws_billing.estimatedcharges.minimum
* aws_billing.estimatedcharges.samplecount
* aws_billing.estimatedcharges.sum

On the other hand, the list of metrics for AWS/EC2 namespace consists of 15+ [metrics](#aws-ec2-metrics).

## Configuration Settings

| **Field** | **Description** |
|:---|:---|
| Name | Configuration name. |
| HTTP Pool | Pool of http(s) connections to execute CloudWatch API requests against the specified CloudWatch endpoint. |
| Endpoint  | [CloudWatch Endpoint](http://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region) URL.   |
| Username  |  Username to query AWS Cloudwatch service. |
| Access key id  | Access key. See [Getting Your Access Key ID and Secret Access Key](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html).   |
| Secret access key  | Secret access key |
| Namespaces  | CloudWatch metric namespaces enabled for collection.   |
| Collect Status  |  Collect service status metrics for resources that expose such metrics, such as EC2 instances.|
| Property Refresh Interval, minutes | Interval for refreshing resource properties. |

## Installation

* Create a read-only [IAM account](aws-iam.md) for querying CloudWatch statistics.
* Job Wizard

## AWS Configuration Example

![](https://axibase.com/wp-content/uploads/2016/03/aws_config.png)

## AWS/EC2 metrics

* aws_ec2.cpucreditbalance
* aws_ec2.cpucreditusage
* aws_ec2.cpuutilization
* aws_ec2.diskreadbytes
* aws_ec2.diskreadops
* aws_ec2.diskwritebytes
* aws_ec2.diskwriteops
* aws_ec2.networkin
* aws_ec2.networkout
* aws_ec2.networkpacketsin
* aws_ec2.networkpacketsout
* aws_ec2.statuscheckfailed
* aws_ec2.statuscheckfailed_instance
* aws_ec2.statuscheckfailed_system
