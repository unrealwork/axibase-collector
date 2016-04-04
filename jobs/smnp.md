#SNMP

SNMP (Simple Network Management Protocol) is a standard internet protocol for managing devices connected to IP networks. [Learn more about SNMP here.](https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol "SNMP") <br> The Collector supports the SNMP protocol for data retrieval.

## Creating SNMP Job

| FIELD          | DESCRIPTION  |
| :------------- |:-------------|
| Enabled        | Determines if the job is active or disabled |
| Name           | Name of the collector job      | 
| Cron Expression| Cron expression determining how frequently the collector job runs |
| ATSD | ATSD server that will ingest the data |

#### SNMP Job Example

![SNMP](http://axibase.com/wp-content/uploads/2015/01/snmp-job.png)

## Configuring SNMP

| FIELD          | DESCRIPTION  |
| :------------- |:-------------|
| Configuration Name | Name of current configuration |
| Transport | TCP or UDP protocol, depending on the configuration of the queried snmp service | 
| Port | TCP or UDP port, depending on the configuration of the queried snmp service |
| MIB Name | Choose one of the uploaded MIB files from a drop-down list.<br> In order for your MIB to appear on the list, navigate to Admin > SNMP MIBs and upload your MIB |
| Timeout, seconds | Number of seconds after which the query will be interrupted, -1 is unlimited |
| Retries | Number of retries to establish connection |
| Maximum Repetitions | This specifies the maximum number of iterations over the repeating variables |
| Non Repeaters | It specifies the number of supplied variables that should not be iterated over |
| Version | SNMP version |
| Security Name | Name of user for the 3rd version of the protocol with security support |
| Authentication Pass Phrase | Password of phrase for authentication | 
| Authentication Protocol | Encryption protocol for authentication.<br >Possible values: MD5, SHA |
| Privacy Pass Phrase	| Passphrase for data transmission |
| Privacy Protocol | Protocol for data encryption.<br> Possible values: DES, TRIPLE_DES, AES128, AES192, AES256 |
| Security Level | 	Security type. <br> Possible values:<br>NO_AUTH_NO_PRIV (no authentication and no encryption) <br> AUTH_NO_PRIV (authentication and no encryption) <br> AUTH_PRIV (with authentication and encryption) |
| Metric Prefix | Prefix added to metric names, used to identify and group the metrics |
| Collection | Queried SNMP services |
| Tag Names | Source of tags |
| Metric Columns | Column containing the metric values |

#### SNMP Configuration Example


![SNMP Configuration](http://axibase.com/wp-content/uploads/2015/01/SNMP.png)
