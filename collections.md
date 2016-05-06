# Item Lists

## Overview

Item List is a set of strings which can be iterated in different jobs.

## Required Attributes

**Attribute** | Description
----- | -----
 `Name` | Human-readable identifier of the collection 
 `Type` | Specifies the method which will be used to retrieve data
 `Items`, `Path`, `Query`, `Url` | Formation rules which represent source of the data

## Types

Item Lists may receive data from different providers. Currently the following types are implemented.

### TEXT

An Item List which stores strings provided in Items field. Strings are separated by a line break.

![TEXT Type](collection_text_type.png)

### FILE

You can retrieve entities from a file in the local filesystem. Absolute path to target file should be provided in Path field. If the file is not found, an empty collection is returned. Entities are separated by a line break.

![TEXT Type](collection_file_type.png)
