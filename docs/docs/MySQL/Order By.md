---
title: Order By
index: true
icon: arrow-up-z-a
category:
  - Docs-MySQL

footer: false
---

Sorting query results can be vital for presenting data in a meaningful way. MySQL provides the "ORDER BY" statement for this purpose. Let's see how you can utilize it in Node.js:

### Sorting Ascendingly

To sort results in ascending order, you simply use the "ORDER BY" statement without specifying "DESC". Here's an example where we sort results alphabetically by name:

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
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
```

Save this script in a file named "demo_db_orderby.js" and execute it:

```bash
node demo_db_orderby.js
```

You'll receive the result sorted alphabetically by name.

### Sorting Descendingly

To sort results in descending order, you use the "DESC" keyword. Here's an example where we sort results reverse alphabetically by name:

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
  con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
```

Save this script in a file named "demo_db_orderby_desc.js" and execute it:

```bash
node demo_db_orderby_desc.js
```

You'll receive the result sorted in reverse alphabetical order by name.