---
title: Sort
index: true
icon: sort
category:
  - Docs-MongoDB

footer: false
---

Use the `sort()` method to sort the result in ascending or descending order. The `sort()` method takes one parameter, an object defining the sorting order.

### Example

Sort the result alphabetically by name:

```javascript
// Setup MongoDB connection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: 1 }; // Sort by name in ascending order
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
```

### Output

```
[
  { _id: ..., name: 'Amy', address: 'Apple st 652'},
  { _id: ..., name: 'Ben', address: 'Park Lane 38'},
  ...
]
ADVERTISEMENT

## Sort Descending

Use the value `-1` in the sort object to sort descending.

```javascript
var mysort = { name: -1 }; // Sort by name in descending order
```

### Example

Sort the result reverse alphabetically by name:

```javascript
// Same setup as previous example

var mysort = { name: -1 }; // Sort by name in descending order
dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});
```

### Output

```
[
  { _id: ..., name: 'William', address: 'Central st 954'},
  { _id: ..., name: 'Viola', address: 'Sideway 1633'},
  ...
]
```