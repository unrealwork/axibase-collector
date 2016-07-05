# JSON Job
JSON (Javascript Object Notation) is an open standard protocol that is used primarily to transmit data between the server and application. It is often used as an alternative to XML.

## JSON Configuration

Field | Description
:---- | :----------
Name  | Configuration name.

#### Request Fields

| Field                    | Description |
|:-------------------------|:------------|
| HTTP Pool                | Pre-defined HTTP connection parameters to limit the number of open connections, to customize timeout settings, and to re-use connections across multiple requests.<br> When HTTP Pool is selected, the Path field should contain relative URI: [/]path[?query][#fragment] |
| Path                     | URI Path to JSON file, for example https://example.com/api/daily-summary.json.<br> If HTTP Pool is enabled, the path should be relative, for example /api/daily-summary.json. Otherwise the Path should be a full URI including protocol, host, port, and the path.<br> The Path supports the following placeholders:<br> - ${ITEM} current element in the Item List<br> - ${TIME()} text output of the TIME function<br> - ${DATE_ITEM()} text output of the DATE_ITEM function.<br><br> If ${DATE_ITEM()} is present in Path, the job will execute as many queries as there are elements returned by ${DATE_ITEM()} function, substituting ${DATE_ITEM()} placeholder with the element value for each request.<br> The Path can include either ${DATE_ITEM()} or ${ITEM} function, but not both. |
| Format                   | JSON or JSON Lines. If JSON Lines format is selected, the input lines will be added to an array object and parsed as a JSON document. |
| Item List                | A collection of elements to execute multiple requests for different JSON files in a loop.<br> The current element in the loop can be accessed with ${ITEM} placeholder which can be embedded into Path and Default Entity fields.<br> When Item List is selected and ${ITEM} is present in Path, the job will execute as many queries as there are elements in the list, substituting ${ITEM} with element value for each request. |
| Replacement Table        | A set of mappings for converting entity names retrieved from the JSON document into entity names to be stored in the database. |
| HTTP Method              | HTTP Method executed: GET or POST. POST method provides a way to specify request parameters in payload. |
| Payload                  | POST request payload. |
| HTTP Headers             | Specify request headers. |
| Enable Web Driver        | When enabled, executes Driver Script. |
| Driver Script*           | Downloads the file by executing a set of pre-recorded browser actions such as opening a page and clicking on button to export a file.<br> The script is recorded in Selenium IDE and exported into Java format. |
| Driver Timeout, seconds* | Maximum time allowed for the Driver Script to run before it will be aborted. |
| Driver File Encoding*    | File Encoding to use when saving a file downloaded with Driver Script. |

## JSON Configuration Settings

#### Json Fields

| Field           | Description |
|:--------------- |:------------|
| JSON Path       | JSON Path expression to match an object or a list of objects in the JSON document. Default path is $ which stands the root object.<br> JSON Path supports the following placeholders:<br> - ${ITEM} current element in the Item List<br> - ${TIME()} text output of the TIME function<br> - ${DATE_ITEM()} text output of the DATE_ITEM function.<br><br> If ${DATE_ITEM()} is present in JSON Path, the JSON Path expression will return a combined list of objects that matched any of the elements returned by ${DATE_ITEM()} function. |
| Traversal Depth | Maximum traversal limit measured as the difference between the matched object and nested objects. When Depth is set to 1, the collector will include only direct fields of the matched object. If Depth is set to 0 or negative number, all nested objects will be traversed and included into commands. |
| Custom Tags     | Additional series, property, and message tags. Supported placeholders:<br> - ${HOST} - Hostname from which the JSON document was loaded.<br> - ${PARENT(n)} - Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}<br> - ${field_name} - Value of the specified filed in the matched object. |
| Renamed Fields  | Pairs of oldname=newname mappings, one per line, to rename fields in the matched object. |

#### Entity Fields

| Field          | Description |
|:-------------- |:------------|
| Default Entity | Entity that will be used in all commands.<br> This field  supports the following options:<br> - Text value<br> - ${HOST} placeholder - Hostname from which the JSON document was loaded.<br> - ${ITEM} placeholder - Current element in the Item List.<br> - ${PARENT(n)} placeholder - Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.|
| Entity Field   | Value that will be used as entity in all commands.<br> This field supports the following options:<br> - Name of the field containing entity in the matched object<br> - JSON Path | 
| Entity Prefix  | Text added to entity name extracted retrieved from the specified field.<br> For example, if Entity Prefix is set to 'custom.', and the field value is 'my-host', the resulting entity name will be 'custom.my-host'. |

#### Metric Fields

| Field              | Description |
|:------------------ |:------------|
| Metric Prefix      | Text added to metric name.<br> For example, if Metric Prefix is set to 'custom.', and the metric name is 'cpu_busy', the resulting metric name will be 'custom.cpu_busy'. |
| Included Fields    | Specify fields that should be included into the Series command. If you leave the field empty, all values will be included into the command. You can use the '.' symbol for nested fields. Wildcard '*' is supported. |
| Excluded Fields    | Specify fields that should be excluded from the Series command. You can use the '.' symbol for nested fields. Wildcard '*' is supported. |
| Metric Name Field  | Metric name extracted from the given field in the matched object. |
| Metric Value Field | Metric value extracted from the given field in the matched object. |

#### Property Fields

| Field                 | Description |
|:--------------------- |:------------|
| Property Default Type | Property type that will be used as a default type for all properties.<br> This field supports the following options:<br> - Text value<br> - ${ITEM} placeholder - Current element in the Item List.<br> - ${PARENT(n)} placeholder - Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}. |
| Property Type Field   | Field with value that will be used as property type.<br> This field supports the following options:<br> - Name of the field containing property type in the matched object<br> - JSON Path |
| Property Key Fields   | Fields that should be included into the Property command value collection. |
| Property Value Fields | Fields that should be loaded to a collection as properties. |

