```sh
docker run \
  -d \
  -p 8088:8088 \
  -p 8443:8443 \
  -p 8081:8081 \
  -p 8082:8082/udp \
  -e ATSD_USER_NAME=myuser \
  -e ATSD_USER_PASSWORD=mypassword \
  -h atsd \
  --name=atsd \
  --restart=always \
  axibase/atsd:latest
```  
