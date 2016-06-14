import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { By, until } from 'selenium-webdriver';

chai.use(chaiAsPromised);

export default (driver, baseURL) =>
describe('checkDepartmentInfo', () => {
  it('checkDepartmentInfo', (done) => {
    // open index
    driver.get(`${baseURL}/`);
    // expect(driver.getTitle()).to.eventually.equal('人力资源管理系统');

    // input username
    driver.findElement(By.css('input[name="name"]')).sendKeys('test');

    // input password
    driver.findElement(By.css('input[name="password"]')).sendKeys('test');

    // press login button
    driver.findElement(By.css('input[type="submit"]')).click();

    driver.findElement(By.css('#sidebar > ul > li:nth-child(2) > a')).click();

    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem0.getText())
      .to.eventually.equal('部门信息')
      .and.notify(done);

    //click edit button
    driver.findElement(By.css('#content > div.container-fluid > div > div > a > button')).click();

    driver.findElement(By.css('input[name="department_name"]')).sendKeys('财务部修改');

    driver.findElement(By.css('#editForm > div.form-actions > button')).click();

    //check edit
    const elem1 = driver.findElement(By.css('#content > div.container-fluid '
      +' > div > div > div > div.widget-content > table:nth-child(3) '
      +' > tbody > tr:nth-child(1) > td:nth-child(2)'));
    expect(elem1.getText())
      .to.eventually.equal('财务部修改')
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
