---
title: File System
index: true
icon: file
category:
  - Docs-Basics

footer: false
---

In this tutorial, we'll explore how to work with the file system on your computer using Node.js.

## Node.js as a File Server

The Node.js file system module allows you to perform various operations on files, such as reading, creating, updating, deleting, and renaming files. To include the File System module, use the `require()` method:

```javascript
var fs = require('fs');
```

## Read Files

The `fs.readFile()` method is used to read files on your computer. Let's see an example of reading an HTML file:

```javascript
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```

## Create Files

The File System module provides methods for creating new files, such as `fs.appendFile()`, `fs.open()`, and `fs.writeFile()`. Let's see examples of creating new files:

```javascript
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

```javascript
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
```

```javascript
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

## Update and Delete Files

The File System module also provides methods for updating and deleting files, such as `fs.appendFile()`, `fs.writeFile()`, and `fs.unlink()`. Let's see examples of updating and deleting files:

```javascript
var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
```

```javascript
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
```

```javascript
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```

## Rename Files

To rename a file, use the `fs.rename()` method:

```javascript
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
```

You can perform various file operations easily using these methods 📁