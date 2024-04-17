---
title: Update
index: true
icon: upload
category:
  - Docs-MySQL

footer: false
---

Updating existing records in a MySQL table is accomplished using the "UPDATE" statement. Let's see how to perform record updates in Node.js:

### Updating Records with a Specific Condition

To update records that match a specific condition, you use the "UPDATE" statement with a "WHERE" clause. Here's an example where we update the address column from "Valley 345" to "Canyon 123":

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
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
```

Save this script in a file named "demo_db_update.js" and execute it:

```bash
node demo_db_update.js
```

You'll receive a message indicating the number of records updated, like this:

```
1 record(s) updated
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
  message: '(Rows matched: 1 Changed: 1 Warnings: 0)',
  protocol41: true,
  changedRows: 1
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
>[!tip]
> By using the "UPDATE" statement along with specific conditions in the "WHERE" clause, you can efficiently modify existing records in your MySQL tables using Node.js.