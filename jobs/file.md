# File Job

Use the job to retrieve data stored in CSV or JSON formats.<br> To learn about file job configuration examples, follow the links:

*   [Basic CSV Example](https://axibase.com/products/axibase-time-series-database/writing-data/collector/file/basic-file-example/ "Basic CSV File Example")
*   [JSON - HTTP Pool & Entity Group Example](https://axibase.com/products/axibase-time-series-database/writing-data/collector/file/entity-group-example/ "JSON - HTTP Pool & Entity Group Example")
*   [CSV - Entity Group Example](https://axibase.com/products/axibase-time-series-database/writing-data/collector/file/csv-entity-group-example/ "CSV - Entity Group Example")

### File Job Configuration
Use the table below to perform File job configuration.

| Field	          | Description |
|:---------------|:------------|
| Parser Name | Configuration name. For more information, see [Parser Configuration Guide](https://axibase.com/products/axibase-time-series-database/writing-data/csv/#parser "Parser Configuration"). |
| Parser Type | Downloaded file format: CSV, JSON or XML. |
| HTTP Pool | Relative path to the file if HTTP Pool is selected or full URL in case HTTP Pool is set to NONE. |
| Path | Path to CSV or JSON target files located on remote or local file system from which they will be read. <br> Path to files on remote systems can be set using a relative path if HTTP Pool is selected or full URL in case HTTP Pool is set to NONE. <br>Path to files on the local file system should start with `file://` and contain the absolute path. <br> File path can include `${TIME}` placeholders: `file:///opt/app/data-${TIME("previous_day", "yyyy-MM-dd")}.csv` <br> File path supports collections (multiple files): `file:///opt/app/data-${ITEM}.csv` <br> File path can match multiple files, all of which would need to be uploaded. <br> The wildcard characters `?` and `*` can be used to represent a single or multiple wildcard characters. <br>See examples below this table. |
| Delete File on Upload | Source files will be deleted if ATSD returns 200 code (OK). This setting only applies to configurations where the Path points to files on the local file system (Path starts with `file://`).|
| Success Directory | If a file is uploaded successfully (uploaded into ATSD and Parsed successfully), it will be copied to this directory. <br>If the Success Directory is specified but does not exist, it will be created. <br> Success Directory field supports `${TIME}` placeholders like: `/opt/collector/file/errors/${TIME("now", "yyyy-MM-dd/HH:mm:ss")}/`. <br>To distinguish between files with identical names a time prefix will be added, for example: `20151130_121212_345_{original_file_name}.csv` <br>Success Directory is an independent setting from Delete on Upload. |
| Error Directory | If a file cannot be uploaded (e.g. server not available OR there is a parsing error), the file will be copied to this directory. <br> If the Error Directory is specified but does not exist, it will be created. <br>Error Directory field supports ${TIME} placeholders. For example: `/opt/collector/file/errors/${TIME("now", "yyyy-MM-dd/HH:mm:ss")}/`. | 
| Collection | Name of the collection you want to use.  |
| Time Zone | Time zone in which the data is collected.  |
| Encoding | Character encoding of target files. |
| Wait for Upload | Wait for ATSD server to finish processing of the uploaded file. |
| Rules | Process incoming data in [ATSD Rule Engine](https://axibase.com/products/axibase-time-series-database/rule-engine/ "Rule Engine"). | 
| Metric Prefix | Prefix added to metric names. It is normally used to identify and group the metrics. |
| Default Entity | Default entity under which the metrics and data will be stored in ATSD. |
| Default Tags | Assign predefined tags to all series. |
| Add Timestamp | When set to true, uses current time (time at the moment the data is sent to ATSD) as timestamp for the metrics. If set to false, then timestamp is taken from the target files, as set in the ATSD Parser Configuration. |
| Ignore Unchaged File | Do not copy files if they have not changed since the last upload. |
| Minimum Line Count | Minimum amount of lines in the target file. If the target file contains fewer lines than indicated, data will not be sent into ATSD. |
| First Line | Characters or text in the first line. It is used to identify the first line of the target file. First Line field support ${TIME} placeholders, for example: `# Effective Data ${TIME("previous_day", "dd.MM.yyyy")}`. If text or characters are not found in the first line, the data will not be sent to ATSD. |
| Validate Format | Validates the format of the CSV or JSON file. |
| Root Objects | Specify expressions in the JsonPath format to define a root element. Property/Series will be formed basing on elements from these expressions. |
| Included Fields | List of JSON fields that are converted into CSV format and sent to ATSD. All other fields except Included will be ignored. The list can include both numeric and string fields, in which case string columns should be processed as series tags or property keys/tags by the server using CSV parser configuration. |
| Excluded Fields | List of JSON fields that are excluded from CSV converter. Excluded Fields are ignored if Included Fields are specified. Only numeric fields will be sent to ATSD after Excluded Fields filter is applied to JSON object. |
| Enable Web Driver | Select the check box to enable Web Driver.  |
| Driver Script | Selenium script.  |
| Driver Timeout, seconds |  Script timeout in seconds. |
| Driver File Encoding | Encoding of the file that is requested with the script.  |

#### Ingesting Files from the Local File System

When ingesting files from the local file system you can combine the Error Directory and Delete File on Upload settings to implement a particular upload workflow. Files are first copied to a /tmp directory from which they are sent into ATSD, if the upload and parsing is successful, the file is deleted. If there is an upload or parsing error, then the file is moved into the specified Error Directory, where the admin can inspect the file or resolve the upload issue. This approach prevents data loss and creates an efficient workflow.


#### <code>${TIME}</code> placeholder

The File job supports the `${TIME}` placeholder.<br>Time placeholder is used to determine the Start time and/or End time for data retrieval from target file. <br> You can use the placeholder in the Path field. 

TIME placeholder format: `${TIME("end_time_syntax", "time_format")}` 

TIME placeholder example: `${TIME("previous_hour", "yyyy-MM-dd/HH")}` 

Time format can be specified using any combination of: `y`, `M`, `d`, `H`, `m`, `s` <br>
You can learn more about [End Time syntax here.](https://axibase.com/products/axibase-time-series-database/visualization/end-time/ "Chart Lab")

_NOTE: `Start Time`, `End Time`, and `Time Format` fields have been deprecated in Axibase Collector version 11164._




##### Example `Path` Settings to Files on the Local File System:

```javascript
file:///home/axibase/.npm/*/*/package/package.json
file:///home/axibase/.npm/*/*/packag?/package.json
file:///home/axibase/.npm/*/*/packag?/${ITEM}.json
file:///tmp/collector/errors/*.json
file:///tmp/collector/errors/${TIME("previous_day", "yyyy-MM-dd")}/downloaded1*
```

##### Example `Path` Settings to Files retrieving by FTP, SFTP or SCP:

*   You can specify either login and password or private key location to authenticate on SSH server.
*   Wildcards are allowed in filenames only

```javascript
ftp://axibase:password@remotehost:21/opt/collector/backup/*.xml
sftp://axibase:password@remotehost:22/opt/collector/backup/pools_????-??-??.xml
sftp://axibase:file:///home/example/.ssh/id_rsa@remotehost:22/opt/collector/backup/*.xml
scp://axibase:file:///home/example/.ssh/id_rsa@remotehost:22/tmp/collector/errors/${TIME("previous_day", "yyyy-MM-dd")}/downloaded1*
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

| Field          | Description | Result |
|:---------------|:------------|:--------|
| Empty | Empty | Send `quota_max` and `quota_min` fields from the root level to server since the root level contains the highest count of numeric fields (2). |
| Empty | Set to `quota_max`, `quota_min` | Send `count` field to server since the items level contains the highest count of numeric fields (1). |
| Set to `count` | Empty | Send `count` field to server since the items level contains the highest count of numeric fields (1). |
| Set to `count`, `name` | Empty | Send `count` numeric field and `name` string field to server since the items level contains the highest count of numeric fields (1). |

#### Job Completion Messages

| **Error Type** | **Description** |
|---|:---|
`FILE_NOT_FOUND` | No target file present in the specified directory.
`FILE_EMPTY` | Target file was found but was completely empty (no annotation, header or data).
`NO_DATA` | Target file was found but did not contain any data (contained an annotation and header, but no timestamps and values).
`UPLOAD_ERROR` | ATSD was not available during the scheduled job execution.
`PARSE_ERROR` | File could not be parsed by ATSD, for example: the timestamp was in a different format.
`NETWORK_ERROR` | Collector could not establish a network connection.
`LINE_COUNT_ERROR` | Target file contained less lines than specified in the “Minimum Line Count” setting.
`FIRST_LINE_ERROR` | First line of the target file does not match the “First Line” setting.

#### Configuration Example

The image below shows an example of the File Forwarding configuration. 

![File Forwarding Configuration](https://axibase.com/wp-content/uploads/2016/04/file_job.png)
