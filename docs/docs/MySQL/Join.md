---
title: Join
index: true
icon: object-ungroup
category:
  - Docs-MySQL

footer: false
---

In MySQL, you can combine rows from two or more tables based on a related column using the JOIN statement. Let's see how to achieve this in a Node.js environment:

### Joining Tables

Suppose you have two tables: "users" and "products". Here's how you can join them based on the users' favorite product:

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
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
```

This script will select records with a match in both tables and display the user's name along with their favorite product.

### Left Join

If you want to return all users, regardless of whether they have a favorite product or not, you can use the LEFT JOIN statement:

```sql
SELECT users.name AS user,
products.name AS favorite
FROM users
LEFT JOIN products ON users.favorite_product = products.id;
```

This query will return all users and their favorite products, including those who don't have a favorite product.

### Right Join

Similarly, if you want to return all products and the users who have them as their favorite, even if no user has them as their favorite, you can use the RIGHT JOIN statement:

```sql
SELECT users.name AS user,
products.name AS favorite
FROM users
RIGHT JOIN products ON users.favorite_product = products.id;
```

This query will return all products and the users who have them as their favorite, including products without any user favorites.

In Node.js, you can execute these queries using the `mysql` package and handle the results accordingly. These join operations allow you to combine data from multiple tables, providing richer insights into your database relationships.