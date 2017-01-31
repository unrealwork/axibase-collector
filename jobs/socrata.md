# Socrata Job

## Overview

The Socrata job provides a way to convert JSON documents published in [Open Data](https://project-open-data.cio.gov/v1.1/schema/) schema into series, property, and message commands.

Unlike the generic [JSON job](/jobs/json.md), the Socrata job simplifies the processing using built-in rules and heuristics, eliminating the need to use JSONPath expressions to map JSON fields to command fields.

JSON documents published in the Open Data format contain both metadata as well as data itself.

* Metadata: https://data.cdc.gov/api/views/mr8w-325u
* Metadata and data: https://data.cdc.gov/api/views/mr8w-325u/rows.json

The most important part that the Socrata job relies on for processing is the `columns` section in the metadata which provides a list of column names, their datatypes and typical values.

```json
"columns" : [ {
    "id" : 272239777,
    "name" : "Year",
    "dataTypeName" : "text",
    "fieldName" : "year",
    "position" : 2,
    "renderTypeName" : "text",
    "tableColumnId" : 38857128,
    "width" : 148,
    ,,,
}]
```

## Job Settings

The [settings](/job-generic.md) implemented at the job level are the same as for other job types.
The ['Cron Schedule'](/scheduling.md) defines how often the dataset should be checked for new records and the ['Storage'](/atsd-server-connection.md) determines the target ATSD instance where the commands should be sent.

If the source dataset is static and will not be updated, it may not make sens to enable the job since the data will always be the same. To load data once for such a static dataset, save the job and click on 'Run' button/link to execute the job manually. If however the underlying dataset is regularly updated with new rows, enabling the job and specifying an appropriate schedule ensures that new data is continuously propagated into ATSD as well.

Each Socrata job can have multiple configurations each loading data for a different dataset. The configurations will be executed sequentially, when the job is launched, and will send the data into the same ATSD instance. It is recommended that datasets with similar update intervals are grouped under one job for efficient processing. For example, datasets that are updated weekly, can be grouped into one 'Weekly Socrata' job.

#### Job Configuration

The configuration instructs the collector how to convert fields in the JSON document into series, property, and message commands.

> To automatically map JSON columns to command fields, enter dataset URL into the Path field and click [Add].

| **Field** | **Description**  |
| :---- |:--- |
| Path | Full URL to the dataset including the protocol, host, port, path, and optional query string.<br>Example: 	https://data.cityofnewyork.us/api/views/f9bf-2cp4/rows.json or	https://data.cityofnewyork.us/api/views/f9bf-2cp4. The URL is typically available in dataset [catalogs](https://catalog.data.gov/dataset/deaths-in-122-u-s-cities-1962-2016-122-cities-mortality-reporting-system) as 'Unique Identifier' under the 'Additional Metadata' section.|

### Configuration Example

![Socrata Configuration Example](socrata_cdc_example.png)

* Dataset URL: https://data.cdc.gov/api/views/mr8w-325u
* Sample Command:

```ls
series e:mr8w-325u d:1962-01-06T00:00:00.000Z t:region=1 t:state=MA t:city=Boston m:cdc._54_64_years=87 m:cdc._1_year=10 m:cdc.all_deaths=262 m:cdc._25_44_years=11 m:cdc._65_years=146 m:cdc.pneumonia_and_influenza_deaths=11 m:cdc._1_24_years=8
```
