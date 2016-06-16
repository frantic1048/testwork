import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';

export default (driver, baseURL) =>
<<<<<<< 904a2aa56b53347adce26aa57f46562097eeaa45
<<<<<<< 9302e24c85ddb8b7d31196adad9bc67da8c135c4
describe('searchMonthData', () => {
<<<<<<< 98038c8819162ae03cd6877f60be34f2afb9cc8f
  it('searchMonthData', (done) => {
=======
describe('checkDepartmentInfo', () => {
  it('checkDepartmentInfo', (done) => {
>>>>>>> 【提交测试js】查看部门信息、编辑部门信息、查询月报数据
=======
describe('searchMonthData', () => {
  it('searchMonthData', (done) => {
>>>>>>> 【提交测试js】填报月报人事、填报月报绩效
=======
  it('searchMonthData', async () => {
>>>>>>> 【提交测试js】修正语法问题
    // open index
    await driver.get(`${baseURL}/`);
    // expect(driver.getTitle()).to.eventually.equal('人力资源管理系统');

    // input username
    await driver.findElement(By.css('input[name="name"]')).sendKeys('test');

    // input password
    await driver.findElement(By.css('input[name="password"]')).sendKeys('test');

    // press login button
    await driver.findElement(By.css('input[type="submit"]')).click();

    await driver.findElement(By.css('#sidebar > ul > li:nth-child(5) > a > span')).click();

    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(await elem0.getText()).to.equal('月报查询');

    //click search button
    await driver.findElement(By.css('#content > div.container-fluid > div > div >'
      +' div > div.widget-content.nopadding > table > tbody > tr:nth-child(2) '
      +'> td:nth-child(2) > a > span')).click();

    //check search
    const elem1 = driver.findElement(By.css('#content > div.container-fluid >'
      +' div > div.span8 > div > div.widget-title > h5'));
    expect(await elem1.getText()).to.equal('绩效考核');

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
