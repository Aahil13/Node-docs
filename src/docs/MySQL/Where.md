---
title: Where
index: true
icon: location-crosshairs
category:
  - Docs-MySQL

footer: false
---

Filtering records based on specific criteria is a common task when working with databases. In MySQL, you can achieve this using the "WHERE" statement. Here's how you can do it in Node.js:

### Selecting Records with a Specific Value

To retrieve records that match a certain condition, you can use the "WHERE" clause. Here's an example where we select records with the address "Park Lane 38":

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
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
```

Save this code in a file named "demo_db_where.js" and execute it:

```bash
node demo_db_where.js
```

You'll receive the following result:

```javascript
[
  { id: 11, name: 'Ben', address: 'Park Lane 38'}
]
```

### Using Wildcard Characters

MySQL allows you to use wildcard characters like '%' to represent zero, one, or multiple characters. Here's an example where we select records where the address starts with the letter 'S':

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
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
```

Save this script in a file named "demo_db_where_s.js" and execute it:

```bash
node demo_db_where_s.js
```

You'll get the result:

```javascript
[
  { id: 8, name: 'Richard', address: 'Sky st 331'},
  { id: 14, name: 'Viola', address: 'Sideway 1633'}
]
```

### Escaping Query Values

To prevent SQL injection attacks when using user-provided values in queries, it's crucial to escape those values. MySQL provides methods for this purpose. Here are a couple of examples:

```javascript
// Using mysql.escape()
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

// Using placeholders
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});

// Using multiple placeholders
var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
```