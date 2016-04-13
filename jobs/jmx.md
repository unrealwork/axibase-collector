# JMX Job

## Overview

JMX (Java Management Extensions) is an [industry-standard](http://java.sun.com/products/JavaManagement/download.html) technology for monitoring and managing Java applications. Java applications instrumented with JMX expose a set of resources called MBeans (Management Beans) with attributes and methods that can be queried and invoked programmatically.

The JMX job in Axibase Collector provides a way to collect MBean attribute values from remote Java applications and store these values in Axibase Time Series Database. All MBean attributes can be stored as properties and attributes with numeric datatype can be stored as time series.

The JMX job can have one or multiple JMX configurations each describing connection parameters and MBean queries. It is common for configurations in a given job to connect to the same Java application.

## JMX Configuration

#### Connection Parameters

| Field       | Description |
|:-------------|:-------------|
| Name | Job configuration name. |
| Host | Hostname or IP address of the remote server running Java application with JMX service. |
| Port | JMX service port.  |
| User Name | 	JMX username. |
| Password | JMX password. |
| Entity | Entity name under which the data will be stored. |
| Service Name | 	JMX service username. The default service name is `jmxrmi`. |

Connection parameters should correspond to `com.sun.management.jmxremote` settings specified by the target Java application.

```sh
ACTIVEMQ_SUNJMX_START="-Dcom.sun.management.jmxremote \
   -Dcom.sun.management.jmxremote.port=1090 \
   -Dcom.sun.management.jmxremote.rmi.port=1090 \
   -Dcom.sun.management.jmxremote.ssl=false \
   -Djava.rmi.server.hostname=NURSWGVML011 \
   -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_BASE}/conf/jmx.password \
   -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_BASE}/conf/jmx.access"
```

To verify connectivity with the remote host, click Test or Viewer buttons. 

Add hostname to /etc/hosts file on the collector machine in case of UnknownHostException.

```java
Failed to retrieve RMIServer stub: javax.naming.ConfigurationException [Root exception is java.rmi.UnknownHostException: Unknown host: NURSWGVML011; nested exception is:  	java.net.UnknownHostException: NURSWGVML011]
```

> By default, entity name is set to Host field. However, you can override entity name in case the DNS hostname is different from the short hostname on which the Java application is running. 

> In addition, entity name can be retrieved dynamically with a composite MBean expression (`mbean>attribute`), for example:

```
java.lang:type=Runtime>SystemProperties.java.rmi.server.hostname.value
```

> If the composite expression fails to produce a value, for example if bean or attribute is not found, the entity name will be set to Host field. If the composite expression retrieves a value sucessfully, it will be stored in Axibase Collector database and will be re-used in case of connection error.

## Query Parameters

| Field | Description |
|:---|:---|
| Command Type | Insert command type: SERIES, PROPERTY or BOTH. <br>If PROPERTY or BOTH is selected, property type field is set to MBean type. <br>If MBean type is null, MBean name is used for property type field. |
| Property Type Prefix  | Prefix added to property type, for example `jmx.activemq.` |
| Excluded Attributes | 	List of attribute names excluded from property commands, for example `DynamicDestinationProducers_*, QueueProducers_*` |
| Metric Prefix | Common prefix added to metric names, for example `jmx.activemq.`  |
| Series Tags | Predefined tags added to series commands |
| Excluded Metrics | List of attribute names excluded from series commands, supports wildcards. |

#### Queries

Each configuration includes a list of MBean queries consisting of two parts:

* [Object Name](https://docs.oracle.com/javase/7/docs/api/javax/management/ObjectName.html) pattern
* Attribute Name pattern or list

```
org.apache.activemq:brokerName=localhost,type=Broker   -->     TotalProducerCount, TotalMessageCount
```

Object Name pattern matches all MBean instances of specified type and name. The Attribute Name pattern locates attributes of those matched MBeans whose values will be retrieved and sent to the database. List of attribute names can be specified as an alternative to Attribute Name pattern.

##### Wildcards
You can manually modify the list of collected attributes by replacing specific attribute names with wildcards. For example, to collect all numeric attributes from MBean java.lang:*,type=GarbageCollector, specify * in the corresponding attribute selector field.

| Expression        | Attribute  |
|:-------------|:-------------|
| `java.lang:*,type=GarbageCollector` | `CollectionCount, CollectionTime, LastGcInfo.GcThreadCount`|
| `java.lang:type=Memory` | `HeapMemoryUsage*` |
| `java.lang:*,type=MemoryPool` | 	`Usage.*, Name ` |
| `com.axibase.tsd:name=metrics` | 		`MetricsMap.*` |


The left column contains expressions to filter Managements Beans by type and name.
_* is supported as a wildcard_ <br>
The right column contains Management Bean attribute names enabled for collection.
_* is supported as a wildcard_


Special processing for PROPERTY command:

- Attribute Name pattern/list is ignored for property commands. Property commands collect all attributes of the matched beans.
- The default value for property `type` field is set to MBean type, for instanance, to `Broker` in the example above. To override the default type, enter a custom value in Property Type Column.

![image](https://axibase.com/wp-content/uploads/2014/06/property_type.png)

## JMX Configuration Example

![](https://axibase.com/wp-content/uploads/2014/06/jmx_config.png)


## Viewer

Click Viewer to open a tree-based MBean navigator displaying available Management Beans and their attributes.

Select a checkbox next to an attribute name to add to the list of collected attributes. Modify the expression by replacing specific Object Name fields with wildcards, if necessary.

![JMX Viewer](https://axibase.com/wp-content/uploads/2014/06/jmx_viewer.png)






