# Docker Job

```java
docker run -d -p 9443:9443 \
   -h axibase-collector \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /home/axibase/jobs/docker.xml:/opt/axibase-collector/import/docker.xml \
  axibase/collector \
   -atsd-url=https://user:*********@atsd_ip_addr:8443 \
   -atsd-tcp-host=atsd_ip_addr \
   -atsd-tcp-port=8081 \
   -job-path=/opt/axibase-collector/import/docker.xml
```
