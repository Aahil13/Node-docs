---
title: Drop Collection
index: true
icon: square-caret-down
category:
  - Docs-MongoDB

footer: false
---

You can delete a table, or collection as it is called in MongoDB, by using the `drop()` method.

The `drop()` method takes a callback function containing the error object and the `delOK` parameter which returns true if the collection was dropped successfully, otherwise it returns false.

### Example

Delete the "customers" collection:

```javascript
// Setup MongoDB connection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});
```

### Output

```
Collection deleted
```

## db.dropCollection

You can also use the `dropCollection()` method to delete a table (collection).

The `dropCollection()` method takes two parameters: the name of the collection and a callback function.

### Example

Delete the "customers" collection, using `dropCollection()`:

```javascript
// Same setup as previous example

dbo.dropCollection("customers", function(err, delOK) {
  if (err) throw err;
  if (delOK) console.log("Collection deleted");
  db.close();
});
```

### Output

```
Collection deleted
```