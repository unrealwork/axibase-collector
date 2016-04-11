# JSON Job
JSON (Javascript Object Notation) is an open standard protocol that is used primarily to transmit data between the server and application. It is often used as an alternative to XML.

### JSON Configuration


| Field       | Description           |
|:------------- |:-------------|
| Name  | Configuration name. |
| HTTP Pool | Pool of HTTP connections to the host.  |
| Path | Full URL including HTTP address, path and protocol. |
| Default Entity |  Entity that will be used in Property/Series commands.   |
| Entity Field    |  Value that will be used as entity in Property/Series commands. | 
| Replacement Table |   Specify one of the existing replacement tables from the list.   |
| Entity Prefix |  Specify entity prefix for Series/Property commands.    |
| Metric Prefix |  Specify metric prefix.    |
| Root Objects |  Specify expressions in the JsonPath format to define a root element. Property/Series will be formed basing on elements from these expressions. |
| Included Fields |Specify fields that should be included into the Series command. If you leave the field empty, all values will be included into the command. You can use the '>' symbol for nested fields.|
| Excluded Fields | Specify fields that should be excluded from the Series command. You can use the '>' symbol for nested fields. |
| Renamed Fields | Specify name of fields you want to rename and new names for these fields in the following format: old_name=new_name. |
| Collection | Used to set values into the Path field. For example, the path is set with the template (key ${ITEM}): http://www.test.ru/api/${ITEM}. <br> The key ${ITEM} is also supported by the fields Default Entity, Entity Field, Metric Prefix, and Property Default Type   |
| Property Type Field |  Value that will be used as property type. Expression should be specified in the JsonPath format.    |
| Property Default Type | Property type that will be used as a default type for all properties. |
| Property Key Fields |  Fields that should be included into the Property command value collection.   |
| Property Value Fields |  Fields that should be loaded to a collection as properties.    |
| Time Field |  Field with values that specify time metrics (Series).    |
| Time Format | Format of the string that contains time values. |
| Time Zone |  Time zone of the string that contains time values.  |
| Payload Method | Type of http request.     |
| Payload |  Body of HTTP request. |
| Enable Web Driver |  Select the check box to enable Web Driver.  |
| Driver Script* | Selenium script. |
| Driver Timeout, seconds* |  Script timeout in seconds. |
| Driver File Encoding* |  Encoding of the file that is requested with the script.    |


![JSON Configuration](https://axibase.com/wp-content/uploads/2015/08/json_job.png)
