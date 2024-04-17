---
title: Modules
index: true
icon: server
category:
  - Docs-Basics

footer: false
---

In this tutorial, we'll explore how modules work in Node.js, including built-in modules and how to create and include your own modules.

## What is a Module in Node.js?

In Node.js, modules are similar to JavaScript libraries. They consist of a set of functions or pieces of code that you can include in your application.

## Built-in Modules

Node.js comes with a rich set of built-in modules that you can use right out of the box, without any additional installation. These modules provide essential functionalities for various tasks. 

Here's a list of some built-in modules available in Node.js version 6.10.3:

| Module         | Description                                                 |
|----------------|-------------------------------------------------------------|
| assert         | Provides a set of assertion tests                            |
| buffer         | Handles binary data                                         |
| child_process  | Runs a child process                                        |
| cluster        | Splits a single Node process into multiple processes        |
| crypto         | Handles OpenSSL cryptographic functions                     |
| dgram          | Provides implementation of UDP datagram sockets             |
| dns            | Performs DNS lookups and name resolution functions           |
| domain         | ***Deprecated.*** Handles unhandled errors                      |
| events         | Handles events                                              |
| fs             | Handles the file system                                     |
| http           | Makes Node.js act as an HTTP server                         |
| https          | Makes Node.js act as an HTTPS server                        |
| net            | Creates servers and clients                                 |
| os             | Provides information about the operating system             |
| path           | Handles file paths                                          |
| punycode       | ***Deprecated.*** A character encoding scheme                   |
| querystring    | Handles URL query strings                                   |
| readline       | Handles readable streams one line at a time                 |
| stream         | Handles streaming data                                      |
| string_decoder | Decodes buffer objects into strings                         |
| timers         | Executes a function after a given number of milliseconds   |
| tls            | Implements TLS and SSL protocols                            |
| tty            | Provides classes used by a text terminal                    |
| url            | Parses URL strings                                          |
| util           | Accesses utility functions                                  |
| v8             | Accesses information about V8 (the JavaScript engine)       |
| vm             | Compiles JavaScript code in a virtual machine               |
| zlib           | Compresses or decompresses files                            |

To include a built-in module, use the `require()` function with the name of the module:

```javascript
var http = require('http');
```

Now your application has access to the HTTP module, allowing you to create a server like this:

```javascript
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

## Create Your Own Modules

You can also create your own modules and easily include them in your applications. Let's create an example module that returns the current date and time:

```javascript
// myfirstmodule.js

exports.myDateTime = function () {
  return Date();
};
```

Use the `exports` keyword to make properties and methods available outside the module file.

## Include Your Own Module

Now that you've created your own module, you can include and use it in any of your Node.js files. Here's how to use the "myfirstmodule" module in a Node.js file:

```javascript
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
```

Notice that we use `./` to locate the module, indicating that the module is located in the same folder as the Node.js file.

Save the code above in a file called "demo_module.js", and initiate the file:

```bash
C:\Users\Your Name>node demo_module.js
```
