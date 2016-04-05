# INSTALLING AXIBASE COLLECTOR ON DOCKER
### Requirements
Docker version 1.6+ For more information on how to install Docker, see [installation guidelines](https://docs.docker.com/engine/installation/) on the Docker official website.
### Resources
Axibase Collector Dockerfile on GitHub: [https://github.com/axibase/docker-axibase-collector](https://github.com/axibase/docker-axibase-collector)
#### Step 1: Downloading and Deploying Axibase Collector Docker Container
To download and launch Axibase Collector, run the following command in the console: 
```sh
sudo docker run \
-d \
-p 9443:9443 \
-h axibase-collector \
--name="axibase-collector" \
--restart=always \
axibase/collector
```
Check that the parameters are correct: <br>
`-h` sets the hostname of the Docker container where you want to install Axibase Collector. <br>
`--name` sets the name of the Docker container where you want to install Axibase Collector. <br>
Note that the process may take a few minutes.
#### Step 2: Checking Deployment Progress
In the console, run the following command:
```sh
sudo docker exec -it axibase-collector tail -f /opt/axibase-collector/logs/axibase-collector.log
```
Wait until the following log file message appears:
```sh
FrameworkServlet 'dispatcher': initialization completed.
```
This message indicates that deployment is complete.
#### Step 3: Accessing Axibase Collector
In web browser, specify address of Axibase Collector web interface: `https://localhost:port`. <br> `Localhost` stands for IP address of the machine where Docker container is installed. <br> `Port` stands for the port number to connect to Axibase Collector. Use port `9443`. <br> For example, `https://192.168.1.5:9443`
#### Known Issues
If Axibase Collector fails to start in the container, verify that your Docker host runs on a supported kernel level. 
```sh
uname -a 
3.13.0-79.123+ 
3.19.0-51.57+ 
4.2.0-30.35+ 
```
See "Latest Quick Workarounds" for Docker issue #18180 on [https://github.com/docker/docker/issues/18180](https://github.com/docker/docker/issues/18180).
