import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { By, until } from 'selenium-webdriver';

chai.use(chaiAsPromised);

export default (driver, baseURL) =>
describe('Add - Inform', () => {
  it('Add - Inform', (done) => {
    driver.get(`${baseURL}/`);
    expect(driver.getTitle()).to.eventually.equal('人力资源管理系统');

    driver.findElement(By.css('input[name="name"]')).sendKeys('admin');

    driver.findElement(By.css('input[name="password"]')).sendKeys('admin');

    driver.findElement(By.css('input[type="submit"]')).click();

    (driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_home.php`)
        .and.notify(done);

    driver.findElement(By.css('#content >' +
        ' div.container-fluid > div > ul >' +
        ' li.bg_lo.span3 > a')).click();

    expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice.php`)
        .and.notify(done);

    driver.findElement(By.css('#content >' +
      ' div.container-fluid > div >' +
      ' div > a')).click();

    expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice_insert.php`)
        .and.notify(done);

    driver.findElement(By.css('input[name="notify_title"]')).sendKeys('TEST_TITLE');
    driver.findElement(By.css('textarea[name="notify_content"]')).sendKeys('TEST_CONTENT');

    driver.findElement(By.css('#content >' +
      ' div.container-fluid > div > div >' +
      ' div > div.widget-content.nopadding >' +
      ' form > div.form-actions > button.btn.btn-warning')).click();

    expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice.php`)
        .and.notify(done);

    driver.findElement(By.css('#content >' +
      ' div.container-fluid > div > div > a')).click();

    expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice_insert.php`)
        .and.notify(done);

    driver.findElement(By.css('input[name="notify_title"]')).sendKeys('TEST_TITLE');
    driver.findElement(By.css('textarea[name="notify_content"]')).sendKeys('TEST_CONTENT');

    driver.findElement(By.css('#content >' +
      ' div.container-fluid > div > div >' +
      ' div > div.widget-content.nopadding >' +
      ' form > div.form-actions > button.btn.btn-success')).click();

    driver.wait(until.alertIsPresent());
    driver.switchTo().alert().accept();
    driver.switchTo().defaultContent();

    expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice.php`)
        .and.notify(done);

    driver.findElement(By.css('#user-nav>' +
      'ul>li:nth-child(2) a[href="/anli/' +
      'logout.php"]')).click();

    driver.wait(until.alertIsPresent());

    driver.switchTo().alert().accept();

    driver.switchTo().defaultContent();

    expect(driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/login_page.php`)
        .and.notify(done);
  });
});
