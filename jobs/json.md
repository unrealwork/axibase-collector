# JSON Job
JSON (Javascript Object Notation) is an open standard protocol that is used primarily to transmit data between the server and application. It is often used as an alternative to XML.

## JSON Configuration

Field | Description
:---- | :----------
Name  | Configuration name.

#### Request Fields

| Field                    | Description |
|:-------------------------|:------------|
| HTTP Pool                | Pool of HTTP connections to the host. |
| Path                     | Full URL including HTTP address, path and protocol. |
| Item List                | Used to set values into the Path field. For example, the path is set with the template (key ${ITEM}): http://www.test.ru/api/${ITEM}. <br> The key ${ITEM} is also supported by the fields Default Entity, Entity Field, Metric Prefix, and Property Default Type. |
| Replacement Table        | Specify one of the existing replacement tables from the list. |
| Payload Method           | Type of http request. |
| Payload                  | Body of HTTP request. |
| Enable Web Driver        | Select the check box to enable Web Driver. |
| Driver Script*           | Selenium script. |
| Driver Timeout, seconds* | Script timeout in seconds. |
| Driver File Encoding*    | Encoding of the file that is requested with the script. |

#### Naming Fields
| Field          | Description |
|:-------------- |:------------|
| Default Entity | Entity that will be used in Property/Series commands. |
| Entity Field   | Value that will be used as entity in Property/Series commands. | 
| Entity Prefix  | Specify entity prefix for Series/Property commands. |
| JSON Path      | Specify expression in the JsonPath format to define a root element. Property/Series will be formed basing on elements from this expression. |
| Depth | Depth of element nesting. |
| Custom Tags    | Specify custom tags that should be included into Series/Property commands ([example](#custom-tags)). You can also use keys ${PARENT} (synonym for ${PARENT(1)}), ${PARENT(n)}, ${field_name}. <br> Keys ${PARENT}, ${PARENT(n)} are also supported by the fields Default Entity, Time Value. |

#### Metric Fields

| Field           | Description |
|:--------------- |:------------|
| Metric Prefix   | Specify metric prefix. |
| Included Fields | Specify fields that should be included into the Series command. If you leave the field empty, all values will be included into the command. You can use the '.' symbol for nested fields. |
| Excluded Fields | Specify fields that should be excluded from the Series command. You can use the '.' symbol for nested fields. |
| Renamed Fields  | Specify name of fields you want to rename and new names for these fields in the following format: old_name=new_name. |

#### Property Fields

| Field                 | Description |
|:--------------------- |:------------|
| Property Type Field   | Value that will be used as property type. Expression should be specified in the JsonPath format. |
| Property Default Type | Property type that will be used as a default type for all properties. |
| Property Key Fields   | Fields that should be included into the Property command value collection. |
| Property Value Fields | Fields that should be loaded to a collection as properties. |

#### Time Fields

| Field       | Description           |
|:----------- |:-------------|
| Time Field  | Field with values that specify time for command.    |
| Time Value  | Used to take value by keys ${PARENT}, ${PARENT(n)} from json that specify time metrics for Series command ([example](#time-value)).|
| Time Format | Format of the string that contains time values. |
| Time Zone   | Time zone of the string that contains time values.  |

## Examples

- [Naming Fields](#naming-fields)
  - [Default Entity](#default-entity)
  - [Custom Tags](#custom-tags)
- [Time Fields](#time-fields)
  - [Time Field](#time-field)
  - [Time Value](#time-value)

### Naming Fields

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