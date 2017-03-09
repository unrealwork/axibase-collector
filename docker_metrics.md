## Docker Metrics

### Collected by [DOCKER Job](jobs/docker.md) 

### Host Metrics

Name | Category | Description
---- | -------- | --------
docker.totalcontainers | | Total number of containers.
docker.activecontainers | | Total number of active containers.
docker.stoppedcontainers | | Total number of stopped containers.
docker.pausedcontainers | | Total number of paused containers.
docker.totalImages | | Total number of images.
docker.fs.running.size.rootfs | Disk | The size of the files which have been created or changed for running containers. Σ docker.fs.size.rootfs for running containers.
docker.fs.running.size.rw | Disk | The total size of all the files for all running containers, in bytes. Σ docker.fs.size.rw for running containers.
docker.fs.total.size.rootfs | Disk | The size of the files which have been created or changed for all containers. Σ docker.fs.size.rootfs for all containers.
docker.fs.total.size.rw | Disk | The total size of all the files for all containers, in bytes. Σ docker.fs.size.rw for all containers.
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
docker.fs.size.rw | Disk | The total size of all the files in the container, in bytes. If you were to export the filesystem of the container as a tarball, it would be about that size.
docker.fs.size.rootfs | Disk | The size of the files which have been created or changed, if you compare the container to its base image. Just after creation, this should be zero; as you modify (or create) files, this will increase.
docker.process.all | System |
docker.process.filtered | System |
docker.network.rx | Network | 
docker.network.rx_sec | Network | 
docker.network.rxbytes | Network | Total received bytes on the network interface.
docker.network.rxdropped | Network | Total receive packets dropped on the network interface.
docker.network.rxerrors | Network | Total receive errors on the network interface.
docker.network.rxpackets | Network | Total received packets on the network interface.
docker.network.tx | Network | 
docker.network.tx_sec | Network | 
docker.network.txbytes | Network | Total transmitted bytes on the network interface.
docker.network.txdropped | Network | Total transmitted packets dropped on the network interface.
docker.network.txerrors | Network | Total transmission errors on the network interface.
docker.network.txpackets | Network | Total packets transmitted on the network interface.
docker.memory.activeanon | Memory | The number of bytes of active memory backed by anonymous pages, excluding sub-cgroups.
docker.memory.activefile | Memory | The number of bytes of active memory backed by files, excluding sub-cgroups.
docker.memory.cache | Memory | The number of bytes used for the cache, excluding sub-cgroups.
docker.memory.failcnt | Memory | The number of times the container hit its memory limit.
docker.memory.hierarchical.memorylimit | Memory |  The memory limit in bytes for the container.
docker.memory.hierarchical.memswlimit | Memory | 
docker.memory.inactiveanon | Memory | The number of bytes of inactive memory in anonymous pages, excluding sub-cgroups.
docker.memory.inactivefile | Memory | The number of bytes of inactive memory in file pages, excluding sub-cgroups.
docker.memory.limit | Memory | The memory limit for the container in bytes.
docker.memory.mappedfile | Memory | The number of bytes of mapped files, excluding sub-groups.
docker.memory.maxusage | Memory | The max amount of memory used by container in bytes.
docker.memory.percent | Memory | 
docker.memory.pgfault | Memory | The total number of page faults, excluding sub-cgroups.
docker.memory.pgmajfault | Memory | The number of major page faults, excluding sub-cgroups.
docker.memory.pgpgin | Memory | The number of charging events, excluding sub-cgroups.
docker.memory.pgpgout | Memory | The number of uncharging events, excluding sub-groups.
docker.memory.rss | Memory | The number of bytes of anonymous and swap cache memory (includes transparent hugepages), excluding sub-cgroups.
docker.memory.rsshuge | Memory | The number of bytes of anonymous transparent hugepages, excluding sub-cgroups.
docker.memory.unevictable | Memory | The number of bytes of memory that cannot be reclaimed (mlocked etc), excluding sub-cgroups.
docker.memory.usage | Memory | The current number of bytes used for memory including cache.
docker.memory.swap | Memory | The amount of swap currently used by the processes in this cgroup.
docker.memory.writeback | Memory | The number of bytes being written back to disk, excluding sub-cgroups.
docker.memory.total.activeanon | Memory | The number of bytes of active memory backed by anonymous pages, including sub-cgroups.
docker.memory.total.activefile | Memory | The number of bytes of active memory backed by files, including sub-cgroups.
docker.memory.total.cache | Memory | The number of bytes used for the cache, including sub-cgroups.
docker.memory.total.inactiveanon | Memory | The number of bytes of inactive memory in anonymous pages, including sub-cgroups.
docker.memory.total.inactivefile | Memory |The number of bytes of inactive memory in file pages, including sub-cgroups. 
docker.memory.total.mappedfile | Memory | The number of bytes of mapped files, including sub-groups.
docker.memory.total.pgfault | Memory | The total number of page faults, including sub-cgroups.
docker.memory.total.pgmajfault | Memory | The number of major page faults, including sub-cgroups.
docker.memory.total.pgpgin | Memory | The number of charging events, including sub-cgroups.
docker.memory.total.pgpgout | Memory | The number of uncharging events, including sub-groups.
docker.memory.total.rss | Memory | The number of bytes of anonymous and swap cache memory (includes transparent hugepages), including sub-cgroups.
docker.memory.total.rsshuge | Memory | The number of bytes of anonymous transparent hugepages, including sub-cgroups.
docker.memory.total.swap | Memory | 
docker.memory.total.unevictable | Memory | The number of bytes of memory that cannot be reclaimed (mlocked etc), including sub-cgroups.
docker.memory.total.writeback | Memory | The number of bytes being written back to disk, including sub-cgroups.
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
docker.cpu.usage.system | CPU | Total CPU consumed by container in kernel mode in nanoseconds.
docker.cpu.usage.user | CPU | Total CPU consumed by tasks of the cgroup in user mode in nanoseconds.
docker.cpu.usage.user.percent | CPU | 
docker.cpu.usage.total | CPU | Total CPU time consumed.
docker.cpu.usage.total.percent | CPU | 
docker.cpu.usage.kernel | CPU | Total CPU consumed by tasks of the cgroup in kernel mode in nanoseconds.
docker.cpu.usage.kernel.percent | CPU | 
docker.cpu.usage.percpu | CPU | Total CPU time consumed per core.
docker.cpu.throttlingdata.periods | CPU | The number of periods with throttling active.
docker.cpu.throttlingdata.throttledperiods | CPU | The number of periods when the container hit its throttling limit.
docker.cpu.throttlingdata.throttledtime | CPU | Total time that a container's CPU usage was throttled.
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
docker.volume.fs.size | Disk | Total size (used + available, in bytes) of the file system where the /var/lib/docker directory is located. Collected for the entire docker host.
docker.volume.total_used | Disk | Total space (in bytes) used by the /var/lib/docker directory. Collected for the entire docker host.
docker.volume.total_used_percent | Disk | Percentage of space used by the /var/lib/docker directory in the file system where the /var/lib/docker directory is located. Calculated as docker.volume.total_used/docker.volume.fs.size * 100. Collected for the entire docker host.
docker.volume.used | Disk | Space used by all files in the given volume (in bytes).
docker.volume.used_percent | Disk | Space used by files in the given volume as percentage of the total size of the file system where the /var/lib/docker directory is located. Calculated as docker.volume.used/docker.volume.fs.size * 100.