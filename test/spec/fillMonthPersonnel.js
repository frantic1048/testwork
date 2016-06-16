import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';

export default (driver, baseURL) =>
describe('fillMonthPersonnel', () => {
  it('fillMonthPersonnel', async () => {
    // open index
    await driver.get(`${baseURL}/`);
    // expect(driver.getTitle()).to.eventually.equal('人力资源管理系统');

    // input username
    await driver.findElement(By.css('input[name="name"]')).sendKeys('test');

    // input password
    await driver.findElement(By.css('input[name="password"]')).sendKeys('test');

    // press login button
    await driver.findElement(By.css('input[type="submit"]')).click();

    // 点击
    await driver.findElement(By.css('#content > div.container-fluid >'
        +' div.quick-actions_homepage > ul > li.bg_lo > a')).click();

    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem0.getText()).to.equal('人事汇报');

    // await driver.findElement(By.css('input[name="staff_number"]')).sendKeys('3');
    // await driver.findElement(By.css('#personnelChanges > div.form-actions > button')).click();

    // // 弹窗
    // await driver.wait(until.alertIsPresent());
    // await driver.switchTo().alert().accept();
    // await driver.switchTo().defaultContent();

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
