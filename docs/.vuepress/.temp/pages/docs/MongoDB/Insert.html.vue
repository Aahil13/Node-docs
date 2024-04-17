<template><div><p>To insert a record, or document as it is called in MongoDB, into a collection, we use the <code v-pre>insertOne()</code> method.</p>
<p>A document in MongoDB is the same as a record in MySQL.</p>
<p>The first parameter of the <code v-pre>insertOne()</code> method is an object containing the name(s) and value(s) of each field in the document you want to insert.</p>
<p>It also takes a callback function where you can work with any errors, or the result of the insertion.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p>To insert a document in the &quot;customers&quot; collection, use the following code:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> MongoClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mongodb'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>
<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">"mongodb://localhost:27017/"</span><span class="token punctuation">;</span>

MongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> db</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token keyword">var</span> dbo <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">db</span><span class="token punctuation">(</span><span class="token string">"mydb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> myobj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Company Inc"</span><span class="token punctuation">,</span> <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">"Highway 37"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  dbo<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">"customers"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span>myobj<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"1 document inserted"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save the code above in a file called <code v-pre>demo_mongodb_insert.js</code> and run the file:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>Run "demo_mongodb_insert.js"

C:\Users\Your Name>node demo_mongodb_insert.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will give you the following result:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>1 document inserted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>If you try to insert documents into a collection that does not exist, MongoDB will create the collection automatically.</p>
</div>
<h2 id="insert-multiple-documents" tabindex="-1"><a class="header-anchor" href="#insert-multiple-documents"><span>Insert Multiple Documents</span></a></h2>
<p>To insert multiple documents into a collection in MongoDB, we use the <code v-pre>insertMany()</code> method.</p>
<p>The first parameter of the <code v-pre>insertMany()</code> method is an array of objects containing the data you want to insert.</p>
<p>It also takes a callback function where you can work with any errors, or the result of the insertion.</p>
<h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<p>To insert multiple documents in the &quot;customers&quot; collection, use the following code:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Same setup as previous example</span>

<span class="token keyword">var</span> myobj <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'Highway 71'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Additional documents...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

dbo<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">"customers"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertMany</span><span class="token punctuation">(</span>myobj<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Number of documents inserted: "</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>insertedCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
  db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save the code above in a file called <code v-pre>demo_mongodb_insert_multiple.js</code> and run the file.</p>
<p>This will give you the result:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>Number of documents inserted: 14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="the-result-object" tabindex="-1"><a class="header-anchor" href="#the-result-object"><span>The Result Object</span></a></h3>
<p>When executing the <code v-pre>insertMany()</code> method, a result object is returned.</p>
<p>The result object contains information about how the insertion affected the database.</p>
<p>The object returned from the example above looks like this:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">14</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Additional properties...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The values of the properties can be displayed like this:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>insertedCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Which will produce this result:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>If you do not specify an <code v-pre>_id</code> field, then MongoDB will add one for you and assign a unique id for each document.</p>
<p>In the example above, no <code v-pre>_id</code> field was specified, and MongoDB assigned a unique <code v-pre>_id</code> for each document.</p>
<p>If you do specify the <code v-pre>_id</code> field, the value must be unique for each document.</p>
</div>
</div></template>


