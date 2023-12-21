---
title: Prepare a MongoDB database
layout: default
nav_order: 1
parent: Getting Started
---

# Prepare a MongoDB database

```shell
mongosh <<!
use mean;
db.createUser(
  {
    user: "mean",
    pwd: "mean",
    roles: [
       { role: "readWrite", db: "mean" }
    ]
  }
);
!
``` 

Later, MongoDB database can be accessed by using the connection string:

```
mongodb://mean:mean@localhost:27017/mean?authSource=mean
```