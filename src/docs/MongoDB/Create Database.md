---
title: Create Database
index: true
icon: layer-group
category:
  - Docs-MongoDB

footer: false
---

To create a database in MongoDB, start by creating a `MongoClient` object, then specify a connection URL with the correct IP address and the name of the database you want to create.

MongoDB will create the database if it does not exist and make a connection to it.

### Example

To create a database called "mydb", use the following code:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
```

Save the code above in a file called `demo_create_mongo_db.js` and run the file:

```bash
C:\Users\Your Name>node demo_create_mongo_db.js
```

This will give you the following result:

```
Database created!
```

::: important
In MongoDB, a database is not created until it contains content.

MongoDB waits until you have created a collection (table) with at least one document (record) before it actually creates the database (and collection).
:::