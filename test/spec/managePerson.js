import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';

export default (driver, baseURL) =>
describe('Manage Person', () => {
  it('Manage Person', async () => {
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
    expect(await driver.getCurrentUrl())
      .to.equal(`${baseURL}/user_home.php`);

    // 进入人员管理
    await driver.findElement(By.css('#sidebar > ul > li:nth-child(3) > a')).click();

    // 添加
    await driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > div > div > div.widget-title > a')).click();
    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem0.getText()).to.equal('人员添加');

    // 填写内容
    await driver.findElement(By.css('input[name="staff_name"]')).sendKeys('测试人员');
    // await driver.findElement(By.css('select[name="staff_gender"]')).sendKeys('男');
    await driver.findElement(By.css('input[name="staff_age"]')).sendKeys('99');
    // await driver.findElement(By.css('select[name="staff_gender"]')).sendKeys('男');
    await driver.findElement(By.css('input[name="staff_phone"]')).sendKeys('10086');
    await driver.findElement(By.css('input[name="staff_email"]')).sendKeys('10@1.0');

    // 添加按钮
    await driver.findElement(By.css('#personnelChanges > div.form-actions > button')).click();

    // 弹窗
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();

    // 编辑
    await driver.findElement(By.css('#content > div.container-fluid >'
        + ' div > div > div > div.widget-content.nopadding > table > tbody >'
        + ' tr:nth-last-child(1) > td:nth-child(8) > a > button.btn-primary')).click();
    await driver.findElement(By.css('input[name="staff_age"]')).sendKeys('0');

    // 编辑按钮
    await driver.findElement(By.css('#personnelChanges > div.form-actions > button')).click();

    // 弹窗
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();

    // 删除
    await driver.findElement(By.css('#content > div.container-fluid >'
        + ' div > div > div > div.widget-content.nopadding > table > tbody >'
        + ' tr:nth-last-child(1) > td:nth-child(8) > button')).click();

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
