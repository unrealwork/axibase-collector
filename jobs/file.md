# FILE

File protocol is supported by the Axibase Collector. It is used to retrieve data stored in CSV or JSON formats. File Job Configuration Examples:

*   [Basic CSV Example](https://axibase.com/products/axibase-time-series-database/writing-data/collector/file/basic-file-example/ "Basic CSV File Example")
*   [JSON - HTTP Pool & Entity Group Example](https://axibase.com/products/axibase-time-series-database/writing-data/collector/file/entity-group-example/ "JSON - HTTP Pool & Entity Group Example")
*   [CSV - Entity Group Example](https://axibase.com/products/axibase-time-series-database/writing-data/collector/file/csv-entity-group-example/ "CSV - Entity Group Example")

Below are screenshots and descriptions of the File job and configuration settings:



| FIELD	          | DESCRIPTION |
|:---------------|:------------|
| Enabled | Determines if the job is active or disabled |
| Name | Name of the collector job |
| Cron Expression | Cron expression determining how frequently the collector job runs |
| ATSD | ATSD server that will ingest the data |


![File Job](http://axibase.com/wp-content/uploads/2015/01/file-job.png)

_____________________________________________________________

#### <code>${TIME}</code> placeholder

The File Job supports the `${TIME}` placeholder.<br>Time placeholder is used to determine the Start time and/or End time for data retrieval from target file. 

TIME placeholder format: `${TIME("end_time_syntax", "time_format")}` 

TIME placeholder example: `${TIME("previous_hour", "yyyy-MM-dd/HH")}` 

You can learn more about [End Time syntax here.](https://axibase.com/products/axibase-time-series-database/visualization/end-time/ "Chart Lab") <br>Time format can be specified using any combination of: `y`, `M`, `d`, `H`, `m`, `s` 

_NOTE: `Start Time`, `End Time`, and `Time Format` fields have been deprecated in Axibase Collector version 11164._


| FIELD	          | DESCRIPTION |
|:---------------|:------------|
| Parser Name | ATSD parser configuration name. For more information, see [Parser Configuration Guide](https://axibase.com/products/axibase-time-series-database/writing-data/csv/#parser "Parser Configuration"). |
| Parser Type | Downloaded file format: CSV or JSON. |
| HTTP Pool | Relative path to the file if HTTP Pool is selected or full URL in case HTTP Pool is set to NONE. |
| Path | Path to CSV or JSON target files located on remote or local file system from which they will be read. <br>Path to files on remote systems can be set using a relative path if HTTP Pool is selected or full URL in case HTTP Pool is set to NONE. <br>Path to files on the local file system should start with `file://` and contain the absolute path. <br>File path can include `${TIME}` placeholders: `file:///opt/app/data-${TIME("previous_day", "yyyy-MM-dd")}.csv` <br>File path supports collections (multiple files): `file:///opt/app/data-${ITEM}.csv` <br>File path can match multiple files, all of which would need to be uploaded. <br>The wildcard characters `?` and `*` can be used to represent a single or multiple wildcard characters. <br>See examples below this table. |
| Delete File on Upload | Source files will be deleted if ATSD returns 200 code (OK). Setting only applies to configurations where the Path points to files on the local file system (Path starts with `file://`).|
| Success Directory | If a file successfully uploads (is uploaded into ATSD and Parsed successfully), the file will be copied to this directory. <br>If the Success Directory is specified, but the directory does not exist, this directory will be created. <br>Success Directory field supports `${TIME}` placeholders like: `/opt/collector/file/errors/${TIME("now", "yyyy-MM-dd/HH:mm:ss")}/`. <br>To distinguish between files with identical names a time prefix will be added, for example: `20151130_121212_345_{original_file_name}.csv` <br>Success Directory is an independent setting from Delete on Upload. |
| Error Directory | If a file fails to upload (e.g. server not available OR parsing error), the file will be copied to this directory. <br>If the Error Directory is specified, but the directory doesn't exist, this directory will be created. <br>Error Directory field supports ${TIME} placeholders like: `/opt/collector/file/errors/${TIME("now", "yyyy-MM-dd/HH:mm:ss")}/`. | 
| Entity Group | List of entries from entity group created in Axibase Collector. Entries from Entity Group are placed instead of ${ENTITY} (if contained) placeholders in Path, Metric Prefix, Default Entity, Included Fields, Excluded Fields and Default Tags fields. The number of ingested files will correspond to the number of lines contained in Entity Group. |
| Encoding | Character encoding of target files. |
| Wait for Upload | Wait for ATSD server to finish processing of the uploaded file. |
| Rules | Process incoming data in [ATSD Rule Engine](https://axibase.com/products/axibase-time-series-database/rule-engine/ "Rule Engine"). | 
| Metric Prefix | Prefix added to metric names, used to identify and group the metrics. |
| Default Entity | Default entity under which the metrics and data will be stored in ATSD. |
| Default Tags | Assign predefined tags to all series. |
| Add Timestamp | When set to true, uses current time (time at the moment the data is sent to ATSD) as timestamp for the metrics. If set to false, then timestamp is taken from the target files, as set in the ATSD Parser Configuration. |
| Ignore Duplicates File | Ignore duplicate files. |
| Minimum Line Count | Minimum amount of lines contained in the target file, if fewer lines than indicated are contained then data is not sent into ATSD. |
| First Line | Characters or text that is contained in the first line, used to determine the first line of the target file. First Line field support ${TIME} placeholders, for example: `# Effective Data ${TIME("previous_day", "dd.MM.yyyy")}`. If text or characters are not found in the first line, then data is not sent to ATSD. |
| Validate Format | Validates the format of the CSV or JSON file. |
| Included Fields | List of JSON fields that are converted into CSV format and sent to ATSD. All other fields except Included will be ignored. The list can include both numeric and string fields, in which case string columns should be processed as series tags or property keys/tags by the server using CSV parser configuration. |
| Excluded Fields | List of JSON fields that are excluded from CSV converter. Excluded Fields are ignored if Included Fields are specified. Only numeric fields will be sent to ATSD after Excluded Fields filter is applied to JSON object. |

#### Ingesting Files from the Local File System

When ingesting files from the local file system you can combine the Error Directory and Delete File on Upload settings to implement a particular upload workflow. Files are first copied to a /tmp directory from which they are sent into ATSD, if the upload and parsing is successful, the file is deleted. If there is an upload or parsing error, then the file is moved into the specified Error Directory, where the admin can inspect the file or resolve the upload issue. This approach prevents data loss and creates an optimal workflow.

##### Example `Path` Settings to Files on the Local File System:

```javascript
file:///home/axibase/.npm/*/*/package/package.json
file:///home/axibase/.npm/*/*/packag?/package.json
file:///home/axibase/.npm/*/*/packag?/${ITEM}.json
file:///tmp/collector/errors/*.json
file:///tmp/collector/errors/${TIME("previous_day", "yyyy-MM-dd")}/downloaded1*
```
##### Included Fields and Excluded Fields:

*   If you need to send both numeric and string fields, enumerate them explicitly with Included Fields.
*   If you need to send all numeric fields except specified, enumerate exceptions with Excluded Fields.

```sh
{
    "items": [
        {
            "count": 873561,
            "name": "java"
        }
    ],
    "quota_max": 300,
    "quota_min": 248
}
```

##### `Included Fields` and `Excluded Fields` Interaction Logic Examples for the Above JSON:

| FIELD	          | DESCRIPTION | RESULT |
|:---------------|:------------|:--------|
| Empty | Empty | Send `quota_max` and `quota_min` fields from the root level to server since the root level contains the highest count of numeric fields (2). |
| Empty | Set to `quota_max`, `quota_min` | Send `count` field to server since the items level contains the highest count of numeric fields (1). |
| Set to `count` | Empty | Send `count` field to server since the items level contains the highest count of numeric fields (1). |
| Set to `count`, `name` | Empty | Send `count` numeric field and `name` string field to server since the items level contains the highest count of numeric fields (1). |

__________________________________________________________

![File Forwarding Configuration](https://axibase.com/wp-content/uploads/2015/01/file_job_configuration_example.png)