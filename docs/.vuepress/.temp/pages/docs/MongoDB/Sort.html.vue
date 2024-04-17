<template><div><p>Use the <code v-pre>sort()</code> method to sort the result in ascending or descending order. The <code v-pre>sort()</code> method takes one parameter, an object defining the sorting order.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p>Sort the result alphabetically by name:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Setup MongoDB connection</span>
<span class="token keyword">var</span> MongoClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mongodb'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>
<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">"mongodb://localhost:27017/"</span><span class="token punctuation">;</span>

MongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> db</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token keyword">var</span> dbo <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">db</span><span class="token punctuation">(</span><span class="token string">"mydb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> mysort <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Sort by name in ascending order</span>
  dbo<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">"customers"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>mysort<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span>Output</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>[
  { _id: ..., name: 'Amy', address: 'Apple st 652'},
  { _id: ..., name: 'Ben', address: 'Park Lane 38'},
  ...
]
ADVERTISEMENT

## Sort Descending

Use the value `-1` in the sort object to sort descending.

```javascript
var mysort = { name: -1 }; // Sort by name in descending order
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<p>Sort the result reverse alphabetically by name:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Same setup as previous example</span>

<span class="token keyword">var</span> mysort <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Sort by name in descending order</span>
dbo<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">"customers"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>mysort<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output-1" tabindex="-1"><a class="header-anchor" href="#output-1"><span>Output</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>[
  { _id: ..., name: 'William', address: 'Central st 954'},
  { _id: ..., name: 'Viola', address: 'Sideway 1633'},
  ...
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


