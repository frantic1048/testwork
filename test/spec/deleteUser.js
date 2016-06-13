import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { By, until } from 'selenium-webdriver';

chai.use(chaiAsPromised);

export default ( driver, baseURL ) =>
describe('Delete - User', () => {
	//字模块
	it ('Delete - User', (done) => {

		//登录
		// open index
	    driver.get(`${baseURL}/`);
	    expect(driver.getTitle()).to.eventually.equal('人力资源管理系统');
	    // input username
	    driver.findElement(By.css('input[name="name"]')).sendKeys('admin');
	    // input password
	    driver.findElement(By.css('input[name="password"]')).sendKeys('admin');
	    // press login button
	    driver.findElement(By.css('input[type="submit"]')).click();
	    // check if we are in logged page
	    expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
	    expect(driver.getCurrentUrl())
	      .to.eventually.equal(`${baseURL}/ad_home.php`)
	      .and.notify(done);
//此处进入主界面

//进入通知界面
	    //点击用户管理
	    driver.findElement(By.css('#content > div.container-fluid > div > ul > li:nth-child(8) > a')).click();
	    //检查位置（ad_usermanager.php）
	    expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
	    expect(driver.getCurrentUrl())
	      .to.eventually.equal(`${baseURL}/ad_usermanager.php`)
	      .and.notify(done);
	    //点击删除
	    driver.findElement(By.css('#content > div.container-fluid > div > div > div > div.widget-content > table > tbody > tr:nth-child(1) > td:nth-child(5) > button')).click();
	    //处理浏览器弹框
    	driver.wait(until.alertIsPresent());
	    driver.switchTo().alert().accept();
	    driver.wait(until.alertIsPresent());
	    driver.switchTo().alert().accept();
	    driver.switchTo().defaultContent();
	    //检查位置（ad_usermanager.php）
	    expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
	    expect(driver.getCurrentUrl())
	      .to.eventually.equal(`${baseURL}/ad_usermanager.php`)
	      .and.notify(done);
	    



	    //登出
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
