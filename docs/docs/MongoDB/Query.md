---
title: Query
index: true
icon: location-crosshairs
category:
  - Docs-MongoDB

footer: false
---

When finding documents in a collection, you can filter the result by using a query object. The first argument of the `find()` method is a query object, which is used to limit the search.

## Example

To find documents with the address "Park Lane 38":

```javascript
// Setup MongoDB connection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
```

## Output

```
[
  { _id: ..., name: 'Ben', address: 'Park Lane 38' }
]
```

## Filter With Regular Expressions

Regular expressions can be used to find exactly what you are searching for. They can only be used to query strings.

To find documents where the "address" field starts with the letter "S", use the regular expression `/^S/`:

### Example

```javascript
// Same setup as previous example

var query = { address: /^S/ };
dbo.collection("customers").find(query).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});
```

### Output

```
[
  { _id: ..., name: 'Richard', address: 'Sky st 331' },
  { _id: ..., name: 'Viola', address: 'Sideway 1633' }
]
```