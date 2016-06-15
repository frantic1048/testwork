===========
Testwork
===========

|ci|_

  .. |ci| image:: https://img.shields.io/travis/frantic1048/testwork.svg?style=flat-square
  .. _ci: https://travis-ci.org/frantic1048/testwork

.. contents::
  :depth: 2
  :local:
  :backlinks: none

-----------
部署
-----------

Linux
==============

安装 Node.js
--------------

根据你的发行版，使用对应的包管理器安装：

Arch Linux

.. code :: bash

  pacman -S nodejs npm

Ubuntu 与基于 Debian 的发行版

.. code :: bash

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

.. code :: bash

  # 进入你想要存放此仓库代码的目录
  # e.g. cd ~/my-github-repos

  # 克隆此仓库到本地
  git clone https://github.com/frantic1048/testwork.git

  # 安装项目依赖，此操作需要大约三分钟
  npm run installDep

编辑项目配置
------------

复制项目根目录的 ``testConfig.js.example`` 并命名为 ``testConfig.js`` ，在其中填写待测试的网站首页路径。在配置文件中已经预留了一个地址，在没有特别通知的时候可以直接使用。

至此项目就绪。可以执行 ``npm test`` 检查测试是否能够正常启动。

OS X
====

安装 Node.js
--------------

可以通过 Homebrew 安装：

.. code ::

  brew install node

更多方法详见：`Installing Node.js via package manager#OSX`_

.. _`Installing Node.js via package manager#OSX`: https://nodejs.org/en/download/package-manager/#osx

安装 Webdriver 组件
--------------------

OS X 下需要测试的浏览器与对应的 Webdriver 组件有：

Firefox
  前往 `Firefox 官网下载页面 <https://www.mozilla.org/en-US/firefox/all/>`_ 下载并安装。

Chrome/ChromeDriver
  它会在安装项目依赖的时候自动安装。

Safari/SafariDriver
  下载 `SafariDriver.safariextz <http://selenium-release.storage.googleapis.com/2.48/SafariDriver.safariextz>`_ 并安装。
  随后启动 Safari，在其 设置 -> 扩展 选项卡中启用 ``WebDriver``。

安装项目依赖
------------

克隆该仓库代码到本地，使用任意图形化 git 前端，或者直接使用 ``git``，这里以后者操作为例：

.. code :: bash

  # 进入你想要存放此仓库代码的目录
  # e.g. cd ~/my-github-repos

  # 克隆此仓库到本地
  git clone https://github.com/frantic1048/testwork.git

  # 安装项目依赖，此操作需要大约三分钟
  npm run installDep

编辑项目配置
------------

复制项目根目录的 ``testConfig.js.example`` 并命名为 ``testConfig.js`` ，在其中填写待测试的网站首页路径。在配置文件中已经预留了一个地址，在没有特别通知的时候可以直接使用。

至此项目就绪。可以执行 ``npm test`` 检查测试是否能够正常启动。

Windows
=======

安装 Node.js
--------------

前往 `Node.js 官网下载页面 <https://nodejs.org/en/download/current/>`_，选择与系统适配的（32-bit 或者 64-bit）版本即可。推荐使用 ``.msi`` 安装包。

安装 Webdriver 组件
--------------------

Windows 下需要测试的浏览器与对应的 Webdriver 组件有：

Firefox
  前往 `Firefox 官网下载页面 <https://www.mozilla.org/en-US/firefox/all/>`_ 下载并安装。

Chrome/ChromeDriver
  它会在安装项目依赖的时候自动安装。

  安装依赖之后，将此项目根目录的 ``node_modules/.bin/`` 路径加入环境变量 PATH 中。

IE/IEDriverServer
  下载 `IEDriverServer_Win32_2.53.1.zip <http://selenium-release.storage.googleapis.com/2.53/IEDriverServer_Win32_2.53.1.zip>`_ 解压，并将里面的可执行文件所在目录设置在环境变量 PATH 中。

  在 IE 的设置，安全选项卡中，关闭每个域的“保护模式”。

  如果是 IE 10 及以上版本，另需要在设置的高级选项卡中关闭“增强的保护模式”功能。

  确保 IE 缩放处于 100% 的状态。

  对于 IE 11 ，在注册表编辑器中，找到键 ``HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BFCACHE`` ， 对于 64 位 Windows 则是 ``HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BFCACHE`` ，如果没有 ``FEATURE_BFCACHE`` 这个键，则需要手动创建它，然后在其中创建一个 DWORD 值，命名为 ``iexplore.exe`` ，值设置为 0。

      细节解释见： `InternetExplorerDriver#required-configuration <https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver#required-configuration>`_

Edge/MicrosoftWebDriver（Windows 10）
  首先确认你的 Windows 10 版本：

  - Windows 10 Build 10240：下载 `MicrosoftWebDriver 1 <https://www.microsoft.com/en-us/download/details.aspx?id=48212>`_ 并安装。
  - Windows 10 Fall 2015 Update：下载 `MicrosoftWebDriver 2 <https://www.microsoft.com/en-us/download/details.aspx?id=49962>`_ 并安装。
  - Windows 10 最新 **预览版** ：下载 `MicrosoftWebDriver 3 <https://www.microsoft.com/en-us/download/details.aspx?id=48740>`_ 并安装

      详细信息见： `WebDriver - Microsoft Edge Development <https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/dev-guide/tools/webdriver/>`_

  随后，将 MicrosoftWebDriver 的安装目录添加进环境变量 PATH 中。

对于修改注册表和环境变量等操作，请重启一下系统保证设置已经生效。

安装项目依赖
------------

克隆该仓库代码到本地，使用任意图形化 git 前端，或者直接使用 ``git``，这里以后者操作为例：

