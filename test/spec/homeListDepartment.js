import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';

export default (driver, baseURL) =>
describe('Home List-Department', () => {
  it('Home List-Department', async () => {
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

    // 部门信息
    await driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lb a[href="/anli/department_info.php"]')).click();
    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem0.getText()).to.equal('部门信息');
    await driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 人员管理
    await driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_ls a[href="/anli/staffing_manage.php"]')).click();
    const elem1 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem1.getText()).to.equal('人员管理');
    await driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 绩效考核
    await driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_ly a[href="/anli/performance_submit.php"]')).click();
    const elem2 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem2.getText()).to.equal('绩效考核');
    await driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 人事汇报
    await driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lo a[href="/anli/staffing_submit.php"]')).click();
    const elem3 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem3.getText()).to.equal('人事汇报');
    await driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 月报查询
    await driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lg a[href="/anli/staffing_submit.php"]')).click();
    const elem4 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem4.getText()).to.equal('月报查询');
    await driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 活动申报
    await driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lr a[href="/anli/staffing_submit.php"]')).click();
    const elem5 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem5.getText()).to.equal('活动申报');
    await driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

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
