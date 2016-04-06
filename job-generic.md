# Axibase Collector Jobs
Axibase Collector jobs gather statistics, properties, events, and files from external data sources and upload them into Axibase Time Series Database.

The solution supports commonly used data exchange protocols including JDBC, SNMP, JMX, JSON, CSV, ICMP, TCP, HTTP, OVPM, Files as well as AWS and Docker APIs.

Axibase Collector allows you to customize jobs. You can:

* Specify job type
* Specify schedule for running the job
* Choose a target ATDS where Collector should upload data to
* Create job configuration

Each Axibase Collector job has a set of properties that are common for all jobs. These properties are:

| FIELD | DESCRIPTION |
|:------------- |:-------------|
| Enabled       |The check box determines if the job is enabled or disabled. By default, new jobs are disabled. <br> To enable a job, select the check box. |
| Name     | Collector job name. |
| Cron Expression | Cron expression determining how frequently the collector job runs. For more information on crone expressions, see [Scheduling](https://github.com/atsd-collector-docs/scheduling.md).
| ATSD | Target ATSD server. If you have recently added a server, click the Refresh icon to update the list. |

![](https://axibase.com/wp-content/uploads/2015/08/job_example.png)

You can create the exact copy of the job. To do so, click Clone. <br>
The copied job will have the same name as the original job but with the '-cloned' postfix. By default, cloned jobs are disabled. You can change the necessary settings and enable the job by selecting the Enabled check box. 

Click Run to manually start the job. 
To stop the job, click Stop. 

To permanently remove the job, click Delete. 

To discard all unsaved changes, click Cancel. 


**Note** that apart from common settings, some jobs have specific parameters you can configure. 
