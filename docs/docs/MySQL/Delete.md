---
title: Delete
index: true
icon: trash
category:
  - Docs-MySQL

footer: false
---

Deleting records from a MySQL table is a common operation when managing data. The "DELETE FROM" statement is used for this purpose. Let's see how to perform record deletion in Node.js:

### Deleting Records with a Specific Condition

To delete records that match a specific condition, you use the "DELETE FROM" statement with a "WHERE" clause. Here's an example where we delete any record with the address "Mountain 21":

```javascript
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
```

Save this script in a file named "demo_db_delete.js" and execute it:

```bash
node demo_db_delete.js
```

You'll receive a message indicating the number of records deleted, like this:

```
Number of records deleted: 1
```

### Understanding the Result Object

When executing a query, a result object is returned. This object provides information about how the query affected the table. Here's an example of the result object:

```javascript
{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 34,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
```

You can access the values of the properties like this:

```javascript
console.log(result.affectedRows);
```

This will output:

```
1
```

> [!tip]
> By using the "DELETE FROM" statement along with specific conditions in the "WHERE" clause, you can effectively remove unwanted records from your MySQL tables using Node.js.