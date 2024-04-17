---
title: Collection
index: true
icon: table
category:
  - Docs-MongoDB

footer: false
---

A collection in MongoDB is similar to a table in MySQL.

To create a collection in MongoDB, use the `createCollection()` method.

### Example

To create a collection called "customers", use the following code:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
```

Save the code above in a file called `demo_mongodb_createcollection.js` and run the file:

```
Run "demo_mongodb_createcollection.js"

C:\Users\Your Name>node demo_mongodb_createcollection.js
```

This will give you the following result:

```
Collection created!
```

::: important
A collection is not created until it contains content. MongoDB waits until you have inserted a document before it actually creates the collection.
:::