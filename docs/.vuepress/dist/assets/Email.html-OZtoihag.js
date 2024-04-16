import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-DxD832dz.js";const t={},o=e(`<p>In this tutorial, we&#39;ll explore how to use the Nodemailer module to send emails from your Node.js server.</p><h2 id="the-nodemailer-module" tabindex="-1"><a class="header-anchor" href="#the-nodemailer-module"><span>The Nodemailer Module</span></a></h2><p>The Nodemailer module simplifies the process of sending emails from your computer. You can easily download and install the Nodemailer module using npm:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> nodemailer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After installing the Nodemailer module, you can include it in any application:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> nodemailer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;nodemailer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sending-an-email" tabindex="-1"><a class="header-anchor" href="#sending-an-email"><span>Sending an Email</span></a></h2><p>Now that you&#39;ve installed the Nodemailer module, you&#39;re ready to send emails from your server. Let&#39;s walk through an example of sending an email using your Gmail account:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> nodemailer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;nodemailer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> transporter <span class="token operator">=</span> nodemailer<span class="token punctuation">.</span><span class="token function">createTransport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">service</span><span class="token operator">:</span> <span class="token string">&#39;gmail&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token string">&#39;yourpassword&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;myfriend@yahoo.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;Sending Email using Node.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;That was easy!&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

transporter<span class="token punctuation">.</span><span class="token function">sendMail</span><span class="token punctuation">(</span>mailOptions<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Email sent: &#39;</span> <span class="token operator">+</span> info<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And that&#39;s it! Your server is now capable of sending emails.</p><h2 id="multiple-receivers" tabindex="-1"><a class="header-anchor" href="#multiple-receivers"><span>Multiple Receivers</span></a></h2><p>To send an email to multiple receivers, simply add them to the <code>to</code> property of the <code>mailOptions</code> object, separated by commas:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;myfriend@yahoo.com, myotherfriend@yahoo.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;Sending Email using Node.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;That was easy!&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="send-html" tabindex="-1"><a class="header-anchor" href="#send-html"><span>Send HTML</span></a></h2><p>If you want to send HTML-formatted text in your email, use the <code>html</code> property instead of the <code>text</code> property:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;myfriend@yahoo.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;Sending Email using Node.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&#39;&lt;h1&gt;Welcome&lt;/h1&gt;&lt;p&gt;That was easy!&lt;/p&gt;&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That&#39;s all you need to know to start sending emails from your Node.js server using the Nodemailer module.</p>`,17),p=[o];function l(i,r){return s(),a("div",null,p)}const u=n(t,[["render",l],["__file","Email.html.vue"]]),m=JSON.parse(`{"path":"/docs/Basics/Email.html","title":"Email","lang":"en-US","frontmatter":{"title":"Email","index":true,"icon":"envelope","category":["Docs-Basics"],"footer":false,"description":"In this tutorial, we'll explore how to use the Nodemailer module to send emails from your Node.js server. The Nodemailer Module The Nodemailer module simplifies the process of s...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/Basics/Email.html"}],["meta",{"property":"og:site_name","content":"Node.js Docs"}],["meta",{"property":"og:title","content":"Email"}],["meta",{"property":"og:description","content":"In this tutorial, we'll explore how to use the Nodemailer module to send emails from your Node.js server. The Nodemailer Module The Nodemailer module simplifies the process of s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-16T14:12:27.000Z"}],["meta",{"property":"article:author","content":"Aahil"}],["meta",{"property":"article:modified_time","content":"2024-04-16T14:12:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Email\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-16T14:12:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aahil\\",\\"url\\":\\"https://linktr.ee/thecr3ator\\"}]}"]]},"headers":[{"level":2,"title":"The Nodemailer Module","slug":"the-nodemailer-module","link":"#the-nodemailer-module","children":[]},{"level":2,"title":"Sending an Email","slug":"sending-an-email","link":"#sending-an-email","children":[]},{"level":2,"title":"Multiple Receivers","slug":"multiple-receivers","link":"#multiple-receivers","children":[]},{"level":2,"title":"Send HTML","slug":"send-html","link":"#send-html","children":[]}],"git":{"createdTime":1713263632000,"updatedTime":1713276747000,"contributors":[{"name":"Aahil","email":"onyeanunaprince@gmail.com","commits":2}]},"readingTime":{"minutes":0.9,"words":269},"filePathRelative":"docs/Basics/Email.md","localizedDate":"April 16, 2024","autoDesc":true}`);export{u as comp,m as data};