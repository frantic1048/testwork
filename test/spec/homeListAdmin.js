import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';

export default (driver, baseURL) =>
describe('Home List-Admin', () => {
  it('Home List-Admin', async () => {
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

        // 备案部门
    await driver.findElement(By.css('#content > div.container-fluid >'
      + 'div > ul > li.bg_lb > a[href="/anli/ad_departments.php"]')).click();
    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem0.getText()).to.equal('部门备案');
    await driver.get(`${baseURL}/ad_home.php`);

    // 数据汇总
    await driver.findElement(By.css('#content > div.container-fluid >'
      + 'div > ul > li.bg_lg > a[href="/anli/staff_manage.php"]')).click();
    const elem1 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem1.getText()).to.equal('数据汇总');
    await driver.get(`${baseURL}/ad_home.php`);

    // 对比分析
    await driver.findElement(By.css('#content > div.container-fluid >'
      + 'div > ul > li > a[href="/anli//anli/ad_analysis_compare.php.php"]')).click();
    const elem2 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem2.getText()).to.equal('对比分析');
    await driver.get(`${baseURL}/ad_home.php`);

    // 趋势分析
    await driver.findElement(By.css('#content > div.container-fluid >'
      + 'div > ul > li > a[href="/anli/ad_analysis_trend1.php"]')).click();
    const elem3 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem3.getText()).to.equal('趋势分析');
    await driver.get(`${baseURL}/ad_home.php`);

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
