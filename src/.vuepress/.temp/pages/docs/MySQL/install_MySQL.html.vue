<template><div><p>Node.js can be used in database applications, and one of the most popular databases is MySQL.</p>
<h3 id="mysql-database-setup" tabindex="-1"><a class="header-anchor" href="#mysql-database-setup"><span>MySQL Database Setup</span></a></h3>
<p>To experiment with the code examples, you should have MySQL installed on your computer. You can download a free MySQL database from <a href="https://www.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">MySQL's official website<ExternalLinkIcon/></a>.</p>
<h3 id="install-mysql-driver" tabindex="-1"><a class="header-anchor" href="#install-mysql-driver"><span>Install MySQL Driver</span></a></h3>
<p>To access a MySQL database with Node.js, you need a MySQL driver. In this tutorial, we'll use the &quot;mysql&quot; module, which can be downloaded from NPM.</p>
<p>To download and install the &quot;mysql&quot; module, open your Command Terminal and execute the following command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now you have downloaded and installed the MySQL database driver, which Node.js can use to manipulate the MySQL database.</p>
<h3 id="create-connection" tabindex="-1"><a class="header-anchor" href="#create-connection"><span>Create Connection</span></a></h3>
<p>Start by creating a connection to the database. Use the username and password from your MySQL database.</p>
<h4 id="demo-db-connection-js" tabindex="-1"><a class="header-anchor" href="#demo-db-connection-js"><span>demo_db_connection.js</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> con <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">"yourusername"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"yourpassword"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

con<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Connected!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save the code above in a file called &quot;demo_db_connection.js&quot; and run the file:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> demo_db_connection.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will give you the following result:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>Connected<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now you can start querying the database using SQL statements.</p>
<h3 id="query-a-database" tabindex="-1"><a class="header-anchor" href="#query-a-database"><span>Query a Database</span></a></h3>
<p>Use SQL statements to read from or write to a MySQL database. This is also called querying the database.</p>
<p>The connection object created in the example above has a method for querying the database:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>con<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Connected!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  con<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Result: "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>query</code> method takes an SQL statement as a parameter and returns the result.</p>
<p>That's it! You have now connected to a MySQL database from Node.js. Learn how to read, write, delete, and update a database in the <RouteLink to="/docs/MySQL/Create_Database.html">next chapters</RouteLink>.</p>
</div></template>


