const { Given, When , Then } = require('@cucumber/cucumber');
import { HomePage } from '../pageObjects/exchangePage';
const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60*1000);

let page;
Given('I am on the home screen', async function() {////{timeout: 2 * 5000}
  this.page = page;
  const homePage = new HomePage();
  await homePage.navigateToHomePage();
});

Given('I am on the Exchange Page screen', async function() {////{timeout: 2 * 5000}
  this.page = page;
  const homePage = new HomePage();
  await homePage.navigateToExchangePage();
});


When('I click the Orderbook logo', async function(){
this.page = page;
const homePage = new HomePage();
await homePage.clickLogo();
});

Then('I see in title {string}', async function(title: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const homePage = new HomePage();
  await homePage.verifyTitle();
  return title;
  });

  When('I click on About link', async function(){
  //  this.page = page;
  await global.page.waitForTimeout(20000);
  const homePage = new HomePage();
  await homePage.clickLink();
  });

  Then('I populate the list of content', async function(){
    //  this.page = page;
    await global.page.waitForTimeout(10000);
    const homePage = new HomePage();
  await homePage.getCount();
    });

    
When('I click on Start Trading button', async function(){
  await global.page.waitForTimeout(40000);
  const homePage = new HomePage();
  await homePage.clickStButton();
  });

Then('I can see DOT\\/USTD Text on screen', async function(){
  await global.page.waitForTimeout(10000);
  const homePage = new HomePage();
  await homePage.verifyDotUSDText();
  });

  Then('I am able to see {string} as selected trading pair', async function(tradingPairText: string) {
    const homePage = new HomePage();
    await homePage.verifyTradingPairText();
    tradingPairText;
    });

Then('I can see Buy button on screen', async function () {
  await global.page.waitForTimeout(10000);
  const homePage = new HomePage();
  await homePage.verifyBuyButton();
  });

When('I click on Buy link', async function () {
    await global.page.waitForTimeout(10000);
    const homePage = new HomePage();
    await homePage.clickBuyButton();
    });  

Then('I can select {int}% button', async function (value : number) {
  await global.page.waitForTimeout(10000);
  const homePage = new HomePage();
  await homePage.clickPercentButton(value);
  });

function expect(homePage: HomePage) {
  throw new Error('Function not implemented.');
}

