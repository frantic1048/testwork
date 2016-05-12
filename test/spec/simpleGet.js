import { it, describe } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

export default (driver) =>
describe('Simple GET', () => {
  it('Krita', (done) => {
    driver.get('https://krita.org/');
    expect(driver.getTitle()).to.eventually.equal('Krita | Digital Painting. Creative Freedom.')
      .and.notify(done);
  });

  it('Github', (done) => {
    driver.get('https://github.com/');
    expect(driver.getTitle()).to.eventually.equal('How people build software · GitHub')
      .and.notify(done);
  });
});
