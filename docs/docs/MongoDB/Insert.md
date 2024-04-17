---
title: Insert
index: true
icon: file-arrow-down
category:
  - Docs-MongoDB

footer: false
---

To insert a record, or document as it is called in MongoDB, into a collection, we use the `insertOne()` method.

A document in MongoDB is the same as a record in MySQL.

The first parameter of the `insertOne()` method is an object containing the name(s) and value(s) of each field in the document you want to insert.

It also takes a callback function where you can work with any errors, or the result of the insertion.

### Example
To insert a document in the "customers" collection, use the following code:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
```

Save the code above in a file called `demo_mongodb_insert.js` and run the file:

```
Run "demo_mongodb_insert.js"

C:\Users\Your Name>node demo_mongodb_insert.js
```

This will give you the following result:

```
1 document inserted
```
::: note
If you try to insert documents into a collection that does not exist, MongoDB will create the collection automatically.
:::

## Insert Multiple Documents

To insert multiple documents into a collection in MongoDB, we use the `insertMany()` method.

The first parameter of the `insertMany()` method is an array of objects containing the data you want to insert.

It also takes a callback function where you can work with any errors, or the result of the insertion.

### Example

To insert multiple documents in the "customers" collection, use the following code:

```javascript
// Same setup as previous example

var myobj = [
  { name: 'John', address: 'Highway 71'},
  // Additional documents...
];

dbo.collection("customers").insertMany(myobj, function(err, res) {
  if (err) throw err;
  console.log("Number of documents inserted: " + res.insertedCount);
  db.close();
});
```

Save the code above in a file called `demo_mongodb_insert_multiple.js` and run the file.

This will give you the result:

```
Number of documents inserted: 14
```

### The Result Object

When executing the `insertMany()` method, a result object is returned.

The result object contains information about how the insertion affected the database.

The object returned from the example above looks like this:

```javascript
{
  result: { ok: 1, n: 14 },
  // Additional properties...
}
```

The values of the properties can be displayed like this:

```javascript
console.log(res.insertedCount);
```

Which will produce this result:

```
14
```
::: info
If you do not specify an `_id` field, then MongoDB will add one for you and assign a unique id for each document.

In the example above, no `_id` field was specified, and MongoDB assigned a unique `_id` for each document.

If you do specify the `_id` field, the value must be unique for each document.
:::
