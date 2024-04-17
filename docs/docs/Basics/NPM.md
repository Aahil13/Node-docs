---
title: NPM
index: true
icon: /assets/icon/npm.svg
category:
  - Docs-Basics

footer: false
---

NPM, short for Node Package Manager, is a package manager designed specifically for Node.js packages or modules. It serves as a central repository where you can find and download thousands of free packages to use in your Node.js projects. You can explore available packages at [www.npmjs.com](https://www.npmjs.com/).

The NPM program comes pre-installed on your computer when you install Node.js, making it readily available for use without any additional setup.

## What is a Package?

In the context of Node.js, a package contains all the files necessary for a module. Modules are JavaScript libraries that you can include and utilize within your projects.

## Download a Package

Downloading a package using NPM is straightforward. Simply open your command line interface and instruct NPM to download the desired package. For example, to download a package named "upper-case", you would use the following command:

```bash
C:\Users\Your Name>npm install upper-case
```

This command will download and install the "upper-case" package onto your system. NPM creates a folder named "node_modules" where the downloaded package is placed. Any future packages you install will also be stored in this folder.

## Using a Package

Once the package is installed, you can easily include it in your Node.js files just like any other module. For instance, to use the "upper-case" package, you would include it in your file as follows:

```javascript
var uc = require('upper-case');
```

Now, you can utilize the functionalities provided by the "upper-case" package in your code. Here's an example of creating a Node.js file that converts the output "Hello World!" into uppercase letters using the "upper-case" package:

```javascript
// demo_uppercase.js

var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);
```

Save the above code in a file named "demo_uppercase.js" and execute it in your command line interface:

```bash
C:\Users\Your Name>node demo_uppercase.js
```
