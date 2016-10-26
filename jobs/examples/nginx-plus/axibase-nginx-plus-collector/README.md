# Using `axibase_nginx_plus_collector` Script for Monitoring NGINX Plus Servers
To collect information from your NGINX Plus servers, download the [provided scripts](./src/) and run the `axibase_nginx_plus_collector.py` script with the appropriate options.
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
