---
title: Installation guide
index: true
icon: screwdriver-wrench
category:
  - Guides

footer: false
---

In this guide, we'll walk you through the process of installing Node.js on your system so you can start building awesome applications.

There are several way to install Node.js, including using a [package manager](https://nodejs.org/en/download/package-manager), downloading [prebuilt binaries](https://nodejs.org/en/download/prebuilt-binaries), or [building from source](https://nodejs.org/en/download/source-code). In this guide, we'll cover the most common method of installing Node.js using the official installer.

### Download Node.js
Visit [nodejs.org](https://nodejs.org/en/download) and download the appropriate installer for your operating system (Windows, macOS, or Linux).

### Run the Installer
Once the download is complete, run the installer and follow the on-screen instructions. The installer will guide you through the installation process, including selecting the installation directory and any additional options you may want to configure.

### Verify Installation
After the installation is complete, you can verify that Node.js and npm (Node Package Manager) are installed correctly by opening a terminal or command prompt and typing the following commands:

```bash
node -v
npm -v
```

These commands will display the versions of Node.js and npm installed on your system. If you see version numbers displayed, congratulations! You've successfully installed Node.js.

### Update npm (Optional)
It's a good idea to keep npm up to date. You can do this by running the following command:

```bash
npm install npm@latest -g
```

This will update npm to the latest version available.

That's it! You've now installed Node.js on your system. You're ready to write your [first Node.js program](./quick-start). 

> [!note]
> If you ran into any issues during the installation process, feel free to report them on the [Node.js GitHub repository](https://github.com/nodejs/node/issues/)

