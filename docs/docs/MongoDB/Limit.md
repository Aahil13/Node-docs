---
title: Limit
index: true
icon: hourglass-half
category:
  - Docs-MongoDB

footer: false
---

To limit the result in MongoDB, we use the `limit()` method.

The `limit()` method takes one parameter, a number defining how many documents to return.

Consider you have a "customers" collection:

```json
[
  { "_id": "58fdbf5c0ef8a50b4cdd9a84", "name": "John", "address": "Highway 71"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a85", "name": "Peter", "address": "Lowstreet 4"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a86", "name": "Amy", "address": "Apple st 652"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a87", "name": "Hannah", "address": "Mountain 21"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a88", "name": "Michael", "address": "Valley 345"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a89", "name": "Sandy", "address": "Ocean blvd 2"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a8a", "name": "Betty", "address": "Green Grass 1"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a8b", "name": "Richard", "address": "Sky st 331"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a8c", "name": "Susan", "address": "One way 98"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a8d", "name": "Vicky", "address": "Yellow Garden 2"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a8e", "name": "Ben", "address": "Park Lane 38"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a8f", "name": "William", "address": "Central st 954"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a90", "name": "Chuck", "address": "Main Road 989"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a91", "name": "Viola", "address": "Sideway 1633"}
]
```

### Example

Limit the result to only return 5 documents:

```javascript
// Setup MongoDB connection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
```

### Output

```
[
  { "_id": "58fdbf5c0ef8a50b4cdd9a84", "name": "John", "address": "Highway 71"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a85", "name": "Peter", "address": "Lowstreet 4"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a86", "name": "Amy", "address": "Apple st 652"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a87", "name": "Hannah", "address": "Mountain 21"},
  { "_id": "58fdbf5c0ef8a50b4cdd9a88", "name": "Michael", "address": "Valley 345"}
]
```

As you can see from the result above, only the 5 first documents were returned.