<template><div><p>Node.js applications can interact with MongoDB databases using the official MongoDB driver for Node.js. Let's see how you can install MongoDB and the MongoDB driver for Node.js.</p>
<h3 id="install-mongodb-locally" tabindex="-1"><a class="header-anchor" href="#install-mongodb-locally"><span>Install MongoDB Locally</span></a></h3>
<ol>
<li>
<p><strong>Download MongoDB</strong>: Visit <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">https://www.mongodb.com<ExternalLinkIcon/></a> and download the MongoDB Community Server appropriate for your operating system.</p>
</li>
<li>
<p><strong>Install MongoDB</strong>: Follow the installation instructions provided for your operating system on the MongoDB website.</p>
</li>
</ol>
<h4 id="mongodb-cloud-service-optional" tabindex="-1"><a class="header-anchor" href="#mongodb-cloud-service-optional"><span>MongoDB Cloud Service (Optional)</span></a></h4>
<p>If you prefer using a cloud service for MongoDB, you can sign up for MongoDB Atlas:</p>
<ol>
<li>
<p><strong>Sign Up for MongoDB Atlas</strong>: Visit <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/cloud/atlas<ExternalLinkIcon/></a> and sign up for a MongoDB Atlas account.</p>
</li>
<li>
<p><strong>Create a Cluster</strong>: After signing up, create a new cluster by following the instructions provided in the MongoDB Atlas dashboard.</p>
</li>
</ol>
<h3 id="install-mongodb-driver-for-node-js" tabindex="-1"><a class="header-anchor" href="#install-mongodb-driver-for-node-js"><span>Install MongoDB Driver for Node.js</span></a></h3>
<ol>
<li>
<p><strong>Open Command Terminal</strong>: Open your command terminal or command prompt.</p>
</li>
<li>
<p><strong>Install the MongoDB Driver</strong>: Run the following command to install the official MongoDB driver for Node.js:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>npm install mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage"><span>Example Usage</span></a></h3>
<p>Once you've installed the MongoDB driver, you can start using it in your Node.js application. Here's an example of how you can connect to a MongoDB database, insert documents into a collection, and find documents in a collection.</p>
<p>Create a new file named <code v-pre>app.js</code> and add the following code:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Import the MongoDB module</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> MongoClient <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mongodb'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Connection URI</span>
<span class="token keyword">const</span> uri <span class="token operator">=</span> <span class="token string">'mongodb://localhost:27017'</span><span class="token punctuation">;</span>

<span class="token comment">// Database Name</span>
<span class="token keyword">const</span> dbName <span class="token operator">=</span> <span class="token string">'mydatabase'</span><span class="token punctuation">;</span>

<span class="token comment">// Create a new MongoClient</span>
<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MongoClient</span><span class="token punctuation">(</span>uri<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Connect to the MongoDB server</span>
client<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error connecting to MongoDB:'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Connected to MongoDB'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Access a database</span>
  <span class="token keyword">const</span> db <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">db</span><span class="token punctuation">(</span>dbName<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Perform operations</span>
  <span class="token keyword">await</span> <span class="token function">insertDocuments</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alice'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Bob'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">35</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token function">findDocuments</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// Close the connection</span>
  client<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Function to insert documents into a collection</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">insertDocuments</span><span class="token punctuation">(</span><span class="token parameter">db<span class="token punctuation">,</span> documents</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> collection <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> collection<span class="token punctuation">.</span><span class="token function">insertMany</span><span class="token punctuation">(</span>documents<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>result<span class="token punctuation">.</span>insertedCount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> documents inserted</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Function to find documents in a collection</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">findDocuments</span><span class="token punctuation">(</span><span class="token parameter">db</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> collection <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> cursor <span class="token operator">=</span> collection<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> cursor<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">doc</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Replace <code v-pre>'mongodb://localhost:27017'</code> with your MongoDB connection string if you're using MongoDB Atlas or a different host. Also, ensure that you replace <code v-pre>'mydatabase'</code> with the name of your MongoDB database.</p>
<p>Run the application using the following command:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>node app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The application will connect to the MongoDB database, insert the specified documents into a collection, and then find and log the documents in the collection.</p>
<div class="hint-container tip">
<p class="hint-container-title">That's it! You've successfully installed MongoDB and the MongoDB driver for Node.js. You can now start building Node.js applications that interact with MongoDB databases.</p>
</div>
</div></template>


