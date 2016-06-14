import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { By, until } from 'selenium-webdriver';

chai.use(chaiAsPromised);

export default (driver, baseURL) =>
<<<<<<< 9302e24c85ddb8b7d31196adad9bc67da8c135c4
describe('searchMonthData', () => {
  it('searchMonthData', (done) => {
=======
describe('checkDepartmentInfo', () => {
  it('checkDepartmentInfo', (done) => {
>>>>>>> 【提交测试js】查看部门信息、编辑部门信息、查询月报数据
    // open index
    driver.get(`${baseURL}/`);
    // expect(driver.getTitle()).to.eventually.equal('人力资源管理系统');

    // input username
    driver.findElement(By.css('input[name="name"]')).sendKeys('test');

    // input password
    driver.findElement(By.css('input[name="password"]')).sendKeys('test');

    // press login button
    driver.findElement(By.css('input[type="submit"]')).click();

    driver.findElement(By.css('#sidebar > ul > li:nth-child(5) > a > span')).click();

    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem0.getText())
      .to.eventually.equal('月报查询')
      .and.notify(done);

    //click search button
    driver.findElement(By.css('#content > div.container-fluid > div > div >'
      +' div > div.widget-content.nopadding > table > tbody > tr:nth-child(2) '
      +'> td:nth-child(2) > a > span')).click();

    //check search
    const elem1 = driver.findElement(By.css('#content > div.container-fluid >'
      +' div > div.span8 > div > div.widget-title > h5'));
    expect(elem1.getText())
      .to.eventually.equal('绩效考核')
      .and.notify(done);

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
    expect(driver.getCurrentUrl())
      .to.eventually.equal(`${baseURL}/login_page.php`)
      .and.notify(done);
  });
});
