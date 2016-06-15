import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { By, until } from 'selenium-webdriver';

chai.use(chaiAsPromised);

export default (driver, baseURL) =>
describe('fillMonthPersonnel', () => {
  it('fillMonthPersonnel', (done) => {
    // open index
    driver.get(`${baseURL}/`);
    // expect(driver.getTitle()).to.eventually.equal('人力资源管理系统');

    // input username
    driver.findElement(By.css('input[name="name"]')).sendKeys('test');

    // input password
    driver.findElement(By.css('input[name="password"]')).sendKeys('test');

    // press login button
    driver.findElement(By.css('input[type="submit"]')).click();

    //点击月表填报
    driver.findElement(By.css('#sidebar > ul > li.submenu.open > a')).click();

    //点击人事汇报
    driver.findElement(By.css('#sidebar > ul > li.submenu.open > ul > li:nth-child(2) > a')).click();

    driver.findElement(By.css('input[name="staff_number"]')).sendKeys('3');
    driver.findElement(By.css('input[type="submit"]')).click();

    //查看是否成功
    driver.findElement(By.css('#sidebar > ul > li:nth-child(5) > a > span')).click();

    const elem0 = driver.findElement(By.css('#breadcrumb > a.current'));
    expect(elem0.getText())
      .to.eventually.equal('月报查询')
      .and.notify(done);

    //click search button
    driver.findElement(By.css('#content > div.container-fluid > div > div >'
      +' div > div.widget-content.nopadding > table > tbody >'
      +' tr:nth-child(1) > td:nth-child(3)')).click();

    //check search
    const elem1 = driver.findElement(By.css('#content > div.container-fluid >'
      +' div > div.span8 > div > div.widget-content > table > tbody > tr > td:nth-child(1)'));
    expect(elem1.getText())
      .to.eventually.equal('3')
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
