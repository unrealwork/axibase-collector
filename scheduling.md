# SCHEDULING
### Using Cron Expressions
A cron expression is a string that determines a schedule for executing a job.

Fields in a cron expression have the following order: seconds, minutes, hours, day-of-month, month, day-of-week, year.
For example, `0 0 12 * * ?`.

You can use the ‘R’ symbol in second/minute/hour field to randomize the value.

![Cron Expressions](http://axibase.com/wp-content/uploads/2016/03/cron_expressions.png)

_*Either ‘0’ or ‘7’ can stand for Sunday._

#### Examples

For example, if you want to run a command every 15 minutes, cron expression should be as follows: `0 0/15 * * * ?`

To run a command every 10 seconds, cron expression should be: `0/10 * * * * ?`

To run a command every minute:  `0 0/1 * * * ?`

To run a command every day at 0:00:  `0 0 0 * * ?`

To run a command every 5 minutes at random second: `R 0/5 * * * ?`

To run a command every day on 01 hour at random minute and second: `R R 1 * * ?`

To run a command every hour at 5th and 35th minute: `0 5,35 * * * ?`
