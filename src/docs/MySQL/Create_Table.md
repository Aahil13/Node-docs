---
title: Create Table
index: true
icon: table
category:
  - Docs-MySQL

footer: false
---

To create a table in MySQL, you can use the "CREATE TABLE" statement. Make sure to define the name of the database when you create the connection.

### Example

Let's create a table named "customers":

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
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
```

Save the code above in a file called "demo_create_table.js" and run the file:

```bash
node demo_create_table.js
```

This will give you the following result:

```
Connected!
Table created
```