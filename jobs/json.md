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
| JSON Path |  Specify expression in the JsonPath format to define a root element. Property/Series will be formed basing on elements from this expression. |
| Depth | Depth of element nesting. |
| Included Fields |Specify fields that should be included into the Series command. If you leave the field empty, all values will be included into the command. You can use the '>' symbol for nested fields.|
| Excluded Fields | Specify fields that should be excluded from the Series command. You can use the '>' symbol for nested fields. |
| Renamed Fields | Specify name of fields you want to rename and new names for these fields in the following format: old_name=new_name. |
| Custom Tags | Specify custom tags that should be included into Series/Property commands. You can also use keys ${PARENT} (synonym for ${PARENT(1)}), ${PARENT(n)}, ${field_name}. For example, there is a JSON file: <pre><code>{&NewLine;  "upstreams": {&NewLine;    "demo-backend": {&NewLine;      "keepalive": 0,&NewLine;      "peers": [&NewLine;        {&NewLine;          "active": 0,&NewLine;          "backup": false,&NewLine;          "responses": {&NewLine;            "1xx": 0,&NewLine;            "2xx": 0,&NewLine;            "total": 0&NewLine;          },&NewLine;          "id": 0,&NewLine;          "server": "1.2.3.4:1234"&NewLine;        }&NewLine;      ]&NewLine;    }&NewLine;  }&NewLine;}</code></pre> If tag is set with template 'server=${server}', then tag 'server=1.2.3.4:1234' will be added to the command.<br>If tag is set with template 'name=${PARENT}' and field 'JSON Path' is set with value '$upstreams.demo-backend.peers.*', then tag 'name=peers' will be added to the command. Else if tag is set with template 'name=${PARENT(2)}', then tag 'name=demo-backend' will be added. <br> Keys ${PARENT}, ${PARENT(n)} are also supported by the fields Default Entity, Time Value. |
| Collection | Used to set values into the Path field. For example, the path is set with the template (key ${ITEM}): http://www.test.ru/api/${ITEM}. <br> The key ${ITEM} is also supported by the fields Default Entity, Entity Field, Metric Prefix, and Property Default Type   |
| Property Type Field |  Value that will be used as property type. Expression should be specified in the JsonPath format.    |
| Property Default Type | Property type that will be used as a default type for all properties. |
| Property Key Fields |  Fields that should be included into the Property command value collection.   |
| Property Value Fields |  Fields that should be loaded to a collection as properties.    |
| Time Field | Field with values that specify time metrics (Series).    |
| Time Value | Used to take value by keys ${PARENT}, ${PARENT(n)} from json that specify time metrics (Series). For example, there is a JSON file: <pre><code>{&NewLine;  "2016-01-01": {&NewLine;    "ok": 10,&NewLine;    "fail": 2&NewLine;  },&NewLine;  "2016-01-02": {&NewLine;    "ok": 15,&NewLine;    "fail": 2&NewLine;  }&NewLine;}</code></pre><br>If value is set with template '${PARENT}' and field 'JSON Paht' is set with value '$.*', then fields '2016-01-01' and '2016-01-02' will be used as time for metrics (Series). |
| Time Format | Format of the string that contains time values. |
| Time Zone |  Time zone of the string that contains time values.  |
| Payload Method | Type of http request.     |
| Payload |  Body of HTTP request. |
| Enable Web Driver |  Select the check box to enable Web Driver.  |
| Driver Script* | Selenium script. |
| Driver Timeout, seconds* |  Script timeout in seconds. |
| Driver File Encoding* |  Encoding of the file that is requested with the script.    |


## Configuration Example

![](images/json_job.png)

## JSON viewer Example

![](images/json_job_viewer.png)
