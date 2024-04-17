---
title: Delete
index: true
icon: trash
category:
  - Docs-MongoDB

footer: false
---

To delete a record, or document as it is called in MongoDB, we use the `deleteOne()` method.

The first parameter of the `deleteOne()` method is a query object defining which document to delete.

### Example

Delete the document with the address "Mountain 21":

```javascript
// Setup MongoDB connection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
```

### Output

```
1 document deleted
```

## Delete Many

To delete more than one document, use the `deleteMany()` method.

The first parameter of the `deleteMany()` method is a query object defining which documents to delete.

### Example

Delete all documents where the address starts with the letter "O":

```javascript
// Same setup as previous example

var myquery = { address: /^O/ };
dbo.collection("customers").deleteMany(myquery, function(err, obj) {
  if (err) throw err;
  console.log(obj.result.n + " document(s) deleted");
  db.close();
});
```

### Output

```
2 document(s) deleted
```

## The Result Object

The `deleteMany()` method returns an object which contains information about how the execution affected the database.

The `result` object inside contains information about the execution, including the number of documents affected.

You can use this object to return the number of deleted documents:

### Example

Return the number of deleted documents:

```javascript
console.log(obj.result.n);
```

### Output

```
2
```