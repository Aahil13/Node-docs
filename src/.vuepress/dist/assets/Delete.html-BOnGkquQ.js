import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,a as s}from"./app-Bas5zjDk.js";const t={},o=s(`<p>To delete a record, or document as it is called in MongoDB, we use the <code>deleteOne()</code> method.</p><p>The first parameter of the <code>deleteOne()</code> method is a query object defining which document to delete.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>Delete the document with the address &quot;Mountain 21&quot;:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Setup MongoDB connection</span>
<span class="token keyword">var</span> MongoClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>
<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&quot;mongodb://localhost:27017/&quot;</span><span class="token punctuation">;</span>

MongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> db</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token keyword">var</span> dbo <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">db</span><span class="token punctuation">(</span><span class="token string">&quot;mydb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> myquery <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;Mountain 21&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  dbo<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&quot;customers&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span>myquery<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1 document deleted&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span>Output</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1 document deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="delete-many" tabindex="-1"><a class="header-anchor" href="#delete-many"><span>Delete Many</span></a></h2><p>To delete more than one document, use the <code>deleteMany()</code> method.</p><p>The first parameter of the <code>deleteMany()</code> method is a query object defining which documents to delete.</p><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3><p>Delete all documents where the address starts with the letter &quot;O&quot;:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Same setup as previous example</span>

<span class="token keyword">var</span> myquery <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^O</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
dbo<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&quot;customers&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deleteMany</span><span class="token punctuation">(</span>myquery<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>result<span class="token punctuation">.</span>n <span class="token operator">+</span> <span class="token string">&quot; document(s) deleted&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output-1" tabindex="-1"><a class="header-anchor" href="#output-1"><span>Output</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>2 document(s) deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="the-result-object" tabindex="-1"><a class="header-anchor" href="#the-result-object"><span>The Result Object</span></a></h2><p>The <code>deleteMany()</code> method returns an object which contains information about how the execution affected the database.</p><p>The <code>result</code> object inside contains information about the execution, including the number of documents affected.</p><p>You can use this object to return the number of deleted documents:</p><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h3><p>Return the number of deleted documents:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>result<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="output-2" tabindex="-1"><a class="header-anchor" href="#output-2"><span>Output</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),p=[o];function c(l,i){return e(),a("div",null,p)}const d=n(t,[["render",c],["__file","Delete.html.vue"]]),m=JSON.parse('{"path":"/docs/MongoDB/Delete.html","title":"Delete","lang":"en-US","frontmatter":{"title":"Delete","index":true,"icon":"trash","category":["Docs-MongoDB"],"footer":false,"description":"To delete a record, or document as it is called in MongoDB, we use the deleteOne() method. The first parameter of the deleteOne() method is a query object defining which documen...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/MongoDB/Delete.html"}],["meta",{"property":"og:site_name","content":"Node.js Docs"}],["meta",{"property":"og:title","content":"Delete"}],["meta",{"property":"og:description","content":"To delete a record, or document as it is called in MongoDB, we use the deleteOne() method. The first parameter of the deleteOne() method is a query object defining which documen..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-17T15:29:22.000Z"}],["meta",{"property":"article:author","content":"Aahil"}],["meta",{"property":"article:modified_time","content":"2024-04-17T15:29:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Delete\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T15:29:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aahil\\",\\"url\\":\\"https://linktr.ee/thecr3ator\\"}]}"]]},"headers":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]},{"level":3,"title":"Output","slug":"output","link":"#output","children":[]},{"level":2,"title":"Delete Many","slug":"delete-many","link":"#delete-many","children":[{"level":3,"title":"Example","slug":"example-1","link":"#example-1","children":[]},{"level":3,"title":"Output","slug":"output-1","link":"#output-1","children":[]}]},{"level":2,"title":"The Result Object","slug":"the-result-object","link":"#the-result-object","children":[{"level":3,"title":"Example","slug":"example-2","link":"#example-2","children":[]},{"level":3,"title":"Output","slug":"output-2","link":"#output-2","children":[]}]}],"git":{"createdTime":1713263632000,"updatedTime":1713367762000,"contributors":[{"name":"Aahil","email":"onyeanunaprince@gmail.com","commits":4}]},"readingTime":{"minutes":0.79,"words":238},"filePathRelative":"docs/MongoDB/Delete.md","localizedDate":"April 16, 2024","autoDesc":true}');export{d as comp,m as data};
