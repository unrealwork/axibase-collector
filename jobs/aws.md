# AWS Job

## Overview

AWS job allows you to collect data from [Amazon Web Services CloudWatch](https://aws.amazon.com/cloudwatch/) service and store CloudWatch metrics in ATSD for long-term retention and alerting.

The AWS job includes multiple configurations to query metrics from different [regional endpoints](http://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region). The endpoints are queried sequentially within each job invocation.

## Supported Namespaces

AWS Namespace is a group of metrics exposed for a particular AWS service type.

Each configuration can be configured to collect metrics from multiple namespaces available in the region.

To minimize the number of API queries, choose to collect data only for AWS services that you're actually using. 

For more information, see [AWS Namespaces](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html).

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

The composite metric name is normalized by replacing slash and whitespace symbols with underscore.

For example, `AWS/Billing Estimated Charges` metric is stored as 5 metrics:

* aws_billing.estimatedcharges.minimum
* aws_billing.estimatedcharges.maximum
* aws_billing.estimatedcharges.sum
* aws_billing.estimatedcharges.average
* aws_billing.estimatedcharges.samplecount

The number of metrics within each namespace varies greatly, for AWS/EC2 the list consists of 15+ [metrics](#aws-ec2-metrics).

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
| Collect Status  |  Collect status check metrics such as <br>StatusCheckFailed, StatusCheckFailed_Instance, StatusCheckFailed_System |
| Property Refresh Interval, minutes | Interval for refreshing resource properties. |

## Configuration Steps

* Create a read-only [IAM account](aws-iam.md) for querying CloudWatch statistics.
* Open **Jobs:Add Job:Use Wizard** page.
* Enter IAM account credentials.
* Select AWS regions from which you want to collect data. <br>The wizard will create a separate AWS configuration for each region within the same job.
* Validate the credentials and save the job if there are no errors:

![AWS Wizard](aws-wizard-validate.png)

## Validation

* Open AWS job page and set schedule to `R 0/5 * * * ?` to execute it every 5 minutes with random seconds
* On the AWS Jobs list page, check that Items Read and Commands Sent is greater than 0
* Login into ATSD, open **Metrics** tab and review available metrics by typing `aws` into the Name Mask.
* Open Entities tab and locate one of AWS EC2 instances. Click on Portal links to access pre-defined AWS portals.

## Sample Dashboards

* [EC2](https://apps.axibase.com/chartlab/0aa34311)
* [EBS](https://apps.axibase.com/chartlab/e8977b4a)

## Configuration Example

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
