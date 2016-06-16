import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';

export default (driver, baseURL) =>
describe('Report Form', () => {
  it('Login', async () => {
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
    await driver.findElement(By.css('input[name="name"]')).sendKeys('test');

    // input password
    await driver.findElement(By.css('input[name="password"]')).sendKeys('test');

    // press login button
    await driver.findElement(By.css('input[type="submit"]')).click();

    // check if we are in logged page
    await driver.wait(until.titleIs('人力资源管理系统'));
    expect(await driver.getCurrentUrl())
      .to.equal(`${baseURL}/user_home.php`);

    // 点击月报查询
    await driver.findElement(By.css('#sidebar a[href="/anli/report_list.php"]')).click();

    expect(await driver.findElement(By.css('#content .widget-title>h5'))
      .getText())
      .to.equal('月报查询');

    // 点击绩效考核
    await driver.findElement(By.css('#content .widget-content '
      + 'table a[href^="/anli/report_performance.php"]'))
      .click();
    expect(await driver.getCurrentUrl())
      .to.match(/.*?\/anli\/report_performance.php\?id=\d+/);

    // 点击月报查询
    await driver.findElement(By.css('#sidebar a[href="/anli/report_list.php"]')).click();
    expect(await driver.getCurrentUrl())
      .to.equal(`${baseURL}/report_list.php`);


    // 点击人事汇报
    await driver.findElement(By.css('#content .widget-content '
      + 'table a[href^="/anli/report_staffchange.php"]'))
      .click();
    expect(await driver.getCurrentUrl())
      .to.match(/.*?\/anli\/report_staffchange.php\?id=\d+/);

    // back to home page
    await driver.get(`${baseURL}/user_home.php`);

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
  });
});
