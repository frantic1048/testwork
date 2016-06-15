import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { By, until } from 'selenium-webdriver';

chai.use(chaiAsPromised);

export default (driver, baseURL) =>
describe('Home List-Department', () => {
  it('Home List-Department', (done) => {
    // open index
    driver.get(`${baseURL}/`);

    // input username
    driver.findElement(By.css('input[name="name"]')).sendKeys('test');

    // input password
    driver.findElement(By.css('input[name="password"]')).sendKeys('test');

    // press login button
    driver.findElement(By.css('input[type="submit"]')).click();

    // 部门信息
    driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lb a[href="/anli/department_info.php"]')).click();
    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem0.getText())
      .to.eventually.equal('部门信息');
    driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 人员管理
    driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_ls a[href="/anli/staffing_manage.php"]')).click();
    const elem1 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem1.getText())
      .to.eventually.equal('人员管理');
    driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 绩效考核
    driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_ly a[href="/anli/performance_submit.php"]')).click();
    const elem2 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem2.getText())
      .to.eventually.equal('绩效考核');
    driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 人事汇报
    driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lo a[href="/anli/staffing_submit.php"]')).click();
    const elem3 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem3.getText())
      .to.eventually.equal('人事汇报');
    driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 月报查询
    driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lg a[href="/anli/staffing_submit.php"]')).click();
    const elem4 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem4.getText())
      .to.eventually.equal('月报查询');
    driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click();

    // 活动申报
    driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lr a[href="/anli/staffing_submit.php"]')).click();
    const elem5 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem5.getText())
      .to.eventually.equal('活动申报');
    driver.findElement(By.css('#breadcrumb > a.tip-bottom')).click().then(done);

    // we are logged in
    // click the logout button
    driver.findElement(By.css('#user-nav>ul>li:nth-child(2) a[href="/anli/logout.php"]')).click();

    // wait alert shows
    driver.wait(until.alertIsPresent());


    // siwtch to alert window
    // and accept it
    driver.switchTo().alert().accept();

    // switch bach to main window
    driver.switchTo().defaultContent();
    // check if we are back to login page
    // expect(driver.getCurrentUrl())
    //   .to.eventually.equal(`${baseURL}login_page.php`)
  });
});
