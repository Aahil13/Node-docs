---
title: Install MySQL
index: true
icon: download
category:
  - Docs-MySQL
order: 2

footer: false
---

Node.js can be used in database applications, and one of the most popular databases is MySQL.

### MySQL Database Setup

To experiment with the code examples, you should have MySQL installed on your computer. You can download a free MySQL database from [MySQL's official website](https://www.mysql.com/downloads/).

### Install MySQL Driver

To access a MySQL database with Node.js, you need a MySQL driver. In this tutorial, we'll use the "mysql" module, which can be downloaded from NPM.

To download and install the "mysql" module, open your Command Terminal and execute the following command:

```bash
npm install mysql
```

Now you have downloaded and installed the MySQL database driver, which Node.js can use to manipulate the MySQL database.

### Create Connection

Start by creating a connection to the database. Use the username and password from your MySQL database.

#### demo_db_connection.js

```javascript
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
```

Save the code above in a file called "demo_db_connection.js" and run the file:

```bash
node demo_db_connection.js
```

This will give you the following result:

```bash
Connected!
```

Now you can start querying the database using SQL statements.

### Query a Database

Use SQL statements to read from or write to a MySQL database. This is also called querying the database.

The connection object created in the example above has a method for querying the database:

```javascript
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
```

The `query` method takes an SQL statement as a parameter and returns the result.

That's it! You have now connected to a MySQL database from Node.js. Learn how to read, write, delete, and update a database in the [next chapters](/docs/MySQL/Create_Database.md).