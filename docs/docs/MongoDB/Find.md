---
title: Find
index: true
icon: magnifying-glass
category:
  - Docs-MongoDB

footer: false
---

In MongoDB, we use the `find` and `findOne` methods to retrieve data from a collection, similar to how the `SELECT` statement is used in MySQL databases.

## Find One

To select data from a collection in MongoDB, we can use the `findOne()` method, which returns the first occurrence in the selection.

### Example

To find the first document in the "customers" collection, use the following code:

```javascript
// Setup MongoDB connection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
```

### Output

```
Company Inc.
```

## Find All

To select all documents from a collection, use the `find()` method. It returns all occurrences in the selection.

### Example

To find all documents in the "customers" collection, use the following code:

```javascript
// Same setup as previous example

dbo.collection("customers").find({}).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});
```

### Output

```
[
  { _id: ..., name: 'John', address: 'Highway 71'},
  // Additional documents...
]
```

## Find Some

You can specify a projection object as the second parameter of the `find()` method to include or exclude certain fields in the result.

### Example

To return only the "name" and "address" fields of all documents in the "customers" collection:

```javascript
// Same setup as previous example

dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});
```

### Output

```
[
  { name: 'John', address: 'Highway 71'},
  // Additional documents...
]
```

::: warning
You cannot specify both 0 and 1 values in the same object, except for the `_id` field. If you specify a field with the value 0, all other fields get the value 1, and vice versa.
:::