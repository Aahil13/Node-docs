---
title: Events
index: true
icon: bell
category:
  - Docs-Basics

footer: false
---

In this tutorial, we'll explore how Node.js is ideal for building event-driven applications.

## Events in Node.js

Node.js is well-suited for event-driven applications, where every action on a computer is treated as an event. For example, when a connection is made or a file is opened, these are considered events.

Objects in Node.js can fire events, such as the `readStream` object which fires events when opening and closing a file. Let's see an example:

```javascript
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  console.log('The file is open');
});
```

## Events Module

Node.js provides a built-in module called "Events" that allows you to create, fire, and listen for your own events.

To include the built-in Events module, use the `require()` method. Additionally, all event properties and methods are instances of an EventEmitter object. To access these properties and methods, create an EventEmitter object:

```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();
```

## The EventEmitter Object

You can assign event handlers to your own events using the EventEmitter object. In the following example, we've created a function that will be executed when a "scream" event is fired. To fire an event, use the `emit()` method.

```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');
```