# JMX Job

JMX (Java Management Extensions) is used for managing and monitoring Java applications, devices, system objects, and service-orientated networks.

###JMX Configuration
To configure a JMX job, click Create JMX configuration. <br>
Use the table below to set configuration parameters. 


| Field       | Description |
|:-------------|:-------------|
| Name | Job configuration name. |
| Host | Hostname or IP address of the remote server running Java application with JMX service. |
| Port | JMX service port.  |
| User Name | 	JMX username. |
| Password | JMX password. |
| Entity | Entity name under which the data will be stored, typically the hostname of the remote server. |
| Command Type | Insert command type: SERIES, PROPERTY or BOTH. <br>If PROPERTY or BOTH is selected, property type field is set to MBean type. <br>If MBean type is null, MBean name is used for property type field.
| Property Type Prefix  | Prefix added to metric names used to filter and group metrics. For example: `jmx.`
| Excluded Attributes | 	List of MBean attribute names excluded from collection. |
| Service Name | Name of the JMX service. The default service name is `jmxrmi`.|

#### JMX Configuration Example

![](https://axibase.com/wp-content/uploads/2014/06/jmx_config.png)


#### More Options
##### Choose Attributes

Click Viewer to open a tree-based JMX viewer displaying available JMX Management Beans and their attributes. <br> 
Select a check box next to a row to enable collection of the selected attribute.

![JMX Viewer](https://axibase.com/wp-content/uploads/2014/06/jmx_viewer.png)

##### Use Wildcards
You can manually modify the list of collected attributes by replacing specific attribute names with wildcards. For example, to collect all numeric attributes from MBean java.lang:*,type=GarbageCollector, specify * in the corresponding attribute selector field.

| Expression        | Attribute  |
|:-------------|:-------------|
| `java.lang:*,type=GarbageCollector` | `CollectionCount, CollectionTime, LastGcInfo.GcThreadCount`, <br> `LastGcInfo.memoryUsageAfterGc.Code Cache.value.committed,` <br> `LastGcInfo.memoryUsageAfterGc.Code Cache.value.init`, <br> `LastGcInfo.memoryUsageAfterGc.Code Cache.value.max`,<br> `LastGcInfo.memoryUsageAfterGc.Code Cache.value.used `|
| `java.lang:type=Memory` | `HeapMemoryUsage*` |
| `java.lang:*,type=MemoryPool` | 	`Usage.*, Name ` |
| `com.axibase.tsd:name=metrics` | 		`MetricsMap.*` |


The left column contains expressions to filter Managements Beans by type and name.
_* is supported as a wildcard_ <br>
The right column contains Management Bean attribute names enabled for collection.
_* is supported as a wildcard_

##### Specify Property type

To the left of the property expression there is a culumn with property types. You can enter custom property type to override the default property type. The default property type is equal to MBean type. <br>
Note that this option is available for the Property command. 

Click Test to validate expressions.
![image](https://axibase.com/wp-content/uploads/2014/06/property_type.png)




