# JMX

JMX (Java Management Extensions) is used for managing and monitoring Java applications, devices, system objects, and service-orientated networks.

JMX protocol is supported by the Axibase Collector.

| FIELD        | DESCRIPTION  |
|:-------------|:-------------|
| Enabled     | Determines if the job is enabled or disabled. |
| Name     | Collector job name. |
| Cron Expression | Cron expression determining how frequently the collector job runs.  |
| ATSD | 	ATSD server for sending the data. |

![JMX Job](http://axibase.com/wp-content/uploads/2015/01/jmx-job.png)

###JMX Configuration

| FIELD        | DESCRIPTION  |
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

Click on Viewer tab to open a tree-based JMX viewer displaying available JMX Management Beans and their attributes. Click on row checkbox to enable collection of the selected attribute.

![JMX Viewer](http://axibase.com/wp-content/uploads/2015/08/jmx_viewer.png)

You can manually modify the list of collected attributes by replacing specific attribute names with wildcards. For example, to collect all numeric attributes from MBean java.lang:*,type=GarbageCollector, specify * in the corresponding attribute selector field.

| Expression        | Attribute  |
|:-------------|:-------------|
| `java.lang:*,type=GarbageCollector` | `CollectionCount, CollectionTime, LastGcInfo.GcThreadCount`, <br> `LastGcInfo.memoryUsageAfterGc.Code Cache.value.committed,` <br> `LastGcInfo.memoryUsageAfterGc.Code Cache.value.init`, <br> `LastGcInfo.memoryUsageAfterGc.Code Cache.value.max`,<br> `LastGcInfo.memoryUsageAfterGc.Code Cache.value.used `|
| `java.lang:type=Memory` | `HeapMemoryUsage*` |
| `java.lang:*,type=MemoryPool` | 	`Usage.*, Name ` |
| `com.axibase.tsd:name=metrics` | 		`MetricsMap.*` |


The left column specifies expressions to filter Managements Beans by type and name.
_* is supported as a wildcard_
The right column contains Management Bean attribute names enabled for collection.
_* is supported as a wildcard_

In the Property type column you can specify property type you can use instead of the default type that is equal to MBean type for the Propery command.  

Click on Test to validate expressions.

![](https://axibase.com/wp-content/uploads/2015/08/property_type.png)
