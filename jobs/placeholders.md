## Placeholders

The following placeholders are supported to automate processing of item lists and path patterns.

| **Name** | **Description** |
|:---|:---|:---|
| ITEM | Current element in selected [`Item List`](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/file.md#file-job-configuration) |
| PATH | URL path or file absolute path | 
| FILE | File name | 
| DIRECTORY | Parent directory name | 
| TIME | Start time and/or End time for data retrieval from target file | 

Time format can be specified using any combination of: `y`, `M`, `d`, `H`, `m`, `s` <br>
You can learn more about [End Time syntax here.](https://axibase.com/products/axibase-time-series-database/visualization/end-time/ "Chart Lab")

_NOTE: `Start Time`, `End Time`, and `Time Format` fields have been deprecated in Axibase Collector version 11164._


### Syntax

```ls
${PLACEHOLDER}
```

```ls
${TIME("end_time_syntax", "time_format")} 
```

Example: `${ITEM}`

```ls
${PLACEHOLDER?formatFunction(arguments)}
```

```ls
file:///opt/files/inbound/${TIME("previous_day", "yyyy-MM-dd")}/daily.csv
```

Example: `${FILE?keep_before("_")}`

### Usage 

| **Name** | **Supported Fields** | **Supported Protocols** |
|:---|:---|:---|
| ITEM | Default Entity, Path | http/s, file, ftp, scp |
| PATH | Default Entity | http/s, file, ftp, sftp, scp |
| FILE | Default Entity| file, ftp, sftp, scp |
| DIRECTORY | Default Entity | file |
| TIME | Success Directory, Error Directory, Path | http/s, file |

### Format Functions

Format functions provide a mechanism for extracting entity name from matched file names and paths.

| **Function** | **Description** | 
|:---|:---|
| [`keep_after`](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/placeholders.md#keep_after) | Removes part of the string before first occurrence of the given substring |
| [`keep_after_last`](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/placeholders.md#keep_after_last) | Removes part of the string before last occurrence of the given substring |
| [`keep_before`](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/placeholders.md#keep_before) | Removes part of the string that starts with the first occurrence of the given substring. |
| [`keep_before_last`](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/placeholders.md#keep_before_last) | Removes part of the string that starts with the last occurrence of the given substring. |
| [`replace`](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/placeholders.md#replace) | Replace all occurrences of the given string in in the original string with another string |
| [`remove_beginning`](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/placeholders.md#remove_beginning) | Removes the given substring from the beginning of the string. |
| [`remove_ending`](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/placeholders.md#remove_ending) | Removes the given substring from the end of the string. |

### Format Examples

Following examples based on [`Path `](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/file.md#file-job-configuration) field value and can be used to setup [`Default Entity`](https://github.com/axibase/axibase-collector-docs/blob/master/jobs/file.md#file-job-configuration)

#### keep_after 
* `file:///opt/files/cpu_busy.*` 
* ${PATH?keep_after('.')} 

| Matching paths | Output |
|:---|:---|
| /opt/files/cpu_busy.nurswgvml.106<br>/opt/files/cpu_busy.nurswgvml.107 | nurswgvml.106<br>nurswgvml.107 | 

#### keep_after_last 
* `/2.2/tags/docker/info?key=privateKey((&site=${ITEM}`
* ${ITEM?keep_after_last("-")} 

| ITEM value | Output |
|:---|:---|
| so-stackoverflow | stackoverflow | 

#### keep_before 
* `ftp://user:password@10.10.0.10:21/home/user/nurswgvml106_*` 
* ${FILE?keep_before('_')} 

| Matching paths | Output |
|:---|:---|
| /home/user/nurswgvml106_temperature.csv | nurswgvml106 | 

#### keep_before_last 
* `file:///opt/files/*_busy.csv` 
* ${FILE?keep_before_last('_')} 

| Matching paths | Output |
|:---|:---|
| /opt/files/nurswgvml106_cpu_busy.csv<br>/opt/files/nurswgvml107_cpu_busy.csv | nurswgvml106_cpu<br>nurswgvml107_cpu | 

#### replace
* `file:///opt/files/*`
* ${FILE?replace(' ','.')} 

| Matching paths | Output |
|:---|:---|
| /opt/files/nurswgvml106 cpu_busy | nurswgvml106.cpu_busy | 

#### remove_beginning
* `file:///opt/files/*`
* ${PATH?remove_beginning('/opt/files/')} 

| Matching paths | Output |
|:---|:---|
| /opt/files/nurswgvml106<br>/opt/files/nurswgvml107 | nurswgvml106<br>nurswgvml107 | 

#### remove_ending
* `file:///opt/files/*.cpu_busy.csv`
* ${FILE?remove_ending('.cpu_busy.csv')}

| Matching paths | Output |
|:---|:---|
| /opt/files/nurswgvml106.cpu_busy.csv<br>/opt/files/nurswgvml107.cpu_busy.csv | nurswgvml106<br>nurswgvml107 |

##### More functions at [Freemarker Built-ins for strings](http://freemarker.org/docs/ref_builtins_string.html)
