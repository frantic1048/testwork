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
<<<<<<< 04442c2d2c6f2e40eb8906ec57d1094d07c2f21b
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
import homeList from './spec/homeList';
=======
// import loginLogout from './spec/loginLogout';
// import homeListAdmin from './spec/homeListAdmin';
<<<<<<< b3fddd76459c88c13d857d5aa5436ab9bfd871dd
<<<<<<< b6c600b0aabdbe7afe0cde918d406fbf9ab7b520
// import homeListDepartment from './spec/homeListDepartment';
>>>>>>> 完成2.3.1
=======
import homeListDepartment from './spec/homeListDepartment';
>>>>>>> fix bugs
=======
// import homeListDepartment from './spec/homeListDepartment';
<<<<<<< 7ebdd8b644a763be94b907d2407f1da6d6b04a86
import checkDepartmentRecord from './spec/checkDepartmentRecord';
>>>>>>> 完成2.3.2/2.4.1/2.4.2
=======
// import checkDepartmentRecord from './spec/checkDepartmentRecord';
// import managePerson from './spec/managePerson';
import applyActivity from './spec/applyActivity';
>>>>>>> 完成2.15和2.16

/**
 * what test runs
 * @type {Array}
 */
const suites = [
<<<<<<< 04442c2d2c6f2e40eb8906ec57d1094d07c2f21b
<<<<<<< c9660e628be45b701c0d6984bc15ee314ed3da00
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
=======
  // simpleGet,
  // loginLogout,
  homeList,
>>>>>>> test homeList
=======
  simpleGet,
  // loginLogout,
  // homeListAdmin,
<<<<<<< b3fddd76459c88c13d857d5aa5436ab9bfd871dd
<<<<<<< b6c600b0aabdbe7afe0cde918d406fbf9ab7b520
  // homeListDepartment,
>>>>>>> 完成2.3.1
=======
  homeListDepartment,
>>>>>>> fix bugs
=======
  // homeListDepartment,
<<<<<<< 7ebdd8b644a763be94b907d2407f1da6d6b04a86
  checkDepartmentRecord,
>>>>>>> 完成2.3.2/2.4.1/2.4.2
=======
  // checkDepartmentRecord,
  // managePerson,
  applyActivity,
>>>>>>> 完成2.15和2.16
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
