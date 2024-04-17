<template><div><p>In this guide, we'll help you write your first program in Node.js. You'll create a simple HTTP server that listens on port 8080 and responds with &quot;Hello, World!&quot; when you visit <code v-pre>http://localhost:8080</code> in your browser.</p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2>
<p>Before you begin, make sure you have Node.js installed on your machine. If you haven't installed Node.js yet, you can follow the steps in the <a href="/get-started/installation">installation guide</a>.</p>
<h3 id="create-a-new-file" tabindex="-1"><a class="header-anchor" href="#create-a-new-file"><span>Create a New File</span></a></h3>
<p>Open your favorite text editor and create a new file. You can name it whatever you like, but for this example, let's call it <code v-pre>hello.js</code>.</p>
<h3 id="write-some-code" tabindex="-1"><a class="header-anchor" href="#write-some-code"><span>Write Some Code</span></a></h3>
<p>In your <code v-pre>hello.js</code> file, type the following code:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After writing the code, save the file.</p>
<h3 id="run-the-program" tabindex="-1"><a class="header-anchor" href="#run-the-program"><span>Run the Program</span></a></h3>
<p>Open a terminal or command prompt and navigate to the directory where you saved <code v-pre>hello.js</code>. Then, type the following command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> hello.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="access-the-web-server" tabindex="-1"><a class="header-anchor" href="#access-the-web-server"><span>Access the Web Server</span></a></h3>
<p>After running the command, your web server will start listening on port 8080. Open a web browser and navigate to <code v-pre>http://localhost:8080</code>. You should see the text &quot;Hello World!&quot; displayed in the browser.</p>
<p>Congratulations! 🎉 You've just created and ran your first Node.js web server. Now get ready to understand <RouteLink to="/get-started/what-is-nodejs.html">how Node.js works</RouteLink></p>
</div></template>


