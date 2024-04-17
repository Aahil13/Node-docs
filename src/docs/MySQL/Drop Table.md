---
title: Drop Table
index: true
icon: square-caret-down
category:
  - Docs-MySQL

footer: false
---

Deleting a table in MySQL can be done using the "DROP TABLE" statement. Here's how you can accomplish this in Node.js:

### Deleting a Table

To delete an existing table, you use the "DROP TABLE" statement. Here's an example where we delete the table "customers":

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
  var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});
```

Save this script in a file named "demo_db_drop_table.js" and execute it:

```bash
node demo_db_drop_table.js
```

You'll receive the message:

```
Table deleted
```

### Dropping Only if Exist

If you want to avoid getting an error when attempting to delete a table that does not exist, you can use the "IF EXISTS" keyword. Here's an example:

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
  var sql = "DROP TABLE IF EXISTS customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});
```

Save this script in a file named "demo_db_drop_table_if.js" and execute it:

```bash
node demo_db_drop_table_if.js
```

If the table exists, you'll receive the same message as before: "Table deleted". If the table does not exist, the script will execute without errors, and you'll receive no messages.