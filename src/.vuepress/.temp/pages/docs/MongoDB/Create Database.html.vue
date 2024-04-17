<template><div><p>To create a database in MongoDB, start by creating a <code v-pre>MongoClient</code> object, then specify a connection URL with the correct IP address and the name of the database you want to create.</p>
<p>MongoDB will create the database if it does not exist and make a connection to it.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p>To create a database called &quot;mydb&quot;, use the following code:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> MongoClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mongodb'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>
<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">"mongodb://localhost:27017/mydb"</span><span class="token punctuation">;</span>

MongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> db</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Database created!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save the code above in a file called <code v-pre>demo_create_mongo_db.js</code> and run the file:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>Your Name<span class="token operator">></span>node demo_create_mongo_db.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will give you the following result:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>Database created!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>In MongoDB, a database is not created until it contains content.</p>
<p>MongoDB waits until you have created a collection (table) with at least one document (record) before it actually creates the database (and collection).</p>
</div>
</div></template>


