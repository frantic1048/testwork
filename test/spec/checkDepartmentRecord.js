import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';

export default (driver, baseURL) =>
describe('Check Department Record', () => {
  it('Check Department Record', async () => {
    // open index
    // use await before every driver action,
    // to wait until it's asynchronous action done,
    // then we execute next statment
    await driver.get(`${baseURL}/`);

    // if an async action returns a promise,
    // we can add await before it,
    // to directly get the result
    expect(await driver.getTitle()).to.equal('人力资源管理系统');

    // input username
    await driver.findElement(By.css('input[name="name"]')).sendKeys('admin');

    // input password
    await driver.findElement(By.css('input[name="password"]')).sendKeys('admin');

    // press login button
    await driver.findElement(By.css('input[type="submit"]')).click();

    // check if we are in logged page
    expect(await driver.getCurrentUrl())
      .to.equal(`${baseURL}/ad_home.php`);

    // 进入备案管理
    await driver.findElement(By.css('#sidebar > ul > li:nth-child(2) > a')).click();

    // 备案详情页
    await driver.findElement(By.css('#content > div.container-fluid >'
        + ' div > div > div > div.widget-content > table > tbody >'
        + ' tr:nth-child(1) > td.taskOptions > a:nth-child(1) > button')).click();
    const elem0 = driver.findElement(By.css('#content > div.container-fluid >'
        + ' div > div > div > div.widget-title > h5'));
    expect(await elem0.getText()).to.equal('部门信息');
    // 返回
    await driver.findElement(By.css('#content > div.container-fluid >'
        + ' div > div > a > button')).click();
    // 导出Excel
    // await driver.findElement(By.css('#content > div.container-fluid >'
    //     + ' div > div > div > div.widget-content > a > button')).click();

    // we are logged in
    // click the logout button
    await driver.findElement(By.css('#user-nav>ul>li:nth-child(2) a[href="/anli/logout.php"]'))
      .click();

    // wait alert shows
    await driver.wait(until.alertIsPresent());

    // siwtch to alert window
    // and accept it
    await driver.switchTo().alert().accept();

    // switch bach to main window
    await driver.switchTo().defaultContent();
    // check if we are back to login page
    expect(await driver.getCurrentUrl())
      .to.equal(`${baseURL}/login_page.php`);

    // statments are now synchronous
    // we don't need to manually call done() now XD
  });
});
