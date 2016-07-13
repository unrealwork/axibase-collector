# Placeholders

## Overview

The following placeholders are supported to format strings, calculate dates, and download multiple files.

| **Name** | **Description** |
|:---|:---|
| `${ITEM}` | Current element in the Item List.|
| `${PATH}` | URL path or the file's absolute path. |
| `${FILE}` | File's name (1). |
| `${DIRECTORY}` | File's parent directory. |
| `${TIME()}` | Text output of the `TIME` function. |
| `${DATE_ITEM()}` | Current element in the Date Item list.|

* (1) In case of HTTP protocol, placeholder `${FILE}` returns part of the URL after the last slash and before query string, for example, `http://examples.com/data/stats.csv?city=Denver` -> `${FILE}` = `stats.csv`

## Usage 

| **Name** | **Supported Fields** | **Supported Protocols** |
|:---|:---|:---|
| `${ITEM}` | Path, Default Entity, Metric Prefix, Custom Tags, Success Directory, Error Directory | All |
| `${PATH}` | Default Entity, Metric Prefix | All |
| `${FILE}` | Default Entity, Metric Prefix | All |
| `${DIRECTORY}` | Default Entity, Metric Prefix | FILE, FTP, SFTP, SCP |
| `${TIME()}` | Path, Success Directory, Error Directory | All |
| `${DATE_TIME()}` | Path | All |

* To URL-encode placeholder value, for example, if it may contain special characters and is included in Path, apply `url` function as follows: `${ITEM?url}`.

## Syntax

The placeholder is prefix with `$` and enclosed in curly brackets `{}`.

```ls
${PLACEHOLDER}
```

Examples: 

`${ITEM}`

```ls
file:///opt/files/inbound/${TIME("previous_day", "yyyy-MM-dd")}/daily.csv
```

## Functions

### TIME Function

TIME function calculates the time based on [endtime](https://github.com/axibase/atsd-docs/blob/master/end-time-syntax.md) syntax outputs its value in the specified `time_format`.

Syntax: `${TIME("end_time_syntax", "time_format")}` 

Example: `${TIME("previous_hour", "yyyy-MM-dd/HH")}` 

Time format can be specified using a of: `y`, `M`, `d`, `H`, `m`, `s`. See [SimpleDateFormat](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) for reference.

If the TIME function returns a number, it can be used in addition or subtraction expressions:

Example: `${TIME("2016-01-01","M") - 1}` -- subtract 1 from month

### DATE_ITEM Function

DATE_ITEM function returns an array of strings.

It creates an array of dates between start and end time arguments, and formats these dates into strings with the specified date format.

If the path contains `${DATE_ITEM()}` placeholder, it should execute a separate file request for each string in the array.

Syntax: `${DATE_ITEM(startDate, endDate, periodCount, periodUnit, timeFormat)}` 

`startDate` and `endDate` support [endtime](https://github.com/axibase/atsd-docs/blob/master/end-time-syntax.md) syntax.

Example: `${DATE_ITEM("current_day - 7 * DAY", "now", 1, "HOUR", "yyyy/MM/dd/HH")}`

### String Functions

Placeholder values can be further modified with built-in [string functions](#string-functions).

```ls
${PLACEHOLDER?function(arguments)}
```

Example: `${FILE?keep_before("_")}`

| **Function** | **Description** | 
|:---|:---|
| [`keep_after`](#keep_after) | Removes part of the string before first occurrence of the given substring |
| [`keep_after_last`](#keep_after_last) | Removes part of the string before last occurrence of the given substring |
| [`keep_before`](#keep_before) | Removes part of the string that starts with the first occurrence of the given substring. |
| [`keep_before_last`](#keep_before_last) | Removes part of the string that starts with the last occurrence of the given substring. |
| [`replace`](#replace) | Replace all occurrences of the given string in in the original string with another string |
| [`remove_beginning`](#remove_beginning) | Removes the given substring from the beginning of the string. |
| [`remove_ending`](#remove_ending) | Removes the given substring from the end of the string. |

Multiple functions can be chained (executed from left to right):

```ls
${PLACEHOLDER?functionA(arguments)?functionB(arguments)}
```

Example: `${FILE?keep_before("_")?replace(".csv", "")}`

Input: **ftp.example.com/data/95014_Cupertino_20160625_DAILY.csv**

| **Expression** | **Result** |
|:---|:---|
| `${FILE}` | 95014_Cupertino_20160625_DAILY.csv |
| `${FILE?keep_before('_')}` | 95014 |
| `${FILE?keep_after('_')?keep_before('_')}` | Cupertino |
| `${FILE?split('_')[0]}` | 95014 |
| `${FILE?split('_')[1]}` | Cupertino |
| `${FILE?split('_')[n]}` | Nth token after split by underscore |
| `${FILE?keep_after_last('_')?keep_before('.')}` | DAILY |

### String Function Examples

The following examples based on [`Path `](file.md#download) field value and can be used to define [`Default Entity`](file.md#upload)

#### keep_after 
* `file:///opt/files/cpu_busy.*` 
* `${PATH?keep_after('.')}` 

| Matching Paths | Output |
|:---|:---|
| /opt/files/cpu_busy.nurswgvml.106<br>/opt/files/cpu_busy.nurswgvml.107 | nurswgvml.106<br>nurswgvml.107 | 

#### keep_after_last 
* `/2.2/tags/docker/info?key=privateKey((&site=${ITEM}`
* `${ITEM?keep_after_last("-")}`

| ITEM value | Output |
|:---|:---|
| so-stackoverflow | stackoverflow | 

#### keep_before 
* `ftp://user:password@10.10.0.10:21/home/user/nurswgvml106_*` 
* `${FILE?keep_before('_')}` 

| Matching Paths | Output |
|:---|:---|
| /home/user/nurswgvml106_temperature.csv | nurswgvml106 | 

#### keep_before_last 
* `file:///opt/files/*_busy.csv` 
* `${FILE?keep_before_last('_')}` 

| Matching Paths | Output |
|:---|:---|
| /opt/files/nurswgvml106_cpu_busy.csv<br>/opt/files/nurswgvml107_cpu_busy.csv | nurswgvml106_cpu<br>nurswgvml107_cpu | 

#### replace
* `file:///opt/files/*`
* `${FILE?replace(' ','.')}` 

| Matching Paths | Output |
|:---|:---|
| /opt/files/nurswgvml106 cpu_busy | nurswgvml106.cpu_busy | 

#### remove_beginning
* `file:///opt/files/*`
* `${PATH?remove_beginning('/opt/files/')}` 

| Matching Paths | Output |
|:---|:---|
| /opt/files/nurswgvml106<br>/opt/files/nurswgvml107 | nurswgvml106<br>nurswgvml107 | 

#### remove_ending
* `file:///opt/files/*.cpu_busy.csv`
* `${FILE?remove_ending('.cpu_busy.csv')}`

| Matching Paths | Output |
|:---|:---|
| /opt/files/nurswgvml106.cpu_busy.csv<br>/opt/files/nurswgvml107.cpu_busy.csv | nurswgvml106<br>nurswgvml107 |
