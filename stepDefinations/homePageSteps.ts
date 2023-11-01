const { Given, When , Then } = require('@cucumber/cucumber');
import { HomePage } from '../pageObjects/homePage';
const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60*1000);

let page;
Given('I am on the home screen',{timeout: 2 * 5000}, async function() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  this.page = page;
  const homePage = new HomePage();
  await homePage.navigateToHomePage();
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
  
function expect(homePage: HomePage) {
  throw new Error('Function not implemented.');
}

