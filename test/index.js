import webdriver, { By, until } from 'selenium-webdriver';
import { describe, it } from 'selenium-webdriver/testing';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

function getDriver() {
  return new webdriver.Builder()
    .forBrowser('firefox')
    .build();
}

describe('Hi', () => {
  it('Home', () => {
    const driver = getDriver();

    driver.get('https://krita.org/')
      .then(() => Promise.resolve(driver.getTitle()))
      .then(title => expect(title).to.equal('Krita | Digital Painting. Creative Freedom.'))
      .then(() => driver.quit());
  });
});
