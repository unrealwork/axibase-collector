# Kafka Consumer

To add a consumer in Axibase Collector, navigate to **Data Sources > Kafka Consumers** and select "Add".

### Supported Brokers

[Apache Kafka](https://kafka.apache.org) 0.9.0.x +

## Settings

**Field** | **Description**
--------- | ---------------
Name | Name of consumer.
Server(s) | A list of host/port pairs to use for establishing the initial connection to the Kafka cluster. The client will make use of all servers irrespective of which servers are specified here for bootstrapping—this list only impacts the initial hosts used to discover the full set of servers.<br>This list should be in the form 'host1:port1,host2:port2,...'.<br>Since these servers are just used for the initial connection to discover the full cluster membership (which may change dynamically), this list need not contain the full set of servers (you may want more than one, though, in case a server is down)
Security Protocol | Protocol used to communicate with brokers.
Read Timeout, seconds | The amount of time in seconds to block message reading.
Poll Timeout, ms | The amount of time in milliseconds to block waiting for input.
Properties | Extended consumer properties

## Screenshots

### Configuration
![Kafka Consumer Configuration Example](images/kafka_consumer_configuration.png)

### Test Result
![Kafka Consumer Test Results](images/kafka_consumer_test_results.png)
