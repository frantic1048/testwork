import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { By, until } from 'selenium-webdriver';

chai.use(chaiAsPromised);

export default (driver, baseURL) =>
describe('Home List', () => {
  it('Home List', (done) => {
    // open index
    driver.get(`${baseURL}/`);
    // expect(driver.getTitle()).to.eventually.equal('人力资源管理系统');

    // input username
    driver.findElement(By.css('input[name="name"]')).sendKeys('admin');

    // input password
    driver.findElement(By.css('input[name="password"]')).sendKeys('admin');

    // press login button
    driver.findElement(By.css('input[type="submit"]')).click();

    // check if we are in logged page
    // expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
    // expect(driver.getCurrentUrl())
    //   .to.eventually.equal(`${baseURL}ad_home.php`)
    //   .and.notify(done);

    // 备案部门
    driver.findElement(By.css('#content > div.container-fluid '
      + '> div > ul > li.bg_lb a[href="/anli/ad_departments.php"]')).click();
    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem0.getText())
      .to.eventually.equal('部门备案')
      .and.notify(done);
    driver.get(`${baseURL}/`);

    // 数据汇总
    driver.findElement(By.css('#content > div.container-fluid > '
      + 'div > ul > li.bg_lg.span3 > a[href="/anli/staff_manage.php"]')).click();
    const elem1 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem1.getText())
      .to.eventually.equal('数据汇总')
      .and.notify(done);
    driver.get(`${baseURL}/`);

    // 对比分析
    driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lb > a[href="/anli//anli/ad_analysis_compare.php.php"]')).click();
    const elem2 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem2.getText())
      .to.eventually.equal('对比分析')
      .and.notify(done);
    driver.get(`${baseURL}/`);

    // 趋势分析
    driver.findElement(By.css('#content > div.container-fluid >'
      + ' div > ul > li.bg_lb > a[href="/anli/ad_analysis_trend1.php"]')).click();
    const elem3 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem3.getText())
      .to.eventually.equal('趋势分析')
      .and.notify(done);
    driver.get(`${baseURL}/`);

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
    //   .and.notify(done);
  });
});
