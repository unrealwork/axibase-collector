# Scheduling

## Scheduled Execution

Axibase Collector executes enabled jobs based on their schedule.

The number of concurrently executing jobs is set to 32 by default and is controlled with quartz.properties.

Jobs execute concurrently whereas configuration inside the same job are executed sequentially.

Instances of the same job cannot run at the same time. If the job is in STARTED status by the time it's time to execute it again, the new execution will not be triggered until the current job instance finishes its work.  

## Manual Execution

Jobs can be executed manually with `Run` action regardless of its schedule or status. 

Manual execution produces the same results as scheduled execution.

The manual mode is useful for running temporarily disabled jobs, for example when developing new jobs or troubleshooting existing jobs.

### Cron Expressions

A cron expression is a string that determines a schedule for executing a job.

Fields in a cron expression have the following order: 

- seconds
- minutes
- hours
- day-of-month
- month
- day-of-week
- year (optional)

For example, `0 0 8 * * ? *`, means execution at 08:00:00 every day.

Second, minute, and hour fields support **R** (random) symbol to randomize the exact execution time.

![Cron Expressions](http://axibase.com/wp-content/uploads/2016/03/cron_expressions.png)

* `day-of-week` keywords: SUN, MON, TUE, WED, THU, FRI, SAT or numbers from 0 to 7.
* Either '0' or '7' can stand for Sunday in `day-of-week` field.
* If `day-of-week` is specified, day-of-month should be set to `?`, e.g. `0 0 6 ? * MON *`.

Day of 

## Cron Expression Examples

**Expression** | **Description**
---|:---
`0 0/15 * * * ?` | Every 15 minutes.
`0/10 * * * * ?` | Every 10 seconds.
`0 0/1 * * * ?` | Every minute.
`0 0 0 * * ?` | Every day at 0:00.  
`R 0/5 * * * ?` | Every 5 minutes at random second.
`R R 1 * * ?` | Every day on 01 hour at random minute and second.
`0 5,35 * * * ?` | Every hour at 5th and 35th minute.
`0 0 6 ? * MON *` | Every Monday at 06:00.

## Execution State

Jobs can have the following executing states:

* STARTING
* STARTED
* STOPPED
* STOPPING
* COMPLETED
* ABANDONED
* FAILED
