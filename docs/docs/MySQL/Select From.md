---
title: Select From
index: true
icon: check-double
category:
  - Docs-MySQL

footer: false
---


To fetch data from MySQL tables using Node.js, you'll utilize the powerful "SELECT" statement. 

### Retrieving All Records

When you want to fetch all records from a table, you can employ the "SELECT * FROM" syntax. Here's a simple example:

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
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
```

Save this script in a file named "demo_db_select.js" and execute it with:

```bash
node demo_db_select.js
```

You'll receive a result similar to:

```javascript
[
  { id: 1, name: 'John', address: 'Highway 71'},
  { id: 2, name: 'Peter', address: 'Lowstreet 4'},
  // Additional records...
]
```

### Selecting Specific Columns

If you only need certain columns from a table, you can specify them explicitly in the "SELECT" statement. Here's an example:

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
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
```

Save this script in a file named "demo_db_select_columns.js" and run it similarly:

```bash
node demo_db_select_columns.js
```

You'll receive a result with only the specified columns:

```javascript
[
  { name: 'John', address: 'Highway 71'},
  { name: 'Peter', address: 'Lowstreet 4'},
  // Additional records...
]
```

### Understanding the Result Object

The result object returned by the query contains each row as an object within an array. You can access specific values easily. For example, to retrieve the address of the third record:

```javascript
console.log(result[2].address);
```

This will output:

```
Apple st 652
```

### Exploring the Fields Object

Additionally, the fields object provides information about each field in the result. For instance, to obtain details about the fields retrieved, you can access them like so:

```javascript
console.log(fields);
```

This will provide an array containing field information, allowing you to interact with the data more effectively.