.. code :: bash

  # 进入你想要存放此仓库代码的目录
  # e.g. cd ~/my-github-repos

  # 克隆此仓库到本地
  git clone https://github.com/frantic1048/testwork.git

  # 安装项目依赖，此操作需要大约三分钟
  npm run installDep

编辑项目配置
------------

复制项目根目录的 ``testConfig.js.example`` 并命名为 ``testConfig.js`` ，在其中填写待测试的网站首页路径。在配置文件中已经预留了一个地址，在没有特别通知的时候可以直接使用。

至此项目就绪。可以执行 ``npm test`` 检查测试是否能够正常启动。

-----------
开发
-----------

.. admonition:: 注意

  - 永远不要向 master 分支 push
  - 始终在自己创建的分支上添加代码
  - @frantic1048 将会合并它们

项目结构
=============

.. code::

  .
  ├── doc                   // [预留]文档目录
  ├── .eslintrc.js          // ESLint 配置
  ├── .git                  // 不要动
  ├── .gitignore            // git 忽略文件配置
  ├── .tern-project         // TernJS 配置
  ├── .travis.yml           // Travis CI 配置
  ├── node_modules          // [忽略] npm 依赖目录
  ├── package.json          // 目录
  ├── README.rst            // 你正在阅读的文件
  ├── testConfig.js.example // 项目配置模板
  ├── testConfig.js         // 项目配置
  └── test                  // 测试程序目录
      ├── index.js          // 测试程序入口
      └── spec              // 测试用例目录
          └── *.js          // 测试用例模块

开发流程
=============

1.

  在本地创建新的 git 分支，根据将要创建的用例模块名（不包含后缀名；下面会介绍）作为分支名字。

#.

  在 ``test/spec/`` 目录下创建用例模块（``<模块名>.js``），譬如创建一个测试登录功能的模块：``simpleLogin.js``

  并在 ``test/index.js`` 中添加对应用例，以 ``simpleLogin.js`` 为例（ ``+`` 开头的为添加的内容）：

  .. code:: diff

    @@ -28,6 +28,7 @@
    * Testing suites
    */
    import simpleGet from './spec/simpleGet';
    +import simpleLogin from './spec/simpleLogin';

    /**
      * what test runs
    @@ -35,6 +36,7 @@
      */
    const suites = [
      simpleGet,
    +  simpleLogin,
    ];

    /**

#.

  在添加用例模块中编写测试用例。见 `编写测试`_

#.

  将创建的分支的代码 push 到 GitHub，创建一个合并到 master 的 Pull Request，此后 @frantic1048 将会来处理后面的合并。
  关于创建 Pull Request，可参见：`Creating a pull request <https://help.github.com/articles/creating-a-pull-request/>`_

代码规范
=============

整个项目采用 Airbnb JavaScript 规范，详细规则见：`Airbnb JavaScript 编码规范`_

.. _`Airbnb JavaScript 编码规范`: https://github.com/yuche/javascript

你可以在项目根目录执行：``npm run lint`` 来检查代码是否规范，以及执行 ``npm run lint:fix`` 来修复 **部分** 风格问题。

在代码最终 **提交前** 请确保执行 ``npm run lint`` **不会报任何错误** 。如果你使用 Atom_ 等支持 ESLint 的文本编辑器/IDE那么你可以获得实时的代码检查提示。

.. _Atom: http://atom.io/

编写测试
=============

这里介绍用例模块里面需要编写的内容。

一个用例模块的基本结构如下：

.. code:: js

  import { it, describe } from 'selenium-webdriver/testing';
  import { expect } from 'chai';

  export default (driver, baseURL) =>
  describe('用例描述', () => {
    it('子用例描述', async () => {
      /*
       * 在这里编写测试用例内容
       */
    });

    // 如果要添加更多的子用例
    // 像这样增加 it() 块即可
    it('子用例描述', async () => {
      /*
       * 在这里编写测试用例内容
       */
    });
  });

在模块内会用到的有以下变量：

``baseURL``

  这是要测试的网站的入口 URL。它是一个字符串。

``expect``

  用于编写断言。比如 *变量 a 的值应该是 'Houmura'* 的代码写作：

  .. code:: js

    expect(a).to.equal('Houmura');

  断言用来描述期望的运行结果，并用实际运行的结果与之比较。断言失败的时候会抛出错误，从而测试用例不能通过。

  关于 expect 的用法，详见：`Assertion Styles - chai#Expect`_

.. _`Assertion Styles - chai#Expect`: http://chaijs.com/guide/styles/#expect

``driver``

  这是一个 WebDriver 的实例，可视作一个浏览器，在这上面有一系列操作浏览器的接口（打开某个页面，对页面上某个元素进行鼠标点击/按键……），用它来描述每个测试用例需要做什么操作。

  例如打开一个网址的操作用代码写作：

  .. code:: js

    driver.get('http://girigiri.love/');

  **注意** ： driver 提供的接口都是异步执行的，也就是说， ``driver.get(..)`` 后面的语句不会等到 .get() 打开目标地址之后才执行。

  为了"等待"每个 driver 的操作完成之后再执行后面的语句，我们应该在每个 driver 前面加上 ``await`` 关键字：

  .. code:: js

    await driver.get('http://girigiri.love/');
    console.log('we are in girigiri.love now~');

  对于有返回值的接口，也是同样的加上 ``await`` 即可：

  .. code:: js

    const title = await driver.getTitle();
    console.log(`page title is ${title}`);

    // 像这样作为函数参数也是可以的，
    // 只要调用前加上 await 关键字即可
    expect(await driver.getTitle())
      .to.equal('ギリギリ爱 - GiriGiriLove');

  关于 WebDriver 更多的操作的表达，参见：`WebDriver - class WebDriver`_

.. _`WebDriver - class WebDriver`: http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html
