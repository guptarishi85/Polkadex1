"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const homePage_1 = require("../pageObjects/homePage");
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
let page;
Given('I am on the home screen', { timeout: 2 * 5000 }, async function () {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    this.page = page;
    const homePage = new homePage_1.HomePage();
    await homePage.navigateToHomePage();
});
When('I click the Orderbook logo', async function () {
    this.page = page;
    const homePage = new homePage_1.HomePage();
    await homePage.clickLogo();
});
Then('I see in title {string}', async function (title) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const homePage = new homePage_1.HomePage();
    await homePage.verifyTitle();
    return title;
});
When('I click on About link', async function () {
    //  this.page = page;
    await global.page.waitForTimeout(20000);
    const homePage = new homePage_1.HomePage();
    await homePage.clickLink();
});
Then('I populate the list of content', async function () {
    //  this.page = page;
    await global.page.waitForTimeout(10000);
    const homePage = new homePage_1.HomePage();
    await homePage.getCount();
});
function expect(homePage) {
    throw new Error('Function not implemented.');
}
