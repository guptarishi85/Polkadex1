"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const transferPage_1 = require("../pageObjects/transferPage");
(0, cucumber_1.setDefaultTimeout)(60 * 1000);
let page;
(0, cucumber_1.Then)('I click on Transfer button on Balances Page', async function () {
    this.page = page;
    const transPage = new transferPage_1.TransPage();
    await transPage.transferbutton();
});
(0, cucumber_1.Then)('I can see text as "Move tokens between your Funding account and Trading account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.trasferheadingText();
});
(0, cucumber_1.Then)('I click on toggle button', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.toggleButton();
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
(0, cucumber_1.When)('I click on Switch button', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.clickOnSwtichButton();
});
(0, cucumber_1.Then)('Swich colour button is in pink colour', async function () {
    await global.page.waitForTimeout(10000);
    const transPage = new transferPage_1.TransPage();
    await transPage.verifySwitchColour();
});
(0, cucumber_1.Then)('Switch colour button is in Green colour', async function () {
    await global.page.waitForTimeout(10000);
    const transPage = new transferPage_1.TransPage();
    await transPage.sverifySwitchColour();
});
(0, cucumber_1.Then)('I can see text as S "From Trading account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.SverifyToTradingAccountHeading();
});
(0, cucumber_1.Then)('I can see text as S "To funding account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.SverifyToFundingAccountHeading();
});
(0, cucumber_1.Then)('I can see text as "From Funding account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.verifyToFundingAccountHeading();
});
(0, cucumber_1.Then)('I can see text as "To Trading account"', async function () {
    const transPage = new transferPage_1.TransPage();
    await transPage.verifyToTradingAccountHeading();
});
