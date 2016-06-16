import { it, describe } from 'selenium-webdriver/testing';
import { expect       } from 'chai';
import { By, until    } from 'selenium-webdriver';

export default (driver, baseURL, meta) =>
describe('activity', () => {
  it('apply', async () => {
  	await driver.get(`${baseURL}/`);
    await driver.wait(until.elementLocated(By.css('input[name="name"]')), 8000);
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/login_page.php`);

    // login
    await driver.findElement(By.css('input[name="name"]')).sendKeys('test');
    await driver.findElement(By.css('input[name="password"]')).sendKeys('test');
    await driver.findElement(By.css('input[type="submit"]')).click();

    await driver.wait(until.elementLocated(By.css('#user-nav>ul>li> a[href="#"]')), 3000);
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/user_home.php`);

    // jump to activity_apply
    var activity_apply = '#sidebar>ul>li:nth-child(6)>';
    await driver.findElement(By.css(activity_apply + 'a[href="/anli/activity_apply.php"]')).click();

    // new activities
    var button_apply = '#content a[href="/anli/activity_add.php"]';
    await driver.wait(until.elementLocated(By.css(button_apply)), 3000).click();
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/activity_add.php`);

    // valid input
    await driver.findElement(By.css('input[name="activity_name"]')).sendKeys('a normal title');
    await driver.findElement(By.css('input[name="activity_fund"]')).sendKeys('0');
    await driver.findElement(By.css('input[name="activity_intro"]')).sendKeys('a normal description');
    await driver.findElement(By.css('#content button[type="submit"]')).click();
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();
    await driver.wait(until.elementLocated(By.css('#user-nav>ul>li> a[href="#"]')), 5000);
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/activity_apply.php`);
    
    //invalid input
    await driver.wait(until.elementLocated(By.css(button_apply)), 3000).click();
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/activity_add.php`);
    await driver.findElement(By.css('input[name="activity_name"]')).sendKeys('overflow');
    await driver.findElement(By.css('input[name="activity_fund"]')).sendKeys('-9999999999999999999');
    await driver.findElement(By.css('input[name="activity_intro"]')).sendKeys('a normal description');
    await driver.findElement(By.css('#content button[type="submit"]')).click();
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();
    await driver.wait(until.elementLocated(By.css('#user-nav>ul>li> a[href="#"]')), 5000);
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/activity_apply.php`);
    
    await driver.wait(until.elementLocated(By.css(button_apply)), 3000).click();
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/activity_add.php`);
    await driver.findElement(By.css('input[name="activity_name"]')).sendKeys('</html><!--');
    await driver.findElement(By.css('input[name="activity_fund"]')).sendKeys('0');
    await driver.findElement(By.css('input[name="activity_intro"]')).sendKeys('<!--');
    await driver.findElement(By.css('#content button[type="submit"]')).click();
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();
    await driver.wait(until.elementLocated(By.css('#user-nav>ul>li> a[href="#"]')), 5000);
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/activity_apply.php`);

    // logout
    await driver.get(`${baseURL}/user_home.php`);
    await driver.findElement(By.css('#user-nav>ul>li:nth-child(2) a[href="/anli/logout.php"]')).click();
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();
  });

  it('review', async () => {
  	await driver.get(`${baseURL}/`);
    await driver.wait(until.elementLocated(By.css('input[name="name"]')), 8000);
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/login_page.php`);

    // login
    await driver.findElement(By.css('input[name="name"]')).sendKeys('admin');
    await driver.findElement(By.css('input[name="password"]')).sendKeys('admin');
    await driver.findElement(By.css('input[type="submit"]')).click();

    await driver.wait(until.elementLocated(By.css('#user-nav>ul>li> a[href="#"]')), 3000);
    expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/ad_home.php`);
    
    // jump to ad_approve
    var ad_approve = '#sidebar>ul>li:nth-child(5)>';
    await driver.findElement(By.css(ad_approve + 'a[href="/anli/ad_approve.php"]')).click();

    // push all button
    var button_pass = 'button.btn.btn-success.btn-mini';
    await driver.wait(until.elementLocated(By.css(button_pass)), 5000);
    const elements_src = await driver.findElements(By.css(button_pass));
    expect(elements_src.length).to.equal(1);
    elements_src.forEach(async element => {
      await element.click();
      await driver.wait(until.alertIsPresent());
      await driver.switchTo().alert().accept();
      await driver.switchTo().defaultContent();
      await driver.wait(until.elementLocated(By.css('#user-nav>ul>li> a[href="#"]')), 3000);
      expect(await driver.getCurrentUrl()).to.equal(`${baseURL}/ad_approve.php`);
    });

    // check if all done
    const elements_dst = await driver.findElements(button_pass);
    expect(elements_dst.length).to.equal(0);

    // logout
    await driver.get(`${baseURL}/ad_home.php`);
    await driver.findElement(By.css('#user-nav>ul>li:nth-child(2) a[href="/anli/logout.php"]')).click();
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await driver.switchTo().defaultContent();
  });

});


