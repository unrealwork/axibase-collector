# Collector Account

Follow these steps to create a separate user account (`collector` account) with limited permissions.
We recommend that you use `collector` credentials instead of administrator's for all data collection tasks.

* Login into ATSD as administrator
* Open **Admin>Users>User Groups>Create** page and create `collectors` group with **[All Entities] Write** permission.

![collectors group](all-entities-write.png)

* Open **Admin>Users>Create** page and create `collector` user with **API_DATA_WRITE** and **API_META_WRITE** roles. 
* Click on `collectors` group to add `collector` user as the member of the this group.

![collector user](collector-user.png)
