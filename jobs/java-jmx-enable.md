# Enabling JMX in Java Applications

## Examples

### Apache ActiveMQ Server

#### Reference Information

* Configuring JMX in ActiveMQ: [activemq.apache.org/jmx.html](http://activemq.apache.org/jmx.html)

#### Configure JMX properties

* Change to ActiveMQ installation directory.

```sh
cd /opt/apache-activemq-5.13.1
```

* Modify JMX settings in ActiveMQ JVM launch options. <br>Search for ACTIVEMQ_SUNJMX_START setting and change it as specified below.

##### ActiveMQ 5.11.x and later:

```sh
vi ./bin/env
```

```properties
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.port=1090"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.rmi.port=1090"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.ssl=false"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Djava.rmi.server.hostname=activemq_hostname"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_CONF}/jmx.password"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_CONF}/jmx.access"
```

##### ActiveMQ 5.10.x and earlier:

```sh
vi ./bin/activemq
```

```properties
ACTIVEMQ_SUNJMX_START="-Dcom.sun.management.jmxremote \
   -Dcom.sun.management.jmxremote.port=1090 \
   -Dcom.sun.management.jmxremote.rmi.port=1090 \
   -Dcom.sun.management.jmxremote.ssl=false \
   -Djava.rmi.server.hostname=activemq_hostname \
   -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_BASE}/conf/jmx.password \
   -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_BASE}/conf/jmx.access"
```

> Replace activemq_hostname with full hostname or IP address of the ActiveMQ server.
> This should be the same hostname that Axibase Collector will be using when connecting to ActiveMQ server.

The result should be as shown on the image below:

![SUN_JMX_START_IMAGE](https://axibase.com/wp-content/uploads/2016/03/very_new_screen.png)

#### Setup JMX user credentials

Change to ./conf directory. Add/edit files as follows:

jmx.access:

```
# The "monitorRole" role has readonly access.
monitorRole readonly
```

jmx.password:

```
# The "monitorRole" role has password "abc123".
monitorRole abc123
```

#### Secure password file

Secure access to jmx.password file by restricting permissions: 

```sh
chmod 600 ./conf/jmx.password
```

#### Restart ActiveMQ server.

```sh
./bin/activemq stop
./bin/activemq start
```
