---
title: HTTP Modules
index: true
icon: folder
category:
  - Docs-Basics

footer: false
---

Let's explore how Node.js utilizes the built-in HTTP module to transfer data over the Hyper Text Transfer Protocol (HTTP).

## The Built-in HTTP Module

Node.js provides a built-in module called HTTP, which allows you to create HTTP servers and handle HTTP requests and responses. To include the HTTP module, use the `require()` method:

```javascript
var http = require('http');
```

## Node.js as a Web Server

With the HTTP module, Node.js can act as a web server by creating an HTTP server that listens to server ports and responds to client requests. Use the `createServer()` method to create an HTTP server:

```javascript
var http = require('http');

// Create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); // Write a response to the client
  res.end(); // End the response
}).listen(8080); // The server object listens on port 8080
```

The function passed into the `http.createServer()` method will be executed when someone tries to access the computer on port 8080.

## Add an HTTP Header

To display the response from the HTTP server as HTML, include an HTTP header with the correct content type:

```javascript
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
```

The first argument of the `res.writeHead()` method is the status code, where 200 means that all is OK, and the second argument is an object containing the response headers.

## Read the Query String

The `req` argument of the function passed into `http.createServer()` represents the request from the client as an object (`http.IncomingMessage` object). It has a property called "url" which holds the part of the URL that comes after the domain name:

```javascript
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
```

## Split the Query String

You can easily split the query string into readable parts using the built-in URL module:

```javascript
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
```