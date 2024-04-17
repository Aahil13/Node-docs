---
title: Insert Into
index: true
icon: file-arrow-down
category:
  - Docs-MySQL

footer: false
---

To add data to your MySQL tables using Node.js, you'll employ the "INSERT INTO" statement. Below, we'll guide you through the process:

## Inserting into a Single Record

Let's start with a basic example. Imagine you have a table named "customers" and you want to insert a single record. Here's how you can do it:

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

  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
```

To execute this code, save it in a file named "demo_db_insert.js", then run the file using:

```bash
node demo_db_insert.js
```

Upon successful execution, you should see:

```
Connected!
1 record inserted
```

## Inserting Multiple Records

If you need to insert multiple records at once, you can utilize arrays. Here's an example:

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

  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
```

Save this code in a file named "demo_db_insert_multiple.js" and run it using:

```bash
node demo_db_insert_multiple.js
```

You should see:

```
Connected!
Number of records inserted: 14
```

## Understanding the Result

After executing a query, a result object is returned. This object contains information about the query's impact on the table. For instance, it provides details like the number of affected rows.

Here's how you can access the number of affected rows:

```javascript
console.log(result.affectedRows);
```

This will output:

```
14
```

## Retrieving Inserted IDs

For tables with an auto-increment ID field, you can retrieve the ID of the inserted row. Here's an example:

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
  var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});
```

Running this code will give you output similar to:

```
1 record inserted, ID: 15
```

By following these steps, you can efficiently insert data into your MySQL tables using Node.js. 

:::tip Feel free to experiment with different scenarios to enhance your understanding of the process.
:::
