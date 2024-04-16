import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as s,c as o,b as r,d as e,e as i,w as p,a as l}from"./app-DxD832dz.js";const c={},u=l(`<p>In this guide, we&#39;ll help you write your first program in Node.js. You&#39;ll create a simple HTTP server that listens on port 8080 and responds with &quot;Hello, World!&quot; when you visit <code>http://localhost:8080</code> in your browser.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><p>Before you begin, make sure you have Node.js installed on your machine. If you haven&#39;t installed Node.js yet, you can follow the steps in the <a href="/get-started/installation">installation guide</a>.</p><h3 id="create-a-new-file" tabindex="-1"><a class="header-anchor" href="#create-a-new-file"><span>Create a New File</span></a></h3><p>Open your favorite text editor and create a new file. You can name it whatever you like, but for this example, let&#39;s call it <code>hello.js</code>.</p><h3 id="write-some-code" tabindex="-1"><a class="header-anchor" href="#write-some-code"><span>Write Some Code</span></a></h3><p>In your <code>hello.js</code> file, type the following code:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After writing the code, save the file.</p><h3 id="run-the-program" tabindex="-1"><a class="header-anchor" href="#run-the-program"><span>Run the Program</span></a></h3><p>Open a terminal or command prompt and navigate to the directory where you saved <code>hello.js</code>. Then, type the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">node</span> hello.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="access-the-web-server" tabindex="-1"><a class="header-anchor" href="#access-the-web-server"><span>Access the Web Server</span></a></h3><p>After running the command, your web server will start listening on port 8080. Open a web browser and navigate to <code>http://localhost:8080</code>. You should see the text &quot;Hello World!&quot; displayed in the browser.</p>`,14);function d(h,m){const t=n("RouteLink");return s(),o("div",null,[u,r("p",null,[e("Congratulations! 🎉 You've just created and ran your first Node.js web server. Now get ready to understand "),i(t,{to:"/get-started/what-is-nodejs.html"},{default:p(()=>[e("how Node.js works")]),_:1})])])}const v=a(c,[["render",d],["__file","quick-start.html.vue"]]),w=JSON.parse(`{"path":"/get-started/quick-start.html","title":"Quick start","lang":"en-US","frontmatter":{"title":"Quick start","index":true,"icon":"code","category":["Getting started"],"footer":false,"description":"In this guide, we'll help you write your first program in Node.js. You'll create a simple HTTP server that listens on port 8080 and responds with \\"Hello, World!\\" when you visit ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/get-started/quick-start.html"}],["meta",{"property":"og:site_name","content":"Node.js Docs"}],["meta",{"property":"og:title","content":"Quick start"}],["meta",{"property":"og:description","content":"In this guide, we'll help you write your first program in Node.js. You'll create a simple HTTP server that listens on port 8080 and responds with \\"Hello, World!\\" when you visit ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-15T20:12:13.000Z"}],["meta",{"property":"article:author","content":"Aahil"}],["meta",{"property":"article:modified_time","content":"2024-04-15T20:12:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quick start\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T20:12:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aahil\\",\\"url\\":\\"https://linktr.ee/thecr3ator\\"}]}"]]},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[{"level":3,"title":"Create a New File","slug":"create-a-new-file","link":"#create-a-new-file","children":[]},{"level":3,"title":"Write Some Code","slug":"write-some-code","link":"#write-some-code","children":[]},{"level":3,"title":"Run the Program","slug":"run-the-program","link":"#run-the-program","children":[]},{"level":3,"title":"Access the Web Server","slug":"access-the-web-server","link":"#access-the-web-server","children":[]}]}],"git":{"createdTime":1713203996000,"updatedTime":1713211933000,"contributors":[{"name":"Aahil","email":"onyeanunaprince@gmail.com","commits":2}]},"readingTime":{"minutes":0.8,"words":240},"filePathRelative":"get-started/quick-start.md","localizedDate":"April 15, 2024","autoDesc":true}`);export{v as comp,w as data};
