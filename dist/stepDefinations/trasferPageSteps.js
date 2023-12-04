"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const transferPage_1 = require("../pageObjects/transferPage");
(0, cucumber_1.setDefaultTimeout)(60 * 1000);
let page;
// Then('I click on Transfer button on Balances Page', async function(){
//     this.page = page;
//     const transPage = new TransPage();
//     await transPage.transferbutton();
// });
(0, cucumber_1.Then)('I can see text as "Move tokens between your Funding account and Trading account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.trasferheadingText();
});
(0, cucumber_1.Then)('I can see Text as "Transfer to other Polkadex accounts" on Transfer page', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.transferradioText();
});
(0, cucumber_1.Then)('I can see heading as "Transfer" in Bold', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.transferBoldText();
});
(0, cucumber_1.Then)('I click on radio button', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.clickRadioButton();
});
(0, cucumber_1.Then)('I can see radio button with Transfer to other Polkadex accounts on Transfer page', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.viewRadioButton();
});
(0, cucumber_1.Then)('I can see radio button with Transfer to other Polkadex accounts on Transfer page is off', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.viewRadioButtonOff();
});
(0, cucumber_1.Then)('I click on ASTR', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.astrButton();
});
(0, cucumber_1.Then)('I click on Hide Zero balances', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.Hide0BalanceButton();
});
(0, cucumber_1.Then)('I Unclick on Hide Zero balanaces', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.UnHide0BalanceButton();
});
(0, cucumber_1.Then)('I hover on SeachBox', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.hoverInSearchBox();
});
(0, cucumber_1.Then)('I enter in SearchBox {string}', async function (enterInSearchBox) {
    const transPage = new transferPage_1.TransPage();
    await transPage.enterInSearchBox(enterInSearchBox);
});
(0, cucumber_1.Then)('I am able to click on Transfer to other Polkadex accounts radio button', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.clickRadioButton();
});
(0, cucumber_1.Then)('I click down arrow button near the token', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.clickArrowButton();
});
(0, cucumber_1.Then)('I can get the list of tokens on right drawer', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.getTokenList();
});
(0, cucumber_1.Then)('I can select PDEX token from right drawer', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.selectToken();
});
(0, cucumber_1.Then)('I enter amount as "3" in amount field', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.enterAmountText();
});
(0, cucumber_1.Then)('I enter "1" as amount in amount field', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.enterLowAmountText();
});
(0, cucumber_1.Then)('I can see Transfer button is enable to do Transaction', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.enableTransferButton();
});
(0, cucumber_1.Then)('I can see Transfer button is Disable to do Transaction', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.disableTransferButton();
});
(0, cucumber_1.When)('I click on Switch button', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.clickOnSwtichButton();
});
(0, cucumber_1.Then)('Switch colour button is in pink colour', async function () {
    await global.page.waitForTimeout(10000);
    const transPage = new transferPage_1.TransPage();
    await transPage.verifySwitchColour();
});
(0, cucumber_1.Then)('Switch colour button is in Green colour', async function () {
    await global.page.waitForTimeout(10000);
    const transPage = new transferPage_1.TransPage();
    await transPage.sverifySwitchColour();
});
(0, cucumber_1.Then)('I can see text as "From Trading account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.verifyToTradingAccountHeading();
});
(0, cucumber_1.Then)('I can see text as "To funding account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.verifyToFundingAccountHeading();
});
(0, cucumber_1.Then)('I can see text as "From Funding account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.verifyToFundingAccountHeading();
});
(0, cucumber_1.Then)('I can see text as "To Trading account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.verifyToTradingAccountHeading();
});
(0, cucumber_1.Then)('I can see warning message as "The amount you entered exceeds your balance"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.warningMessageText();
});
