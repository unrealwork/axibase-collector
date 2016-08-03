# Using axibase_nginx_plus_collector script for monitoring NGINX Plus servers
To collect information from your NGINX Plus servers download the [provided scripts](./src/) and run axibase_nginx_plus_collector.py script with appropriate options.
The help message can be printed after running:

```sh
python axibase_nginx_plus_collector.py --help
```
Currently supported options:

|Option|Extended option|    Description                                         |                 Default               |
|:----:|:-------------:|:------------------------------------------------------:|:-------------------------------------:|
|-a    | --atsd-url    | URL of target ATSD                                     | tcp://localhost:8081                  |
|-i    | --items       | Space separated NGINX Plus servers item list           | http://demo.nginx.com                 |
|-q    | --quiet       | Flag indicating the script will not generate output    | False                                 |
