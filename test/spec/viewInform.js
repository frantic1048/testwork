import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { By, until } from 'selenium-webdriver';

chai.use(chaiAsPromised);

export default ( driver, baseURL ) =>
describe('View - Inform', () => {
	//字模块
	it ('View - Inform', (done) => {

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
//进入主界面

    
	    //点击通知
	    driver.findElement(By.css('#content > div.container-fluid > div > ul > li.bg_lo.span3 > a')).click();
	    //检查位置（ad_notice.php）
	    expect(driver.getTitle()).to.eventually.equal('企业信息管理系统');
	    expect(driver.getCurrentUrl())
	      .to.eventually.equal(`${baseURL}/ad_notice.php`)
	      .and.notify(done);
	    //获取通知成功


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
