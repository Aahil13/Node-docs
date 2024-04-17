import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-Bas5zjDk.js";const t={},o=e(`<p>In MySQL, you can combine rows from two or more tables based on a related column using the JOIN statement. Let&#39;s see how to achieve this in a Node.js environment:</p><h3 id="joining-tables" tabindex="-1"><a class="header-anchor" href="#joining-tables"><span>Joining Tables</span></a></h3><p>Suppose you have two tables: &quot;users&quot; and &quot;products&quot;. Here&#39;s how you can join them based on the users&#39; favorite product:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> con <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&quot;yourusername&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;yourpassword&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&quot;mydb&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

con<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token keyword">var</span> sql <span class="token operator">=</span> <span class="token string">&quot;SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id&quot;</span><span class="token punctuation">;</span>
  con<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This script will select records with a match in both tables and display the user&#39;s name along with their favorite product.</p><h3 id="left-join" tabindex="-1"><a class="header-anchor" href="#left-join"><span>Left Join</span></a></h3><p>If you want to return all users, regardless of whether they have a favorite product or not, you can use the LEFT JOIN statement:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> users<span class="token punctuation">.</span>name <span class="token keyword">AS</span> <span class="token keyword">user</span><span class="token punctuation">,</span>
products<span class="token punctuation">.</span>name <span class="token keyword">AS</span> favorite
<span class="token keyword">FROM</span> users
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> products <span class="token keyword">ON</span> users<span class="token punctuation">.</span>favorite_product <span class="token operator">=</span> products<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This query will return all users and their favorite products, including those who don&#39;t have a favorite product.</p><h3 id="right-join" tabindex="-1"><a class="header-anchor" href="#right-join"><span>Right Join</span></a></h3><p>Similarly, if you want to return all products and the users who have them as their favorite, even if no user has them as their favorite, you can use the RIGHT JOIN statement:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> users<span class="token punctuation">.</span>name <span class="token keyword">AS</span> <span class="token keyword">user</span><span class="token punctuation">,</span>
products<span class="token punctuation">.</span>name <span class="token keyword">AS</span> favorite
<span class="token keyword">FROM</span> users
<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> products <span class="token keyword">ON</span> users<span class="token punctuation">.</span>favorite_product <span class="token operator">=</span> products<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This query will return all products and the users who have them as their favorite, including products without any user favorites.</p><p>In Node.js, you can execute these queries using the <code>mysql</code> package and handle the results accordingly. These join operations allow you to combine data from multiple tables, providing richer insights into your database relationships.</p>`,14),p=[o];function i(r,c){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","Join.html.vue"]]),k=JSON.parse(`{"path":"/docs/MySQL/Join.html","title":"Join","lang":"en-US","frontmatter":{"title":"Join","index":true,"icon":"object-ungroup","category":["Docs-MySQL"],"footer":false,"description":"In MySQL, you can combine rows from two or more tables based on a related column using the JOIN statement. Let's see how to achieve this in a Node.js environment: Joining Tables...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/MySQL/Join.html"}],["meta",{"property":"og:site_name","content":"Node.js Docs"}],["meta",{"property":"og:title","content":"Join"}],["meta",{"property":"og:description","content":"In MySQL, you can combine rows from two or more tables based on a related column using the JOIN statement. Let's see how to achieve this in a Node.js environment: Joining Tables..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-17T15:29:22.000Z"}],["meta",{"property":"article:author","content":"Aahil"}],["meta",{"property":"article:modified_time","content":"2024-04-17T15:29:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Join\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T15:29:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aahil\\",\\"url\\":\\"https://linktr.ee/thecr3ator\\"}]}"]]},"headers":[{"level":3,"title":"Joining Tables","slug":"joining-tables","link":"#joining-tables","children":[]},{"level":3,"title":"Left Join","slug":"left-join","link":"#left-join","children":[]},{"level":3,"title":"Right Join","slug":"right-join","link":"#right-join","children":[]}],"git":{"createdTime":1713263701000,"updatedTime":1713367762000,"contributors":[{"name":"Aahil","email":"onyeanunaprince@gmail.com","commits":4}]},"readingTime":{"minutes":1.02,"words":306},"filePathRelative":"docs/MySQL/Join.md","localizedDate":"April 16, 2024","autoDesc":true}`);export{d as comp,k as data};