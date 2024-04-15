---
title: Get started
index: false
icon: lightbulb
category:
  - Getting started

footer: false
---

Hello there! 👋🏾 Welcome to the Node.js documentation! Let's get you started on how to navigate through this resource.

## How to Use This Guide

### Guides
In the [Get started](/get-started/) section, you'll find helpful guides to assist you in your Node.js journey. Whether you're looking to install Node.js, get started quickly with running your first application, or understand the core concepts of Node.js, you'll find everything you need here.

- **[Installation Guides](./installation.md)**: Need help setting up Node.js on your system? This guide has got you covered with step-by-step instructions.
- **[Quick Start](./quick-start.md)**: Dive right into coding with Node.js! This quick start guide will have you up and running with your first Node.js application in no time.
- **[Understanding Node.js](./what-is-nodejs.md)**: Curious about what Node.js is and how it works? This guide provides a straightforward explanation of the core concepts behind Node.js.

### Docs
In the [Docs](/docs/) section, you'll find detailed explanations of the fundamental concepts of Node.js. Whether you're interested in learning about Node.js modules, file system operations, or events, you'll find everything you need here. 

### Examples
This course is structured to help you learn Node.js by doing. Under each concept in the [Docs](/docs/) section, you'll find examples that demonstrate how to apply the concepts in practice. The examples will look like this:

```js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
```

There are also some types of examples that you'll need to run via the command line. These examples will look like this:

```js
console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
```

And that's it! You're all set to start your Node.js journey. If you have any questions or need help, feel free to reach out to us on [Twitter](https://twitter.com/nodejs) or [GitHub](https://github.com/nodejs/help) - we're here to help! 🚀

