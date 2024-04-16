---
title: Upload Files
index: true
icon: file-export
category:
  - Docs-Basics

footer: false
---

In this tutorial, we'll explore how to upload files to your Node.js server using the Formidable module.

## The Formidable Module

The "Formidable" module is an excellent tool for handling file uploads in Node.js applications. To use Formidable, you can install it via NPM:

```bash
C:\Users\Your Name>npm install formidable
```

Once installed, you can include Formidable in your application:

```javascript
var formidable = require('formidable');
```

### Upload Files

Now, let's create a web page in Node.js that allows users to upload files to your server.

#### Step 1: Create an Upload Form

First, create a Node.js file that generates an HTML form with an upload field:

```javascript
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);
```

#### Step 2: Parse the Uploaded File

To handle the uploaded file, include the Formidable module:

```javascript
var formidable = require('formidable');
```

Then, parse the uploaded file:

```javascript
var form = new formidable.IncomingForm();
form.parse(req, function (err, fields, files) {
  res.write('File uploaded');
  res.end();
});
```

#### Step 3: Save the File

Once the file is uploaded and parsed, it's placed in a temporary folder on your server. To move it to a permanent location, you can use the File System module:

```javascript
var fs = require('fs');

var oldpath = files.filetoupload.path;
var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
fs.rename(oldpath, newpath, function (err) {
  if (err) throw err;
  res.write('File uploaded and moved!');
  res.end();
});
```