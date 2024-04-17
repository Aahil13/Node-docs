---
title: Limit
index: true
icon: hourglass-half
category:
  - Docs-MySQL

footer: false
---

In MySQL, you can limit the number of records returned from a query using the "LIMIT" statement. Let's explore how to implement this in Node.js:

### Limiting Results

To retrieve a specific number of records from a table, you can use the "LIMIT" statement. Here's an example where we select the first 5 records from the "customers" table:

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
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
```

Save this script in a file named "demo_db_limit.js" and execute it:

```bash
node demo_db_limit.js
```

You'll receive the first 5 records from the "customers" table as the output.

### Starting from Another Position

If you want to retrieve records starting from a specific position, you can use the "OFFSET" keyword along with "LIMIT". Here's an example where we start from the third position and retrieve the next 5 records:

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
  var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
```

Save this script in a file named "demo_db_offset.js" and execute it:

```bash
node demo_db_offset.js
```

You'll receive records starting from the third position.

### Shorter Syntax

MySQL also supports a shorter syntax for specifying the offset and limit. You can use "LIMIT x, y", where "x" is the starting position and "y" is the number of records to retrieve. Here's an example:

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
  var sql = "SELECT * FROM customers LIMIT 2, 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
```

Save this script in a file named "demo_db_short_syntax.js" and execute it. You'll receive records starting from the third position, similar to the previous example.

::: note
Using the "LIMIT" statement in MySQL allows you to control the number of records returned from a query, providing flexibility in managing your data retrieval operations in Node.js.
:::