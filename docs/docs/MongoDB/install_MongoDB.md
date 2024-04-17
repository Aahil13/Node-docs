---
title: Install MongoDB
index: true
icon: download
category:
  - Docs-MongoDB
order: 2

footer: false
---

Node.js applications can interact with MongoDB databases using the official MongoDB driver for Node.js. Let's see how you can install MongoDB and the MongoDB driver for Node.js.

### Install MongoDB Locally

1. **Download MongoDB**: Visit [https://www.mongodb.com](https://www.mongodb.com) and download the MongoDB Community Server appropriate for your operating system.

2. **Install MongoDB**: Follow the installation instructions provided for your operating system on the MongoDB website.

#### MongoDB Cloud Service (Optional)

If you prefer using a cloud service for MongoDB, you can sign up for MongoDB Atlas:

1. **Sign Up for MongoDB Atlas**: Visit [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and sign up for a MongoDB Atlas account.

2. **Create a Cluster**: After signing up, create a new cluster by following the instructions provided in the MongoDB Atlas dashboard.

### Install MongoDB Driver for Node.js

1. **Open Command Terminal**: Open your command terminal or command prompt.

2. **Install the MongoDB Driver**: Run the following command to install the official MongoDB driver for Node.js:

   ```
   npm install mongodb
   ```

### Example Usage

Once you've installed the MongoDB driver, you can start using it in your Node.js application. Here's an example of how you can connect to a MongoDB database, insert documents into a collection, and find documents in a collection.

Create a new file named `app.js` and add the following code:

```javascript
// Import the MongoDB module
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(async err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Access a database
  const db = client.db(dbName);

  // Perform operations
  await insertDocuments(db, [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ]);

  await findDocuments(db);
  
  // Close the connection
  client.close();
});

// Function to insert documents into a collection
async function insertDocuments(db, documents) {
  const collection = db.collection('users');
  const result = await collection.insertMany(documents);
  console.log(`${result.insertedCount} documents inserted`);
}

// Function to find documents in a collection
async function findDocuments(db) {
  const collection = db.collection('users');
  const cursor = collection.find();
  await cursor.forEach(doc => console.log(doc));
}
```

Replace `'mongodb://localhost:27017'` with your MongoDB connection string if you're using MongoDB Atlas or a different host. Also, ensure that you replace `'mydatabase'` with the name of your MongoDB database.

Run the application using the following command:

```
node app.js
```

The application will connect to the MongoDB database, insert the specified documents into a collection, and then find and log the documents in the collection.

::: tip That's it! You've successfully installed MongoDB and the MongoDB driver for Node.js. You can now start building Node.js applications that interact with MongoDB databases.
:::