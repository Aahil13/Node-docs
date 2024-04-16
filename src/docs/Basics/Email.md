---
title: Email
index: true
icon: envelope
category:
  - Docs-Basics

footer: false
---

In this tutorial, we'll explore how to use the Nodemailer module to send emails from your Node.js server.

## The Nodemailer Module

The Nodemailer module simplifies the process of sending emails from your computer. You can easily download and install the Nodemailer module using npm:

```bash
npm install nodemailer
```

After installing the Nodemailer module, you can include it in any application:

```javascript
var nodemailer = require('nodemailer');
```

## Sending an Email

Now that you've installed the Nodemailer module, you're ready to send emails from your server. Let's walk through an example of sending an email using your Gmail account:

```javascript
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
```

And that's it! Your server is now capable of sending emails.

## Multiple Receivers

To send an email to multiple receivers, simply add them to the `to` property of the `mailOptions` object, separated by commas:

```javascript
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
}
```

## Send HTML

If you want to send HTML-formatted text in your email, use the `html` property instead of the `text` property:

```javascript
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
}
```

That's all you need to know to start sending emails from your Node.js server using the Nodemailer module.