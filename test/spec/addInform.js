import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';

export default (driver, baseURL) =>
describe('Add - Inform', () => {
  it('Add - Inform', async () => {
    await driver.get(`${baseURL}/`);
    expect(await driver.getTitle()).to.eventually.equal('人力资源管理系统');

    await driver.findElement(By.css('input[name="name"]')).sendKeys('admin');

    await driver.findElement(By.css('input[name="password"]')).sendKeys('admin');

    await driver.findElement(By.css('input[type="submit"]')).click();

    (await driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_home.php`)
        .and.notify(done);

    await driver.findElement(By.css('#content >' +
        ' div.container-fluid > div > ul >' +
        ' li.bg_lo.span3 > a')).click();

    expect(await driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice.php`)
        .and.notify(done);

    await driver.findElement(By.css('#content >' +
      ' div.container-fluid > div >' +
      ' div > a')).click();

    expect(await driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice_insert.php`)
        .and.notify(done);

    await driver.findElement(By.css('input[name="notify_title"]')).sendKeys('TEST_TITLE');
    await driver.findElement(By.css('textarea[name="notify_content"]')).sendKeys('TEST_CONTENT');

    await driver.findElement(By.css('#content >' +
      ' div.container-fluid > div > div >' +
      ' div > div.widget-content.nopadding >' +
      ' form > div.form-actions > button.btn.btn-warning')).click();

    expect(await driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice.php`)
        .and.notify(done);

    await driver.findElement(By.css('#content >' +
      ' div.container-fluid > div > div > a')).click();

    expect(await driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice_insert.php`)
        .and.notify(done);

    await driver.findElement(By.css('input[name="notify_title"]')).sendKeys('TEST_TITLE');
    await driver.findElement(By.css('textarea[name="notify_content"]')).sendKeys('TEST_CONTENT');

    await driver.findElement(By.css('#content >' +
      ' div.container-fluid > div > div >' +
      ' div > div.widget-content.nopadding >' +
      ' form > div.form-actions > button.btn.btn-success')).click();

    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();

    expect(await driver.getTitle()).to.eventually.equal('企业信息管理系统');
    expect(await driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/ad_notice.php`)
        .and.notify(done);

    await driver.findElement(By.css('#user-nav>' +
      'ul>li:nth-child(2) a[href="/anli/' +
      'logout.php"]')).click();

    await driver.wait(until.alertIsPresent());

    await driver.switchTo().alert().accept();

    await driver.switchTo().defaultContent();

    expect(await driver.getCurrentUrl())
        .to.eventually.equal(`${baseURL}/login_page.php`)
        .and.notify(done);
  });
});
