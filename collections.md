# Collections

## Item Lists

Item List is a collection of strings used to execute repetitive actions as part of the same job configuration. Such automation is more efficient than creating a different job configuration for a list of similar elements.

List elements can be specified by typing text on the form or by reading them from an external source such as file, URL etc.

Supported list types:

* [TEXT](#text)
* [FILE](#file)
* [SCRIPT](#script)

Job types with support for Item List automation:

* JSON
* FILE
* TCP
* ICMP
* OVPM
* SNMP

### Configuration

To create a new list, open **Collections:Item Lists** page, click **Add**:

**Field** | **Description**
| :---- | ----- |
 `Name` | List name.
 `Type` | Method used to retrieve list elements. See [types](#types).
 `Discard Duplicates` | Discard elements with the same name. <br>If true, the list discards duplicate elements regardless of the source (TEXT, FILE, SCRIPT, etc). <br>String comparision is case-sensitive.
 `Items`, `Path`, `Command`... | Type-specific field to configure the source for reading list elements.
 
### Usage

Use `${ITEM}` placeholder to access the value of the current element in the list while iterating. 

The elements retain the original order as specified in the editor or returned by an external source.

For example, include `${ITEM}` placeholder into Path field in JSON job to query a different URL for each element in the list. 

![Item List Example](item-list.png)

### Types

Item Lists may receive elements from different sources. Currently the following types are implemented:

#### TEXT

An Item List which stores strings entered in the `Items` field on the form. 

List elements should be separated with a line break.

![TEXT Type](collection_text_type.png)

#### FILE

Reads lines from a file on the local filesystem. 

Absolute path to the target file should be specified in the `Path` field. 

If the file is not found, an empty collection is returned. List elements in the file should be separated with a line break.

![FILE Type](collection_file_type.png)

#### SCRIPT

Executes a script specified in `Command` field and reads lines from standard output as list items.

Only scripts in `${COLLECTOR_HOME}/conf/scripts` directory can be executed.

`Command` field should start with script file name (absolute path not supported) and optional script arguments.

The script should return list of items separated by line break to stdout.

**Example**

Directory `/tmp/report/csv` contains CSV files. The Item List should contain a collection of file name prefixes before underscore symbol.

```
ent-1_file-1.csv
ent-1_file-2.csv
ent-1_file-3.csv
ent-2_file-1.csv
ent-2_file-2.csv
ent-3_file-3.csv
```

```
nano prefix.sh
```

```sh
#!/usr/bin/env bash
dir="$1/*"
for file in $dir; do
    if [[ -f $file &&  $file == *"_"* ]]; then
        filename=${file##*/}
        b=${filename%_*}
        echo -e "$b"
    fi
done
```

```
chmod a+x prefix.sh
prefix.sh /tmp/report/csv

ent-1
ent-1
ent-1
ent-2
ent-2
ent-3
```

## Replacement Tables

Replacement table is a list of key=value pairs that can be used to rename input string into output string. 

Replacement table can serve a lookup dictionary to convert numeric identifiers into human-readable names, for instance IP addresses into hostnames. It can be also used to remove extra symbols from inputs, for example to replace entity name 'nurswgvml001:LZ' with 'nurswgvml001'.

### Configuration

To create a new replacement table, open **Collections:Replacement Tables** page:

**Field** | **Description**
| :---- | ----- |
 `Name` | Table name.
 `Records` | List of key=value pairs, each pair on a separate line.
 
 ![Replacement Table Example](replacement-table.png)
