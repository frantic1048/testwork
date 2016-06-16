import { it, describe } from 'selenium-webdriver/testing';
import { expect       } from 'chai';
import { By, until    } from 'selenium-webdriver';
import { saveShot     } from '../util'

export default (driver, baseURL, meta) =>
describe('chartTest', () => {
  it('chart', async () => {
    await driver.get(`${baseURL}/`);
    const title = await driver.getTitle();
    expect(title).to.equal('人力资源管理系统');

    // login
    await driver.findElement(By.css('input[name="name"]')).sendKeys('admin');
    await driver.findElement(By.css('input[name="password"]')).sendKeys('admin');
    await driver.findElement(By.css('input[type="submit"]')).click();

    driver.wait(until.elementLocated(By.css('#user-nav>ul>li> a[href="#"]')), 3000);
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/ad_home.php`);

    // jump to ad_analysis_compare
    var ad_analysis = '#sidebar>ul>li:nth-child(4)>';
    await driver.findElement(By.css(ad_analysis + 'a[href="#"]')).click();
    await driver.findElement(By.css(ad_analysis + 'ul>li:nth-child(1) a[href="/anli/ad_analysis_compare.php"]')).click();

    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/ad_analysis_compare.php`);
    saveShot(await driver.takeScreenshot(), `${meta.platform}.${meta.target}.ad_analysis_compare`);

    // jump to ad_analysis_trend1
    await driver.findElement(By.css(ad_analysis + 'ul>li:nth-child(2) a[href="/anli/ad_analysis_trend1.php"]')).click();

    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/ad_analysis_trend1.php`);
    saveShot(await driver.takeScreenshot(), `${meta.platform}.${meta.target}.ad_analysis_trend1`);

    // logout
    await driver.findElement(By.css('#user-nav>ul>li:nth-child(2) a[href="/anli/logout.php"]')).click();

    // wait alert shows
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();
  });
});


