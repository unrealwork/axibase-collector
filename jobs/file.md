# File Job

Use the job to retrieve data stored in CSV or JSON formats.<br> To learn about file job configuration examples, follow the links:

*   [Basic CSV Example](https://axibase.com/products/axibase-time-series-database/writing-data/collector/file/basic-file-example/ "Basic CSV File Example")
*   [JSON - HTTP Pool & Entity Group Example](https://axibase.com/products/axibase-time-series-database/writing-data/collector/file/entity-group-example/ "JSON - HTTP Pool & Entity Group Example")
*   [CSV - Entity Group Example](https://axibase.com/products/axibase-time-series-database/writing-data/collector/file/csv-entity-group-example/ "CSV - Entity Group Example")

### File Job Configuration
Use the table below to perform File job configuration.

| **Field**	          | **Description** |
|:---------------|:------------|
| Parser Type | Downloaded file format: CSV, JSON or XML. |
| Item List | Name of the collection you want to use.  |
| Protocol | Protocol used to get files. May be one of: FILE, FTP, SFTP, SCP, HTTP, or predefined HTTP Pool.
| HTTP Pool | Relative path to the file if HTTP Pool is selected or full URL in case HTTP Pool is set to NONE. |
| Path | Path to CSV or JSON target files located on remote or local file system from which they will be read. <br> Path to files on remote systems can be set using a relative path if HTTP Pool is selected or full URL in case HTTP Pool is set to NONE. <br>Path may represent a location that can be accesed via FTP or SSH and be set using URI starting with `ftp://`, `sftp://`, or `scp://`, then it should provide credentials, hostname, and absolute path to files on the remote host.  <br>Path to files on the local file system should start with `file://` and contain the absolute path. <br> File path can include `${TIME}` placeholders: `file:///opt/app/data-${TIME("previous_day", "yyyy-MM-dd")}.csv` <br> File path supports collections (multiple files): `file:///opt/app/data-${ITEM}.csv` <br> File path can match multiple files, all of which would need to be uploaded. <br> The wildcard characters `?` and `*` can be used to represent a single or multiple wildcard characters. <br>See examples below this table. |
| Enable Web Driver | Select the checkbox to enable Web Driver.  |
| Driver File Encoding | Encoding of the file that is requested with the script.  |
| Driver Script | Selenium script.  |
| Driver Timeout, seconds |  Script timeout in seconds. |
| Minimum Line Count | Minimum amount of lines in the target file. If the target file contains fewer lines than indicated, data will not be sent into ATSD. |
| First Line | Characters or text in the first line. It is used to identify the first line of the target file. First Line field support ${TIME} placeholders, for example: `# Effective Data ${TIME("previous_day", "dd.MM.yyyy")}`. If text or characters are not found in the first line, the data will not be sent to ATSD. |
| Validate Format | Validates the format of the CSV or JSON file. |
| Root Objects | Specify expressions in the JsonPath format to define a root element. Property/Series will be formed basing on elements from these expressions. |
| Included Fields | List of JSON fields that are converted into CSV format and sent to ATSD. All other fields except Included will be ignored. The list can include both numeric and string fields, in which case string columns should be processed as series tags or property keys/tags by the server using CSV parser configuration. |
| Excluded Fields | List of JSON fields that are excluded from CSV converter. Excluded Fields are ignored if Included Fields are specified. Only numeric fields will be sent to ATSD after Excluded Fields filter is applied to JSON object. |
| Parser Name | Configuration name. For more information, see [Parser Configuration Guide](https://axibase.com/products/axibase-time-series-database/writing-data/csv/#parser "Parser Configuration"). |
| Encoding | Character encoding of target files. |
| Metric Prefix | Prefix added to metric names. It is normally used to identify and group the metrics. |
| Default Entity | Default entity under which the metrics and data will be stored in ATSD. |
| Default Tags | Assign predefined tags to all series. |
| Add Timestamp | When set to true, uses current time (time at the moment the data is sent to ATSD) as timestamp for the metrics. If set to false, then timestamp is taken from the target files, as set in the ATSD Parser Configuration. |
| Time Zone | Time zone in which the data is collected.  |
| Wait for Upload | Wait for ATSD server to finish processing of the uploaded file. |
| Process in Rule Engine | Process incoming data in [ATSD Rule Engine](https://axibase.com/products/axibase-time-series-database/rule-engine/ "Rule Engine"). | 
| Ignore Unchaged File | Do not copy files if they have not changed since the last upload. |
| Delete File on Upload | Source files will be deleted if ATSD returns 200 code (OK). This setting only applies to configurations where the Path points to files on the local file system (Path starts with `file://`).|
| Copy Files | Flag to determine if source files should be put into given directory after successful upload to ATSD |
| Success Directory | If a file is uploaded successfully (uploaded into ATSD and Parsed successfully), it will be copied to this directory. <br>If the Success Directory is specified but does not exist, it will be created. <br> If Copy Files is enabled and Success Directory field is empty, the following path will be used: `$AXIBASE_COLLECTOR_HOME/files/$JOB_ID/$TASK_ID/success`.<br> Success Directory field supports `${TIME}` placeholders like: `/opt/collector/file/errors/${TIME("now", "yyyy-MM-dd/HH:mm:ss")}/`. <br>To distinguish between files with identical names a time prefix will be added, for example: `20151130_121212_345_{original_file_name}.csv` <br>Success Directory is an independent setting from Delete on Upload. |
| Error Directory | If a file cannot be uploaded (e.g. server not available OR there is a parsing error), the file will be copied to this directory.<br>If Copy Files is enabled and Success Directory field is empty, the following path will be used: `$AXIBASE_COLLECTOR_HOME/files/$JOB_ID/$TASK_ID/error`. <br> If the Error Directory is specified but does not exist, it will be created. <br>Error Directory field supports ${TIME} placeholders. For example: `/opt/collector/file/errors/${TIME("now", "yyyy-MM-dd/HH:mm:ss")}/`. | 

#### Ingesting Files from the Local File System

When ingesting files from the local file system you can combine the Error Directory and Delete File on Upload settings to implement a particular upload workflow. Files are first copied to a /tmp directory from which they are sent into ATSD, if the upload and parsing is successful, the file is deleted. If there is an upload or parsing error, then the file is moved into the specified Error Directory, where the admin can inspect the file or resolve the upload issue. This approach prevents data loss and creates an efficient workflow.


## FTP, SCP, SFTP File Downloads

To download files from a remote server via FTP, SCP, SFTP protocols, specify Path starting with protocol and include user information as follows:

### FTP

```sh
ftp://axibase:password@remotehost:21/opt/report/export.csv
```

### SCP and SFTP using password

```elm
sftp://axibase:password@remotehost:21/opt/report/export.csv
```

### SCP and SFTP using private key

```elm
scp://axibase:file:///home/example/.ssh/id_rsa@remotehost:21/opt/report/export.csv
```

## Wildcards

For file downloads from FTP, SFTP or SCP, and file:// protocols, the FILE job provides support for wildcards. 

If a wildcard such as `*` or `?` is specified in Path, the collector will download/read all files that match the expression.

### Examples for local files

```elm
file:///home/axibase/.npm/*/*/package/package.json
file:///home/axibase/.npm/*/*/packag?/package.json
file:///home/axibase/.npm/*/*/packag?/${ITEM}.json
file:///tmp/collector/errors/*.json
file:///tmp/collector/errors/${TIME("previous_day", "yyyy-MM-dd")}/downloaded1*
```

### Examples for FTP, SFTP or SCP

*   Wildcards are allowed in filenames only

```elm
ftp://axibase:password@remotehost:21/opt/collector/backup/*.xml
sftp://axibase:password@remotehost:22/opt/collector/backup/pools_????-??-??.xml
sftp://axibase:file:///home/example/.ssh/id_rsa@remotehost:22/opt/collector/backup/*.xml
scp://axibase:file:///home/example/.ssh/id_rsa@remotehost:22/tmp/collector/errors/${TIME("previous_day", "yyyy-MM-dd")}/downloaded1*
```

## JSON Files

### Included Fields and Excluded Fields:

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

### `Included Fields` and `Excluded Fields` processing

| **Field**          | **Description** | **Result** |
|:---------------|:------------|:--------|
| Empty | Empty | Send `quota_max` and `quota_min` fields from the root level to server since the root level contains the highest count of numeric fields (2). |
| Empty | Set to `quota_max`, `quota_min` | Send `count` field to server since the items level contains the highest count of numeric fields (1). |
| Set to `count` | Empty | Send `count` field to server since the items level contains the highest count of numeric fields (1). |
| Set to `count`, `name` | Empty | Send `count` numeric field and `name` string field to server since the items level contains the highest count of numeric fields (1). |

#### Configuration Example

The image below shows an example of the File Forwarding configuration. 

![File Forwarding Configuration](https://axibase.com/wp-content/uploads/2016/04/file_job.png)
