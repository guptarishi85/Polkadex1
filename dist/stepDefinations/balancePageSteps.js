"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const balancePage_1 = require("../pageObjects/balancePage");
const test_1 = require("@playwright/test");
(0, cucumber_1.setDefaultTimeout)(60 * 1000);
let Page;
(0, cucumber_1.When)('I click on login link', async function () {
    this.balPage = Page;
    const balPage = new balancePage_1.BalPage();
    await balPage.clickLoginLink();
});
(0, cucumber_1.Then)('I enter the email as {string}', async function (enterEmail) {
    const balPage = new balancePage_1.BalPage();
    await balPage.enterUserEmail(enterEmail);
});
(0, cucumber_1.Given)('I enter the password as {string}', async function (enterUserPassword) {
    const balPage = new balancePage_1.BalPage();
    await balPage.enterUserPassword(enterUserPassword);
});
(0, cucumber_1.When)('I click on the login button', async function () {
    await global.page.getByRole('button', { name: 'Log In' }).click(); //locator("button[color='primary']").click();
    await global.page.waitForLoadState();
    //global.logger.info("Waiting for 2 seconds")
    await global.page.waitForTimeout(2000);
});
(0, cucumber_1.Then)('Login should be success', async function () {
    const sell = global.page.locator('div.sc-714be224-4.dBqqUP');
    await (0, test_1.expect)(sell).toBeVisible();
    await global.page.waitForTimeout(10000);
});
(0, cucumber_1.Then)('I click cross button on popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickCrosspopupButton();
});
(0, cucumber_1.Then)('I can see Create Account button', async function () {
    await global.page.waitForTimeout(10000);
    const balPage = new balancePage_1.BalPage();
    await balPage.createAccountButton();
});
(0, cucumber_1.Then)('I can see Select Account button', async function () {
    await global.page.waitForTimeout(10000);
    const balPage = new balancePage_1.BalPage();
    await balPage.selectAccountButton();
});
(0, cucumber_1.Then)('I clicked on Wallets link on Polkadex page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickWalletsLink();
    await global.page.waitForTimeout(10000);
});
(0, cucumber_1.Then)('I can see heading as Wallets on Wallets page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.walletHeadingText();
});
(0, cucumber_1.When)('I clicked on Import Account button', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickImportAccountButton();
});
(0, cucumber_1.Then)('I can see add trading account window', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.tradingAccountPopup();
});
(0, cucumber_1.Then)('I click on the Import existing trading account window', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.importExistingAccount();
});
(0, cucumber_1.Then)('I can see Json file Radio button', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.jsonRadioButton();
});
(0, cucumber_1.Then)('I click on Json file Radio button', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickJsonRadioButton();
});
(0, cucumber_1.Then)('I can see upload file button', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.uploadButton();
});
(0, cucumber_1.Then)('I can see Import Button got enabled under add trading account window', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.importAccountButtonEnabled();
});
(0, cucumber_1.When)('I clicked on upload file button', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.uploadFileButton();
});
(0, cucumber_1.Then)('I click on the Import Button under add trading account window', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickImportButtonTD();
});
(0, cucumber_1.Then)('Trading Account imported successfully', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.tdAccountImportSuccessfully();
});
(0, cucumber_1.Then)('I click on back button under add trading account window', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickBackButton();
});
(0, cucumber_1.When)('I click on Balances link on Polkadex page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickBalanceLink();
});
(0, cucumber_1.Then)('I can see What is Deposit? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.depositPopup();
});
(0, cucumber_1.Then)('I can see What is Withdrawal? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.withdrawalPopup();
});
(0, cucumber_1.Then)('I can see What is transfer? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.transferPopup();
});
(0, cucumber_1.Then)('I can see What is a Funding Account? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.fundingAcPopup();
});
(0, cucumber_1.Then)('I can see What is a Trading Account? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.tradingAcPopup();
});
(0, cucumber_1.Then)('I click on Next button on What is Deposit? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickDepositNextButtonPopup();
});
(0, cucumber_1.Then)('I click on Next button on What is Funding Account? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickFundingAcNextButtonPopup();
});
(0, cucumber_1.Then)('I click on Done button on What is Trading Account? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickTradingAcNextButtonPopup();
});
(0, cucumber_1.Then)('I click on Next button on What is Withdrawal? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickWithdrawalNextButtonPopup();
});
(0, cucumber_1.Then)('I click on Done button on What is transfer? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickTransferDoneButtonPopup();
});
(0, cucumber_1.Then)('I see text as "Available balance in your funding and trading account. on balance page"', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.textBalancePage();
});
(0, cucumber_1.When)('I searched text {string} in search bar of overview Section', async function (string) {
    const balPage = new balancePage_1.BalPage();
    await balPage.searchText();
});
(0, cucumber_1.Then)('searched item should display under overview Section', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.textAftersearch();
});
(0, cucumber_1.Then)('I click on the Name Cloumn header', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickNamesColoumnHeaders();
});
(0, cucumber_1.Then)('I click on the Funding Account Cloumn header', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickFAColoumnHeaders();
});
(0, cucumber_1.Then)('I click on the Trading Account Cloumn header', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickTAColoumnHeaders();
});
(0, cucumber_1.Then)('I click on the In Orders Cloumn header', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickOrdersColoumnHeaders();
});
(0, cucumber_1.Then)('I click on the Actions Cloumn header', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickActionsColoumnHeaders();
});
(0, cucumber_1.Then)('I am able to select Hide small balances checkbox', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickCheckbox();
});
(0, cucumber_1.Then)('I can get the list of cloumn header names under Overview Section', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.getHeaderList();
});
(0, cucumber_1.Then)('I can see {string} popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.popup();
});
(0, cucumber_1.Then)('I click on {string} button on Deposit popup} popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.popup();
});