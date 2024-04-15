---
title: Quick start
index: true
icon: code
category:
  - Getting started

footer: false
---

In this guide, we'll help you write your first program in Node.js. You'll create a simple HTTP server that listens on port 8080 and responds with "Hello, World!" when you visit `http://localhost:8080` in your browser.

## Prerequisites

Before you begin, make sure you have Node.js installed on your machine. If you haven't installed Node.js yet, you can follow the steps in the [installation guide](/get-started/installation).

### Create a New File
Open your favorite text editor and create a new file. You can name it whatever you like, but for this example, let's call it `hello.js`.

### Write Some Code
In your `hello.js` file, type the following code:

```js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

After writing the code, save the file.

### Run the Program
Open a terminal or command prompt and navigate to the directory where you saved `hello.js`. Then, type the following command:

```bash
node hello.js
```

### Access the Web Server
After running the command, your web server will start listening on port 8080. Open a web browser and navigate to `http://localhost:8080`. You should see the text "Hello World!" displayed in the browser.

Congratulations! 🎉 You've just created and ran your first Node.js web server. Now get ready to understand [how Node.js works](./what-is-nodejs.md)