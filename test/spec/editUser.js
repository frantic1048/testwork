import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';

export default (driver, baseURL) =>
describe('Edit - User', () => {
  it('Edit - User', async () => {
    await driver.get(`${baseURL}/`);
    expect(await driver.getTitle()).to.equal('人力资源管理系统');
    await driver.findElement(By.css('input[name="name"]')).sendKeys('admin');
    await driver.findElement(By.css('input[name="password"]')).sendKeys('admin');
    await driver.findElement(By.css('input[type="submit"]')).click();
    expect(await driver.getTitle()).to.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.equal(`${baseURL}/ad_home.php`);

    await driver.findElement(By.css('#content >' +
      ' div.container-fluid > div > ul >' +
      ' li:nth-child(8) > a')).click();
    expect(await driver.getTitle()).to.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.equal(`${baseURL}/ad_usermanager.php`);

    await driver.findElement(By.css('#content >' +
      ' div.container-fluid > div > div >' +
      ' div > div.widget-content > table >' +
      ' tbody > tr:nth-child(1) > td:nth-child(5)' +
      ' > a > button')).click();
    expect(await driver.getTitle()).to.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.equal(`${baseURL}/ad_usermanager_edit.php`);
    await driver.findElement(By.css('input[name="user_password"]')).sendKeys('TEST_PASSWORD');
    await driver.findElement(By.css('#pwd2')).sendKeys('TEST_PASSWORD');
    await driver.findElement(By.css('#password_validate >' +
      ' div.form-actions > button.btn.btn-warning')).click();
    expect(await driver.getTitle()).to.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.equal(`${baseURL}/ad_usermanager.php`);

    await driver.findElement(By.css('#content > div.container-fluid >' +
      ' div > div > div > div.widget-content > table > tbody >' +
      ' tr:nth-child(1) > td:nth-child(5) > a > button')).click();
    expect(await driver.getTitle()).to.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.equal(`${baseURL}/ad_usermanager_edit.php`);
    await driver.findElement(By.css('input[name="user_password"]')).sendKeys('TEST_PASSWORD');
    await driver.findElement(By.css('input[id="pwd2"]')).sendKeys('TEST_PASSWORD');
    await driver.findElement(By.css('#password_validate >' +
      ' div.form-actions > button.btn.btn-success')).click();
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();
    expect(await driver.getTitle()).to.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.equal(`${baseURL}/ad_usermanager.php`);

    await driver.findElement(By.css('#user-nav>ul>li:nth-child(2) a[href="/anli/logout.php"]')).click();
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();
    expect(await driver.getCurrentUrl())
        .to.equal(`${baseURL}/login_page.php`);
  });
});
