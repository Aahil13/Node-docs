---
title: Create Database
index: true
icon: layer-group
category:
  - Docs-MySQL

footer: false
---

To create a database in MySQL, you can use the "CREATE DATABASE" statement.

### Example

Let's create a database named "mydb":

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
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
```

Save the code above in a file called "demo_create_db.js" and run the file:

```bash
node demo_create_db.js
```

This will give you the following result:

```
Connected!
Database created
```