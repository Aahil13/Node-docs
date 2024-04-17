<template><div><p>In this guide, we'll walk you through the process of installing Node.js on your system so you can start building awesome applications.</p>
<p>There are several way to install Node.js, including using a <a href="https://nodejs.org/en/download/package-manager" target="_blank" rel="noopener noreferrer">package manager<ExternalLinkIcon/></a>, downloading <a href="https://nodejs.org/en/download/prebuilt-binaries" target="_blank" rel="noopener noreferrer">prebuilt binaries<ExternalLinkIcon/></a>, or <a href="https://nodejs.org/en/download/source-code" target="_blank" rel="noopener noreferrer">building from source<ExternalLinkIcon/></a>. In this guide, we'll cover the most common method of installing Node.js using the official installer.</p>
<h3 id="download-node-js" tabindex="-1"><a class="header-anchor" href="#download-node-js"><span>Download Node.js</span></a></h3>
<p>Visit <a href="https://nodejs.org/en/download" target="_blank" rel="noopener noreferrer">nodejs.org<ExternalLinkIcon/></a> and download the appropriate installer for your operating system (Windows, macOS, or Linux).</p>
<h3 id="run-the-installer" tabindex="-1"><a class="header-anchor" href="#run-the-installer"><span>Run the Installer</span></a></h3>
<p>Once the download is complete, run the installer and follow the on-screen instructions. The installer will guide you through the installation process, including selecting the installation directory and any additional options you may want to configure.</p>
<h3 id="verify-installation" tabindex="-1"><a class="header-anchor" href="#verify-installation"><span>Verify Installation</span></a></h3>
<p>After the installation is complete, you can verify that Node.js and npm (Node Package Manager) are installed correctly by opening a terminal or command prompt and typing the following commands:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>These commands will display the versions of Node.js and npm installed on your system. If you see version numbers displayed, congratulations! You've successfully installed Node.js.</p>
<h3 id="update-npm-optional" tabindex="-1"><a class="header-anchor" href="#update-npm-optional"><span>Update npm (Optional)</span></a></h3>
<p>It's a good idea to keep npm up to date. You can do this by running the following command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will update npm to the latest version available.</p>
<p>That's it! You've now installed Node.js on your system. You're ready to write your <a href="./quick-start">first Node.js program</a>.</p>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>If you ran into any issues during the installation process, feel free to report them on the <a href="https://github.com/nodejs/node/issues/" target="_blank" rel="noopener noreferrer">Node.js GitHub repository<ExternalLinkIcon/></a></p>
</div>
</div></template>


