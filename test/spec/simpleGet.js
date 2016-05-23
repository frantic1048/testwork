import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

export default (driver, baseURL) =>
describe('Simple GET', () => {
  it('base', (done) => {
    driver.get(baseURL);
    expect(driver.getTitle()).to.eventually.equal('人力资源管理系统')
      .and.notify(done);
  });
});
