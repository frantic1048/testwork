import { it, describe } from 'selenium-webdriver/testing';
import { expect } from 'chai';

export default (driver, baseURL) =>
describe('Simple GET', () => {
  it('base', async () => {
    await driver.get(`${baseURL}/`);
    const title = await driver.getTitle();
    expect(title).to.equal('人力资源管理系统');
  });
});
