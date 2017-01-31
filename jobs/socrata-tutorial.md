# Socrata Job Tutorial

In this tutorial we will walk through setting up a Socrata job in Collector for a data.gov dataset on [New York City Social Media Usage](https://catalog.data.gov/dataset/nyc-social-media-usage-555a2).
The JSON file (1.1 MB) can be found [here](https://data.cityofnewyork.us/api/views/5b3a-rs48/rows.json?accessType=DOWNLOAD).

1. Login into Collector.

   ![Figure 1](images/Figure1.png)

2. Click on the 'Jobs' tab in Collector.

   ![Figure 2](images/Figure2.png)

3. Click on the `Add Job` button.

   ![Figure 3](images/Figure3.png)

4. To select the type of job you would like to add, you may follow either of the following steps.

   - Before completing the previous step, filter by your desired job type (Socrata) in the 'Jobs' tab. After pressing the `Add Job` button, the desired job type will have already been specified.
	
   ![Figure 4](images/Figure4.png)

   - Press the `Add Job` button. On the following page, select your specified job type.
	
   ![Figure 5](images/Figure5.png)

5. As shown in the image below, there are four fields to specify: `Enabled`, `Name`, `Cron Expression`, and `Storage`.

   ![Figure 6](images/Figure6.png)

   - `Enabled`: job status. You be set to enable the job, which will turn it on for data collection, by clicking the check box. To have the job disabled, leave it unchecked. 
	  Leave unchecked initially. 
   - `Name`: job name. Enter in a relevant name for your new Socrata job. Let's use the name `NYC-Social-Media-Usage`.
   - `Cron Expression`: job execution time period. Cron fields are specified in the following order: second, minute, hour, day-of-month, month, and day-of-week. You can randomize time of execution by putting `R` onto time placeholders. Click 
	  on field to see time periods in human readable formats, as shown in the image below. 
	  
   ![Figure 7](images/Figure7.png)

   - `Storage`: database for storing data collected by this job. 
	
6. After specifying each of these fields, hit the `Save` button.
7. Press the `Create Configuration` button.

   ![Figure 8](images/Figure8.png)

8. Copy the short URL (without `rows.json?accessType=DOWNLOAD` selected) from your JSON file and paste it into the `Path` line. You do not need to fill in the `Name` field, as 
   it will be automatically filled in from the previous page.
   
   ![Figure 9](images/Figure9.png)
   
9. Press `Add`.
10. Press `Test`.

    ![Figure 10](images/Figure10.png)

11. After pressing this button, you can see all of your series tags. 

    ![Figure 11](images/Figure11.png)
