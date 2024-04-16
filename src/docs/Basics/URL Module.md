---
title: URL Module
index: true
icon: file-code
category:
  - Docs-Basics

footer: false
---

In this tutorial, we'll explore how Node.js uses the built-in URL module to parse web addresses.

## The Built-in URL Module

The URL module in Node.js helps split a web address into readable parts. To include the URL module, use the `require()` method:

```javascript
var url = require('url');
```

You can parse a web address using the `url.parse()` method, which returns a URL object with each part of the address as properties:

```javascript
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2017&month=february'

var qdata = q.query; // returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); // returns 'february'
```

### Node.js File Server

Now, let's combine our knowledge of parsing query strings with serving files using Node.js as a file server.

#### Step 1: Create HTML Files

Create two HTML files, `summer.html` and `winter.html`, and save them in the same folder as your Node.js files.

##### summer.html

```html
<!DOCTYPE html>
<html>
<body>
<h1>Summer</h1>
<p>I love the sun!</p>
</body>
</html>
```

##### winter.html

```html
<!DOCTYPE html>
<html>
<body>
<h1>Winter</h1>
<p>I love the snow!</p>
</body>
</html>
```

#### Step 2: Create the File Server

Now, create a Node.js file, `demo_fileserver.js`, that opens the requested file and returns its content to the client. If anything goes wrong, throw a 404 error:

```javascript
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```

Remember to initiate the file:

```bash
C:\Users\Your Name>node demo_fileserver.js
```

If you have followed the same steps on your computer, you should see two different results when opening these two addresses:

  - [http://localhost:8080/summer.html](http://localhost:8080/summer.html) will display:
    ```bash
    Summer
    I love the sun!
    ```

  - [http://localhost:8080/winter.html](http://localhost:8080/winter.html) will display:
    ```bash
    Winter
    I love the snow!
    ```
