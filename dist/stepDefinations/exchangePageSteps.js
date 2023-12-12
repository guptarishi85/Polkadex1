"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const exchangePage_1 = require("../pageObjects/exchangePage");
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
let page;
Given('I am on the home screen', async function () {
    this.page = page;
    const homePage = new exchangePage_1.HomePage();
    await homePage.navigateToHomePage();
});
Given('I am on the Exchange Page screen', async function () {
    this.page = page;
    const homePage = new exchangePage_1.HomePage();
    await homePage.navigateToExchangePage();
});
Then('I can see graph is diplayed on the screen', async function () {
    await global.page.waitForTimeout(10000);
    const homePage = new exchangePage_1.HomePage();
    await homePage.viewGraph();
});
When('I click the Orderbook logo', async function () {
    this.page = page;
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickLogo();
});
Then('I see in title {string}', async function (title) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const homePage = new exchangePage_1.HomePage();
    await homePage.verifyTitle();
    return title;
});
When('I click on About link', async function () {
    //  this.page = page;
    await global.page.waitForTimeout(20000);
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickLink();
});
Then('I populate the list of content', async function () {
    //  this.page = page;
    await global.page.waitForTimeout(10000);
    const homePage = new exchangePage_1.HomePage();
    await homePage.getCount();
});
When('I click on Start Trading button', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickStButton();
});
When('I select the {string} as trading pair', async function (button) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.selectTradingPair();
    return button;
});
Then('I selected the {string} as trading pair', async function (button) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.selectDOTUSTDTradingPair();
    return button;
});
When('{string} selected as trading pair', async function (button) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.selectISBTTradingPair();
    return button;
});
Then('I can see DOT\\/USTD Text on screen', async function () {
    await global.page.waitForTimeout(10000);
    const homePage = new exchangePage_1.HomePage();
    await homePage.verifyDotUSDText();
});
Then('I am able to see {string} as selected trading pair', async function (tradingPairText) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.verifyDOTUSDTTradingPairText();
    tradingPairText;
});
Then('I am able to see the {string} as selected trading pair', async function (tradingPairTextASTR) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.verifyASTRUSDTTradingPairText();
    tradingPairTextASTR;
});
Then('I can see {string} button on screen', async function (button) {
    await global.page.waitForTimeout(10000);
    const homePage = new exchangePage_1.HomePage();
    await homePage.verifyBuyButton();
    return button;
});
When('I click on {string} Button', async function (buySellButton) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickBuySellButton();
    return buySellButton;
});
Then('I can select {int}% button', async function (value) {
    await global.page.waitForTimeout(10000);
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickPercentButton(value);
});
Then('I can see available trading pair as:', async function (tradingPairList) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.getTradingPairList();
    return tradingPairList;
});
When('I click on arrow button', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickArrowButton();
});
When('I click on Icon button', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickIconButton();
});
Then('I click on {string} button', async function (button) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickUSTDAllButton();
    return button;
});
Then('I can see available balance for selected trading pair', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.viewAvailableBalance();
});
Then('I can see price of USDT in volume24h field', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.viewVolume24hAmount();
});
Then('I can see price of USDT in 24h change field', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.view24hChangeAmount();
});
Then('I can see price of USDT in 24h High field', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.view24hHighAmount();
});
Then('I can see price of USDT in 24h Low field', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.view24hLowAmount();
});
When('I hover on search button', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.hoverSearchbutton();
});
When('I entered "$$" as invalid coin in search bar', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.enterTTextSearch();
});
When('I searched "ASTR" as valid coin in search bar', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.enterASTRTextSearch();
});
Then('searched item should display under exchange search Section', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.textAftersearchResult();
});
When('I entered {string} in price field under Buy\\/Sell Section', async function (priceText) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.enterPriceAmount();
    return priceText;
});
When('I entered {string} in amount field under Buy\\/Sell Section', async function (amount) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.enterAmountBuy();
    return amount;
});
When('I entered {string} in the amount field under Buy\\/Sell Section', async function (amount) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.entersAmountBuy();
    return amount;
});
Then('searched item should display No result', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.searchItemView();
});
Then('I can see warning message as {string}', async function (warningMessage) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.warningMessage();
    return warningMessage;
});
Then('I can see {string} button got enabled', async function (warningMessage) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.buttonEnabled();
    return warningMessage;
});
When('I click on Exchange link on Polkadex page', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickExchangeLink();
});
When('I click on viewBox under Orderbook button', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickViewBox();
});
Then('I can see {string} under Price USDT colomn', async function (buyValues) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.viewOrderbookValues();
    return buyValues;
});
Then('I can see {string} in {string} color', async function (value, color) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.viewOrderbookBackgroundColor();
    return value;
    return color;
});
Then('I can see limit order button on exchange page', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.viewLimitOrderMenu();
});
Then('I click on limit order button', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.clickLimitOrderMenu();
});
Then('I can see list under limit order menu as:', async function (list) {
    const homePage = new exchangePage_1.HomePage();
    await homePage.getListLimitOrderMenu();
    return list;
});
Then('I clear the search bar', async function () {
    const homePage = new exchangePage_1.HomePage();
    await homePage.clearSearchBar();
});
function expect(homePage) {
    throw new Error('Function not implemented.');
}
