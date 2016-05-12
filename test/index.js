import { describe, after, it } from 'selenium-webdriver/testing';
import webdriver, { Browser } from 'selenium-webdriver';

/**
 * where test runs
 * unsupported target will be skipped
 * @type {Array}
 */
const targets = [
  ['Chrome', Browser.CHROME],
  ['Firefox', Browser.FIREFOX],
];

/**
* Testing suites
*/
import simpleGet from './spec/simpleGet';

/**
 * what test runs
 * @type {Array}
 */
const suites = [
  simpleGet,
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
  } finally {
    return driver;
  }
}

for (const [target, browser] of targets) {
  describe(`${target}`, () => {
    const driver = getDriver(browser);
    it('setup', (done) => {
      if (!driver) done(new Error(`no environment for ${target}`));
      else done();
    });
    if (driver) {
      suites.forEach(s => s.call(this, driver));
      after(() => driver.quit());
    }
  });
}
