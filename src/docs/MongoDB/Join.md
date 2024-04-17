---
title: Join
index: true
icon: object-ungroup
category:
  - Docs-MongoDB

footer: false
---

MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.

The $lookup stage lets you specify which collection you want to join with the current collection, and which fields should match.

Consider you have an "orders" collection and a "products" collection:

### orders

```json
[
  { "_id": 1, "product_id": 154, "status": 1 }
]
```

### products

```json
[
  { "_id": 154, "name": "Chocolate Heaven" },
  { "_id": 155, "name": "Tasty Lemons" },
  { "_id": 156, "name": "Vanilla Dreams" }
]
```

### Example

Join the matching "products" document(s) to the "orders" collection:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
```

### Output

```
[
  { "_id": 1, "product_id": 154, "status": 1, "orderdetails": [
    { "_id": 154, "name": "Chocolate Heaven" } ]
  }
]
```

As you can see from the result above, the matching document from the "products" collection is included in the "orders" collection as an array.