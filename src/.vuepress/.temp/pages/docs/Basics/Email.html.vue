<template><div><p>In this tutorial, we'll explore how to use the Nodemailer module to send emails from your Node.js server.</p>
<h2 id="the-nodemailer-module" tabindex="-1"><a class="header-anchor" href="#the-nodemailer-module"><span>The Nodemailer Module</span></a></h2>
<p>The Nodemailer module simplifies the process of sending emails from your computer. You can easily download and install the Nodemailer module using npm:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> nodemailer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After installing the Nodemailer module, you can include it in any application:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> nodemailer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'nodemailer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sending-an-email" tabindex="-1"><a class="header-anchor" href="#sending-an-email"><span>Sending an Email</span></a></h2>
<p>Now that you've installed the Nodemailer module, you're ready to send emails from your server. Let's walk through an example of sending an email using your Gmail account:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> nodemailer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'nodemailer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> transporter <span class="token operator">=</span> nodemailer<span class="token punctuation">.</span><span class="token function">createTransport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">service</span><span class="token operator">:</span> <span class="token string">'gmail'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">'youremail@gmail.com'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token string">'yourpassword'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">'youremail@gmail.com'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">'myfriend@yahoo.com'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">'Sending Email using Node.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'That was easy!'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

transporter<span class="token punctuation">.</span><span class="token function">sendMail</span><span class="token punctuation">(</span>mailOptions<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Email sent: '</span> <span class="token operator">+</span> info<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And that's it! Your server is now capable of sending emails.</p>
<h2 id="multiple-receivers" tabindex="-1"><a class="header-anchor" href="#multiple-receivers"><span>Multiple Receivers</span></a></h2>
<p>To send an email to multiple receivers, simply add them to the <code v-pre>to</code> property of the <code v-pre>mailOptions</code> object, separated by commas:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">'youremail@gmail.com'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">'myfriend@yahoo.com, myotherfriend@yahoo.com'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">'Sending Email using Node.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'That was easy!'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="send-html" tabindex="-1"><a class="header-anchor" href="#send-html"><span>Send HTML</span></a></h2>
<p>If you want to send HTML-formatted text in your email, use the <code v-pre>html</code> property instead of the <code v-pre>text</code> property:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">'youremail@gmail.com'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">'myfriend@yahoo.com'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">'Sending Email using Node.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">'&lt;h1>Welcome&lt;/h1>&lt;p>That was easy!&lt;/p>'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That's all you need to know to start sending emails from your Node.js server using the Nodemailer module.</p>
</div></template>


