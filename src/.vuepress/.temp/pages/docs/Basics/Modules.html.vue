<template><div><p>In this tutorial, we'll explore how modules work in Node.js, including built-in modules and how to create and include your own modules.</p>
<h2 id="what-is-a-module-in-node-js" tabindex="-1"><a class="header-anchor" href="#what-is-a-module-in-node-js"><span>What is a Module in Node.js?</span></a></h2>
<p>In Node.js, modules are similar to JavaScript libraries. They consist of a set of functions or pieces of code that you can include in your application.</p>
<h2 id="built-in-modules" tabindex="-1"><a class="header-anchor" href="#built-in-modules"><span>Built-in Modules</span></a></h2>
<p>Node.js comes with a rich set of built-in modules that you can use right out of the box, without any additional installation. These modules provide essential functionalities for various tasks.</p>
<p>Here's a list of some built-in modules available in Node.js version 6.10.3:</p>
<table>
<thead>
<tr>
<th>Module</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>assert</td>
<td>Provides a set of assertion tests</td>
</tr>
<tr>
<td>buffer</td>
<td>Handles binary data</td>
</tr>
<tr>
<td>child_process</td>
<td>Runs a child process</td>
</tr>
<tr>
<td>cluster</td>
<td>Splits a single Node process into multiple processes</td>
</tr>
<tr>
<td>crypto</td>
<td>Handles OpenSSL cryptographic functions</td>
</tr>
<tr>
<td>dgram</td>
<td>Provides implementation of UDP datagram sockets</td>
</tr>
<tr>
<td>dns</td>
<td>Performs DNS lookups and name resolution functions</td>
</tr>
<tr>
<td>domain</td>
<td><em><strong>Deprecated.</strong></em> Handles unhandled errors</td>
</tr>
<tr>
<td>events</td>
<td>Handles events</td>
</tr>
<tr>
<td>fs</td>
<td>Handles the file system</td>
</tr>
<tr>
<td>http</td>
<td>Makes Node.js act as an HTTP server</td>
</tr>
<tr>
<td>https</td>
<td>Makes Node.js act as an HTTPS server</td>
</tr>
<tr>
<td>net</td>
<td>Creates servers and clients</td>
</tr>
<tr>
<td>os</td>
<td>Provides information about the operating system</td>
</tr>
<tr>
<td>path</td>
<td>Handles file paths</td>
</tr>
<tr>
<td>punycode</td>
<td><em><strong>Deprecated.</strong></em> A character encoding scheme</td>
</tr>
<tr>
<td>querystring</td>
<td>Handles URL query strings</td>
</tr>
<tr>
<td>readline</td>
<td>Handles readable streams one line at a time</td>
</tr>
<tr>
<td>stream</td>
<td>Handles streaming data</td>
</tr>
<tr>
<td>string_decoder</td>
<td>Decodes buffer objects into strings</td>
</tr>
<tr>
<td>timers</td>
<td>Executes a function after a given number of milliseconds</td>
</tr>
<tr>
<td>tls</td>
<td>Implements TLS and SSL protocols</td>
</tr>
<tr>
<td>tty</td>
<td>Provides classes used by a text terminal</td>
</tr>
<tr>
<td>url</td>
<td>Parses URL strings</td>
</tr>
<tr>
<td>util</td>
<td>Accesses utility functions</td>
</tr>
<tr>
<td>v8</td>
<td>Accesses information about V8 (the JavaScript engine)</td>
</tr>
<tr>
<td>vm</td>
<td>Compiles JavaScript code in a virtual machine</td>
</tr>
<tr>
<td>zlib</td>
<td>Compresses or decompresses files</td>
</tr>
</tbody>
</table>
<p>To include a built-in module, use the <code v-pre>require()</code> function with the name of the module:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now your application has access to the HTTP module, allowing you to create a server like this:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-your-own-modules" tabindex="-1"><a class="header-anchor" href="#create-your-own-modules"><span>Create Your Own Modules</span></a></h2>
<p>You can also create your own modules and easily include them in your applications. Let's create an example module that returns the current date and time:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// myfirstmodule.js</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">myDateTime</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use the <code v-pre>exports</code> keyword to make properties and methods available outside the module file.</p>
<h2 id="include-your-own-module" tabindex="-1"><a class="header-anchor" href="#include-your-own-module"><span>Include Your Own Module</span></a></h2>
<p>Now that you've created your own module, you can include and use it in any of your Node.js files. Here's how to use the &quot;myfirstmodule&quot; module in a Node.js file:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> dt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./myfirstmodule'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"The date and time are currently: "</span> <span class="token operator">+</span> dt<span class="token punctuation">.</span><span class="token function">myDateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that we use <code v-pre>./</code> to locate the module, indicating that the module is located in the same folder as the Node.js file.</p>
<p>Save the code above in a file called &quot;demo_module.js&quot;, and initiate the file:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>Your Name<span class="token operator">></span>node demo_module.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


