<template><div><p>In MySQL, you can combine rows from two or more tables based on a related column using the JOIN statement. Let's see how to achieve this in a Node.js environment:</p>
<h3 id="joining-tables" tabindex="-1"><a class="header-anchor" href="#joining-tables"><span>Joining Tables</span></a></h3>
<p>Suppose you have two tables: &quot;users&quot; and &quot;products&quot;. Here's how you can join them based on the users' favorite product:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> con <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">"yourusername"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"yourpassword"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">"mydb"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

con<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token keyword">var</span> sql <span class="token operator">=</span> <span class="token string">"SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id"</span><span class="token punctuation">;</span>
  con<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This script will select records with a match in both tables and display the user's name along with their favorite product.</p>
<h3 id="left-join" tabindex="-1"><a class="header-anchor" href="#left-join"><span>Left Join</span></a></h3>
<p>If you want to return all users, regardless of whether they have a favorite product or not, you can use the LEFT JOIN statement:</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> users<span class="token punctuation">.</span>name <span class="token keyword">AS</span> <span class="token keyword">user</span><span class="token punctuation">,</span>
products<span class="token punctuation">.</span>name <span class="token keyword">AS</span> favorite
<span class="token keyword">FROM</span> users
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> products <span class="token keyword">ON</span> users<span class="token punctuation">.</span>favorite_product <span class="token operator">=</span> products<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This query will return all users and their favorite products, including those who don't have a favorite product.</p>
<h3 id="right-join" tabindex="-1"><a class="header-anchor" href="#right-join"><span>Right Join</span></a></h3>
<p>Similarly, if you want to return all products and the users who have them as their favorite, even if no user has them as their favorite, you can use the RIGHT JOIN statement:</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> users<span class="token punctuation">.</span>name <span class="token keyword">AS</span> <span class="token keyword">user</span><span class="token punctuation">,</span>
products<span class="token punctuation">.</span>name <span class="token keyword">AS</span> favorite
<span class="token keyword">FROM</span> users
<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> products <span class="token keyword">ON</span> users<span class="token punctuation">.</span>favorite_product <span class="token operator">=</span> products<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This query will return all products and the users who have them as their favorite, including products without any user favorites.</p>
<p>In Node.js, you can execute these queries using the <code v-pre>mysql</code> package and handle the results accordingly. These join operations allow you to combine data from multiple tables, providing richer insights into your database relationships.</p>
</div></template>


