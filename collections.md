# Collections

## Item Lists

Item List is a collection of strings which can be iterated over in different jobs using `$ITEM` placeholder. For example, in JSON job to query a different URL for each element in the list, you can include `$ITEM` placeholder into the Path field as follows:


This is more efficient that creating a separate job configuration for each URL.

### Required Attributes

**Attribute** | Description
----- | -----
 `Name` | Human-readable identifier of the collection 
 `Type` | Specifies the method which will be used to retrieve data
 `Items`, `Path`, `Query`, `Url` | Formation rules which represent source of the data

### Types

Item Lists may receive data from different providers. Currently the following types are implemented.

#### TEXT

An Item List which stores strings provided in Items field. Strings are separated by a line break.

![TEXT Type](collection_text_type.png)

#### FILE

You can retrieve entities from a file in the local filesystem. Absolute path to target file should be provided in Path field. If the file is not found, an empty collection is returned. Entities are separated by a line break.

![TEXT Type](collection_file_type.png)
