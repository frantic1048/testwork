===========
Testwork
===========

-----------
部署
-----------


- `Linux`_
- `OS X`_
- `Windows`_


Linux
==============

安装 Node.js
--------------

根据你的发行版，使用对应的包管理器安装：

Arch Linux

.. sourcecode :: bash

  pacman -S nodejs npm

Ubuntu 与基于 Debian 的发行版

.. sourcecode :: bash

  curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
  sudo apt-get install -y nodejs


更多发行版参见 Node.js 文档：`Installing Node.js via package manager`_

.. _`Installing Node.js via package manager`: https://nodejs.org/en/download/package-manager/

安装 Webdriver 组件
--------------------

Linux 下需要测试的浏览器与对应的 Webdriver 组件有：

Firefox
  直接通过系统的包管理器安装最新版 Firefox 即可。

Chrome/chromedriver
  它会在安装项目依赖的时候自动安装。


安装项目依赖
------------

克隆该仓库代码到本地，使用任意图形化 git 前端，或者直接使用 ``git``，这里以后者操作为例：

.. sourcecode :: bash

  # 进入你想要存放此仓库代码的目录
  # e.g. cd ~/my-github-repos

  # 克隆此仓库到本地
  git clone https://github.com/frantic1048/testwork.git

  # 安装项目依赖，此操作需要大约三分钟
  npm run installDep

至此项目就绪。可以执行 ``npm test`` 检查测试是否能够正常启动。

OS X
====

安装 Node.js
--------------

可以通过 Homebrew 安装：

.. sourcecode ::

  brew install node

更多方法详见：`Installing Node.js via package manager#OSX`_

.. _`Installing Node.js via package manager#OSX`: https://nodejs.org/en/download/package-manager/#osx

安装 Webdriver 组件
--------------------

OS X 下需要测试的浏览器与对应的 Webdriver 组件有：

.. _firefox_download: https://www.mozilla.org/en-US/firefox/all/

Firefox
  前往 `Firefox 官网下载页面 <firefox_download_>`_ 下载并安装。

Chrome/ChromeDriver
  它会在安装项目依赖的时候自动安装。

Safari/SafariDriver
  下载 `SafariDriver.safariextz <http://selenium-release.storage.googleapis.com/2.48/SafariDriver.safariextz>`_ 并安装。
  随后启动 Safari，在其 设置 -> 扩展 选项卡中启用 ``WebDriver``。

安装项目依赖
------------

克隆该仓库代码到本地，使用任意图形化 git 前端，或者直接使用 ``git``，这里以后者操作为例：

.. sourcecode :: bash

  # 进入你想要存放此仓库代码的目录
  # e.g. cd ~/my-github-repos

  # 克隆此仓库到本地
  git clone https://github.com/frantic1048/testwork.git

  # 安装项目依赖，此操作需要大约三分钟
  npm run installDep

至此项目就绪。可以执行 ``npm test`` 检查测试是否能够正常启动。

Windows
=======

安装 Node.js
--------------

.. _nodejs_win_download: https://nodejs.org/en/download/current/

前往 `Node.js 官网下载页面 <nodejs_win_download_>`_，选择与系统适配的（32-bit 或者 64-bit）版本即可。推荐使用 ``.msi`` 安装包。

安装 Webdriver 组件
--------------------

Windows 下需要测试的浏览器与对应的 Webdriver 组件有：

Firefox
  前往 `Firefox 官网下载页面 <firefox_download_>`_ 下载并安装。

Chrome/ChromeDriver
  它会在安装项目依赖的时候自动安装。

IE/IEDriverServer
  下载 `IEDriverServer_Win32_2.53.1.zip <http://selenium-release.storage.googleapis.com/2.53/IEDriverServer_Win32_2.53.1.zip>`_ 解压并安装。

Edge/MicrosoftWebDriver（Windows 10）
  下载 `MicrosoftWebDriver.msi <http://go.microsoft.com/fwlink/?LinkId=619687>`_ 并安装之。


安装项目依赖
------------

克隆该仓库代码到本地，使用任意图形化 git 前端，或者直接使用 ``git``，这里以后者操作为例：

.. sourcecode :: bash

  # 进入你想要存放此仓库代码的目录
  # e.g. cd ~/my-github-repos

  # 克隆此仓库到本地
  git clone https://github.com/frantic1048/testwork.git

  # 安装项目依赖，此操作需要大约三分钟
  npm run installDep

至此项目就绪。可以执行 ``npm test`` 检查测试是否能够正常启动。

-----------
开发
-----------

WIP
