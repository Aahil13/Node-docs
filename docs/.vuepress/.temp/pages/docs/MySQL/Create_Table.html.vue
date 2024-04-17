<template><div><p>To create a table in MySQL, you can use the &quot;CREATE TABLE&quot; statement. Make sure to define the name of the database when you create the connection.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p>Let's create a table named &quot;customers&quot;:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> con <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">"yourusername"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"yourpassword"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">"mydb"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

con<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Connected!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> sql <span class="token operator">=</span> <span class="token string">"CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))"</span><span class="token punctuation">;</span>
  con<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Table created"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save the code above in a file called &quot;demo_create_table.js&quot; and run the file:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> demo_create_table.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will give you the following result:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>Connected!
Table created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


