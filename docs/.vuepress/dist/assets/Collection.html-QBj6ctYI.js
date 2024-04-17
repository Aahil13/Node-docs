import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as t}from"./app-Bas5zjDk.js";const s={},o=t(`<p>A collection in MongoDB is similar to a table in MySQL.</p><p>To create a collection in MongoDB, use the <code>createCollection()</code> method.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>To create a collection called &quot;customers&quot;, use the following code:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> MongoClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>
<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&quot;mongodb://localhost:27017/&quot;</span><span class="token punctuation">;</span>

MongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> db</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token keyword">var</span> dbo <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">db</span><span class="token punctuation">(</span><span class="token string">&quot;mydb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dbo<span class="token punctuation">.</span><span class="token function">createCollection</span><span class="token punctuation">(</span><span class="token string">&quot;customers&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Collection created!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save the code above in a file called <code>demo_mongodb_createcollection.js</code> and run the file:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Run &quot;demo_mongodb_createcollection.js&quot;

C:\\Users\\Your Name&gt;node demo_mongodb_createcollection.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will give you the following result:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Collection created!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">Important</p><p>A collection is not created until it contains content. MongoDB waits until you have inserted a document before it actually creates the collection.</p></div>`,10),c=[o];function l(i,p){return a(),e("div",null,c)}const d=n(s,[["render",l],["__file","Collection.html.vue"]]),m=JSON.parse('{"path":"/docs/MongoDB/Collection.html","title":"Collection","lang":"en-US","frontmatter":{"title":"Collection","index":true,"icon":"table","category":["Docs-MongoDB"],"footer":false,"description":"A collection in MongoDB is similar to a table in MySQL. To create a collection in MongoDB, use the createCollection() method. Example To create a collection called \\"customers\\", ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/MongoDB/Collection.html"}],["meta",{"property":"og:site_name","content":"Node.js Docs"}],["meta",{"property":"og:title","content":"Collection"}],["meta",{"property":"og:description","content":"A collection in MongoDB is similar to a table in MySQL. To create a collection in MongoDB, use the createCollection() method. Example To create a collection called \\"customers\\", ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-17T15:29:22.000Z"}],["meta",{"property":"article:author","content":"Aahil"}],["meta",{"property":"article:modified_time","content":"2024-04-17T15:29:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Collection\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T15:29:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aahil\\",\\"url\\":\\"https://linktr.ee/thecr3ator\\"}]}"]]},"headers":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"createdTime":1713263701000,"updatedTime":1713367762000,"contributors":[{"name":"Aahil","email":"onyeanunaprince@gmail.com","commits":5}]},"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"docs/MongoDB/Collection.md","localizedDate":"April 16, 2024","autoDesc":true}');export{d as comp,m as data};