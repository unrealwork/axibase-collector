## Docker Metrics

### Collected by [DOCKER Job](jobs/docker.md) 

### Host Metrics

Name | Category | Description
---- | -------- | --------
docker.totalcontainers | | Total number of containers
docker.activecontainers | | Total number of active containers
docker.stoppedcontainers | | Total number of stopped containers
docker.pausedcontainers | | Total number of paused containers
docker.totalImages | | Total number of images
docker.fs.running.size.rootfs | Disk | 
docker.fs.running.size.rw | Disk | 
docker.fs.total.size.rootfs | Disk | 
docker.fs.total.size.rw | Disk | 
docker.cpu.sum.avg.usage.host.percent | CPU | 
docker.cpu.sum.avg.usage.kernel.percent | CPU | 
docker.cpu.sum.avg.usage.total.percent | CPU | 
docker.cpu.sum.avg.usage.user.percent | CPU | 
docker.cpu.sum.host.avg.usage.total.percent | CPU | 
docker.cpu.sum.throttlingdata.periods | CPU | 
docker.cpu.sum.throttlingdata.throttledperiods | CPU | 
docker.cpu.sum.throttlingdata.throttledtime | CPU | 
docker.cpu.sum.usage.kernel | CPU | 
docker.cpu.sum.usage.kernel.percent | CPU | 
docker.cpu.sum.usage.system | CPU | 
docker.cpu.sum.usage.total | CPU | 
docker.cpu.sum.usage.total.percent | CPU | 
docker.cpu.sum.usage.user | CPU | 
docker.cpu.sum.usage.user.percent | CPU | 
docker.sum.diskio.ioservicebytes.read | Disk | 
docker.sum.diskio.ioservicebytes.write | Disk | 
docker.sum.memory.rss | Memory | 
docker.sum.memory.usage | Memory | | 
docker.data.space_available | | 
docker.data.space_used | | 
docker.data.space_used_percent | | 
docker.data.space_total | | 
docker.metadata.space_available | | 
docker.metadata.space_used | | 
docker.metadata.space_used_percent | | 
docker.metadata.space_total | | 

### Container Metrics

Name | Category | Description
---- | -------- | --------
docker.fs.size.rw | Disk | 
docker.fs.size.rootfs | Disk |
docker.process.all | System |
docker.process.filtered | System |
docker.network.rx | Network | 
docker.network.rx_sec | Network | 
docker.network.rxbytes | Network | 
docker.network.rxdropped | Network | 
docker.network.rxerrors | Network | 
docker.network.rxpackets | Network | 
docker.network.tx | Network | 
docker.network.tx_sec | Network | 
docker.network.txbytes | Network | 
docker.network.txdropped | Network | 
docker.network.txerrors | Network | 
docker.network.txpackets | Network | 
docker.memory.activeanon | Memory | 
docker.memory.activefile | Memory | 
docker.memory.cache | Memory | 
docker.memory.failcnt | Memory | 
docker.memory.hierarchical.memorylimit | Memory |  
docker.memory.hierarchical.memswlimit | Memory | 
docker.memory.inactiveanon | Memory | 
docker.memory.inactivefile | Memory | 
docker.memory.limit | Memory | 
docker.memory.mappedfile | Memory | 
docker.memory.maxusage | Memory | 
docker.memory.percent | Memory | 
docker.memory.pgfault | Memory | 
docker.memory.pgmajfault | Memory | 
docker.memory.pgpgin | Memory | 
docker.memory.pgpgout | Memory | 
docker.memory.rss | Memory | 
docker.memory.rsshuge | Memory | 
docker.memory.unevictable | Memory | 
docker.memory.usage | Memory | 
docker.memory.swap | Memory | 
docker.memory.writeback | Memory | 
docker.memory.total.activeanon | Memory | 
docker.memory.total.activefile | Memory | 
docker.memory.total.cache | Memory | 
docker.memory.total.inactiveanon | Memory | 
docker.memory.total.inactivefile | Memory | 
docker.memory.total.mappedfile | Memory | 
docker.memory.total.pgfault | Memory | 
docker.memory.total.pgmajfault | Memory | 
docker.memory.total.pgpgin | Memory | 
docker.memory.total.pgpgout | Memory | 
docker.memory.total.rss | Memory | 
docker.memory.total.rsshuge | Memory | 
docker.memory.total.swap | Memory | 
docker.memory.total.unevictable | Memory | 
docker.memory.total.writeback | Memory | 
docker.diskio.iomerged.* | Disk | 
docker.diskio.ioqueue.* | Disk | 
docker.diskio.ioservicebytes.async | Disk | 
docker.diskio.ioservicebytes.blockread | Disk | 
docker.diskio.ioservicebytes.blockread_sec | Disk | 
docker.diskio.ioservicebytes.blockwrite | Disk | 
docker.diskio.ioservicebytes.blockwrite_sec | Disk | 
docker.diskio.ioservicebytes.read | Disk | 
docker.diskio.ioservicebytes.sync | Disk | 
docker.diskio.ioservicebytes.total | Disk | 
docker.diskio.ioservicebytes.write | Disk | 
docker.diskio.ioservicetime.* | Disk | 
docker.diskio.ioserviced.async | Disk | 
docker.diskio.ioserviced.read | Disk | 
docker.diskio.ioserviced.sync | Disk | 
docker.diskio.ioserviced.total | Disk | 
docker.diskio.ioserviced.write | Disk | 
docker.diskio.iotime.* | Disk | 
docker.diskio.iowaittime.* | Disk | 
docker.diskio.sectors.* | Disk | 
docker.cpu.usage.system | CPU | 
docker.cpu.usage.user | CPU | 
docker.cpu.usage.user.percent | CPU | 
docker.cpu.usage.total | CPU | 
docker.cpu.usage.total.percent | CPU | 
docker.cpu.usage.kernel | CPU | 
docker.cpu.usage.kernel.percent | CPU | 
docker.cpu.usage.percpu | CPU | 
docker.cpu.throttlingdata.periods | CPU | 
docker.cpu.throttlingdata.throttledperiods | CPU | 
docker.cpu.throttlingdata.throttledtime | CPU | 
docker.cpu.avg.usage.total.percent | CPU | 
docker.cpu.avg.usage.allocated.percent | CPU | 
docker.cpu.avg.usage.host.percent | CPU | 
docker.cpu.avg.usage.kernel.percent | CPU | 
docker.cpu.avg.usage.user.percent | CPU | 

### Collected by TCP Job

### Container Metrics

Name | Category | Description
---- | -------- | --------
docker.tcp-connect-status | Network |
docker.tcp-connect-time | Network | 

### Collected by [SCRIPT](jobs/docker/volume-size.md)

### Volume Metrics

Name | Category | Description
---- | -------- | --------
docker.volume.fs.size | Disk | 
docker.volume.total_used | Disk | 
docker.volume.total_used_percent | Disk | 
docker.volume.used | Disk | 
docker.volume.used_percent | Disk | 