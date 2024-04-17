---
title: Update
index: true
icon: upload
category:
  - Docs-MongoDB

footer: false
---

You can update a record, or document as it is called in MongoDB, by using the `updateOne()` method.

The first parameter of the `updateOne()` method is a query object defining which document to update.

Note: If the query finds more than one record, only the first occurrence is updated.

The second parameter is an object defining the new values of the document.

### Example

Update the document with the address "Valley 345" to name="Mickey" and address="Canyon 123":

```javascript
// Setup MongoDB connection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
```

### Output

```
1 document updated
```

## Update Only Specific Fields

When using the `$set` operator, only the specified fields are updated:

### Example

Update the address from "Valley 345" to "Canyon 123":

```javascript
// Same setup as previous example

var myquery = { address: "Valley 345" };
var newvalues = { $set: { address: "Canyon 123" } };
dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
  if (err) throw err;
  console.log("1 document updated");
  db.close();
});
```

## Update Many Documents

To update all documents that meet the criteria of the query, use the `updateMany()` method.

### Example

Update all documents where the name starts with the letter "S":

```javascript
// Same setup as previous examples

var myquery = { address: /^S/ };
var newvalues = { $set: { name: "Minnie" } };
dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
  if (err) throw err;
  console.log(res.result.nModified + " document(s) updated");
  db.close();
});
```

### Output

```
2 document(s) updated
```

## The Result Object

The `updateOne()` and the `updateMany()` methods return an object which contains information about how the execution affected the database.

Most of the information is not important to understand, but one object inside the object is called "result" which tells us if the execution went OK, and how many documents were affected.

The result object looks like this:

```json
{ "n": 1, "nModified": 2, "ok": 1 }
```

You can use this object to return the number of updated documents:

### Example

Return the number of updated documents:

```javascript
console.log(res.result.nModified);
```

### Output

```
2
```