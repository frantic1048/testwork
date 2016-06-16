import webdriver, { Browser } from 'selenium-webdriver';
import { describe, after, it } from 'selenium-webdriver/testing';

import { baseURL } from '../testConfig'; // eslint-disable-line import/no-unresolved

/**
 * where test runs
 * @type {Array}
 */
const targets = {
  linux: [ // Linux
    ['Chrome', Browser.CHROME],
    ['Firefox', Browser.FIREFOX],
  ],
  darwin: [ // OS X
    ['Chrome', Browser.CHROME],
    ['Firefox', Browser.FIREFOX],
    ['Safari', Browser.SAFARI],
  ],
  win32: [ // Windows
    ['Chrome', Browser.CHROME],
    ['Firefox', Browser.FIREFOX],
    ['IE', Browser.IE],
    ['Edge', Browser.EDGE],
  ],
};

/**
* Testing suites
*/
import simpleGet from './spec/simpleGet';
import loginLogout from './spec/loginLogout';
import reportForm from './spec/reportForm';

import viewInform from './spec/viewInform';// by wjh
import addInform from './spec/addInform';// by wjh
import deleteInform from './spec/deleteInform';// by wjh
import viewUser from './spec/viewUser';// by wjh
import addUser from './spec/addUser';// by wjh
import editUser from './spec/editUser';// by wjh
import deleteUser from './spec/deleteUser';// by wjh
import viewMonth from './spec/viewMonth';// by wjh
import addMonth from './spec/addMonth';// by wjh

/**
 * what test runs
 * @type {Array}
 */
const suites = [
  simpleGet,
  loginLogout,
  reportForm,
  viewInform, // by wjh
  addInform, // by wjh
  deleteInform, // by wjh
  viewUser, // by wjh
  addUser, // by wjh
  editUser, // by wjh
  deleteUser, // by wjh
  viewMonth, // by wjh
  addMonth, // by wjh
];

/**
* build webdriver instance with specific driverName
* @param  {string} driverName - one of webdriver.Browser
* @return {webdriver.WebDriver} WebDriver client instance
* @see http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Browser.html
* @see http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html
*/
function getDriver(driverName) {
  let driver;
  try {
    driver = new webdriver.Builder()
      .forBrowser(driverName)
      .build();
  } catch (ex) {
    driver = null;
  }
  return driver;
}

const platform = process.platform;

for (const [target, browser] of targets[platform]) {
  describe(`${platform}.${target}`, () => {
    const driver = getDriver(browser);
    it('setup', (done) => {
      if (!driver) done(new Error(`no environment for ${target}`));
      else done();
    });
    if (driver) {
      suites.forEach(s => s(driver, baseURL, { target, platform }));
      after(() => driver.quit());
    }
  });
}