#### Time Fields

| Field        | Description |
|:------------ |:------------|
| Time Default | Used to take value by keys ${PARENT}, ${PARENT(n)} from json that specify time metrics for Series command ([example](#time-value)). |
| Time Field   | Field with values that specify time for commands.<br> This field supports the following options:<br> - ${TIME()} text output of the TIME function<br> - ${ITEM} placeholder - Current element in the Item List.<br> - ${PARENT(n)} - Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}. |
| Time Format  | Date format applied when parsing time value. |
| Time Zone    | Time zone can be optionally applied if the extracted date is in local time, otherwise local Collector time zone is in effect. |

#### Message Fields

| Field                | Description |
|:-------------------- |:------------|
| Message Default Type | Message type that will be used as a default type for all messages.<br> This field supports the following options:<br> - Text value<br> - ${ITEM} placeholder - Current element in the Item List.<br> - ${PARENT(n)} placeholder - Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}. |
| Message Type Field   | Field with value that will be used as message type.<br> This field supports the following options:<br> - Name of the field containing message type in the matched object<br> - JSON Path |
| Message Default Type | Message source that will be used as a default source for all messages.<br> This field supports the following options:<br> - Text value<br> - ${ITEM} placeholder - Current element in the Item List.<br> - ${PARENT(n)} placeholder - Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}. |
| Message Type Field   | Field with value that will be used as message source.<br> This field supports the following options:<br> - Name of the field containing message source in the matched object<br> - JSON Path |
| Message Tag Fields   | Message tags, included as tags into message command. |
| Message Default | Message value that will be used as a default text for all messages.<br> This field supports the following options:<br> - Text value<br> - ${ITEM} placeholder - Current element in the Item List.<br> - ${PARENT(n)} placeholder - Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}. |
| Message Field   | Field with value that will be used as message text.<br> This field supports the following options:<br> - Name of the field containing message source in the matched object<br> - JSON Path |

## Examples

- [Json Fields](#json-fields)
  - [Custom Tags](#custom-tags)
- [Entity Fields](#entity-fields)
  - [Default Entity](#default-entity)
- [Time Fields](#time-fields)
  - [Time Field](#time-field)
  - [Time Value](#time-value)

### Json Fields

#### Custom tags

JSON:

```json
{
  "upstreams": {
    "demo-backend": {
      "peers": [
        {
          "active": 0,
          "responses": {
            "1xx": 0,
            "total": 0
          },
          "id": 1,
          "server": "1.2.3.4:1234"
        }
      ]
    }
  }
}
```

Field Name      | Field Value
:-------------- | :----------
Default Entity  | tst
JSON Path       | $.upstreams.demo-backend.peers.*
Depth           | 2
**Custom Tags** | **server=${server}<br>name=${PARENT(2)}<br>type=${PARENT(3)}.${PARENT}**

Result:

```
series e:tst ms:1466517795129 t:name=demo-backend t:server=1.2.3.4:1234 t:type=upstreams.peers m:id=1 m:active=0 m:responses.total=0 m:responses.1xx=0
```

### Entity Fields

#### Default Entity

JSON:

```json
{
  "upstreams": {
    "demo-backend": {
      "peers": [
        {
          "active": 0,
          "responses": {
            "1xx": 0,
            "total": 0
          },
          "id": 1,
          "server": "1.2.3.4:1234"
        }
      ]
    }
  }
}
```

- Default Entity is EMPTY:

  Field Name         | Field Value
  :----------------- | :----------
  Path               | http://test.ru
  **Default Entity** |
  JSON Path          | $.upstreams.demo-backend.peers.*
  Depth              | 2

  Result:

  ```
  series e:test.ru ms:1466517795129 m:id=1 m:active=0 m:responses.total=0 m:responses.1xx=0
  ```
  
- Default Entity contains placeholder:

  Field Name         | Field Value
  :----------------- | :----------
  Path               | http://test.ru
  **Default Entity** | **${PARENT(2)}**
  JSON Path          | $.upstreams.demo-backend.peers.*
  Depth              | 2

  Result:

  ```
  series e:demo-backend ms:1466517795129 m:id=1 m:active=0 m:responses.total=0 m:responses.1xx=0
  ```

### Metric Fields

### Property Fields

### Time Fields

#### Time Field

JSON:

```json
{
  "data": [
    {
      "date": "2016-01-01",
      "ok": 10,
      "fail": 2
    },
    {
      "date": "2016-01-02",
      "ok": 15,
      "fail": 2
    }
  ]
}
```

Field Name     | Field Value
:------------- | :----------
Default Entity | tst
JSON Path      | $.data.*
**Time Field** | **date**
Time Format    | yyyy-MM-dd
Time Zone      | UTC

Result:

```
series e:tst ms:1451606400000 m:fail=2 m:ok=10
series e:tst ms:1451692800000 m:fail=2 m:ok=15
```

#### Time Value

JSON:

```json
{
  "2016-01-01": {
    "ok": 10,
    "fail": 2
  },
  "2016-01-02": {
    "ok": 15,
    "fail": 2
  }
}
```

Field Name     | Field Value
:------------- | :----------
Default Entity | tst
JSON Path      | $.*
**Time Value** | **${PARENT}**
Time Format    | yyyy-MM-dd
Time Zone      | UTC

Result:

```
series e:tst ms:1451606400000 m:fail=2 m:ok=10
series e:tst ms:1451692800000 m:fail=2 m:ok=15
``` 

## Configuration Example

![](images/json_job.png)

## JSON viewer Example

![](images/json_job_viewer.png)