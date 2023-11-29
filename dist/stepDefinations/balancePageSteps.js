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
(0, cucumber_1.Then)('I can see the "Open tour" Button on Balances Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.viewOpenTourButton();
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
(0, cucumber_1.Then)('I can see What is Transfer? popup', async function () {
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
(0, cucumber_1.Then)('Transfer popup window is closed', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.transferPopupClosed();
});
(0, cucumber_1.Then)('I see text as "Available balance in your funding and trading account. on balance page"', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.textBalancePage();
});
(0, cucumber_1.Then)('I can see Text as {string} on footer part', async function (textFooter) {
    const balPage = new balancePage_1.BalPage();
    await balPage.textFooter();
    return textFooter;
});
(0, cucumber_1.Then)('I see text as "Overview" on Balances Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.overviewTextBalancePage();
});
(0, cucumber_1.Then)('I see text as "Transfer" on Transfer Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.transferheadingText();
});
(0, cucumber_1.Then)('I see text as "Move tokens between your Funding account and Trading account" on Transfer Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.transferheadingText1();
});
(0, cucumber_1.Then)('I see text as "Connect your Trading Account" on Balances page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.connectTradingAccountText();
});
(0, cucumber_1.When)('I searched text "DOT" in search bar of overview Section', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.searchText();
});
(0, cucumber_1.When)('I searched "$$" in search bar of overview Section', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.searchInvalidText();
});
(0, cucumber_1.Then)('searched item should display No result found under overview Section', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.noSearchedResultFound();
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
(0, cucumber_1.Then)('I click Hide small balances checkbox', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickCheckbox();
});
(0, cucumber_1.Then)('I uncheck Hide small balances checkbox', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.undoCheckboxclick();
});
(0, cucumber_1.Then)('I am able to view Hide_small_balance text with checkbox on Balances Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readTextCheckbox();
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
(0, cucumber_1.Then)('I can see {string} Button on Balances Page', async function (button) {
    const balPage = new balancePage_1.BalPage();
    await balPage.viewBalancePageButton();
    return button;
});
(0, cucumber_1.Then)('I am able to select Dont show again checkbox on What is Deposit? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickDepositCheckbox();
});
(0, cucumber_1.Then)('I click on back button on What is Withdrawal? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.withdrawalBackButton();
});
(0, cucumber_1.Then)('I can see Next Button on What is Withdrawal? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readWithdrawalPopupNextButton();
});
(0, cucumber_1.Then)('I can see Back Button on What is Withdrawal? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readWithdrawalPopupBackButton();
});
(0, cucumber_1.Then)("I can see checkbox with text as Don't show again on What is Withdrawal? popup", async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readWithdrawalPopupCheckbox();
});
(0, cucumber_1.When)('I refresh the page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.reloadPage();
});
(0, cucumber_1.Then)('I can see Balances page without popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.balancesHeadingText();
});
(0, cucumber_1.Then)('I can see Done Button on What is Transfer? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readTransferPopupDoneButton();
});
(0, cucumber_1.Then)('I can see Back Button on What is Transfer? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readTransferPopupBackButton();
});
(0, cucumber_1.Then)("I can see checkbox with text as Don't show again on What is Transfer? popup", async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readTransferPopupCheckbox();
});
(0, cucumber_1.Then)('I am able to select Dont show again checkbox on What is WithDrawal? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickWithDrawalCheckbox();
});
(0, cucumber_1.Then)('I can see Next Button on What is Deposit? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readDepositPopupNextButton();
});
(0, cucumber_1.Then)('I can see Back Button on What is Deposit? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readWithdrawalPopupBackButton();
});
(0, cucumber_1.Then)("I can see checkbox with text as Don't show again on What is Deposit? popup", async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.readDepositPopupCheckbox();
});
(0, cucumber_1.Then)('I am able to select Dont show again checkbox on What is Transfer? popup', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickTransferCheckbox();
});
(0, cucumber_1.Then)('I am able to view Search bar on Balances Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.viewSearchButton();
});
(0, cucumber_1.Then)('I am able to view {string} Header Text on balances Page', async function (readHeaderText) {
    const balPage = new balancePage_1.BalPage();
    await balPage.readBHeaderText();
    return readHeaderText;
});
(0, cucumber_1.Then)('I am able view sort button for {string} header', async function (readABSortButton) {
    const balPage = new balancePage_1.BalPage();
    await balPage.readBSortButton();
    return readABSortButton;
});
(0, cucumber_1.Then)('I can get the list of tokens under {string} Header', async function (tokenHeaderList) {
    const balPage = new balancePage_1.BalPage();
    await balPage.getTokenHeaderList();
    return tokenHeaderList;
});
(0, cucumber_1.Then)('I can get the list of tokens under Funding Account Header', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.getFundingTokenHeaderList();
    //return tokenFAHeaderList;
});
(0, cucumber_1.Then)('I can get the list of tokens under Trading Account Header', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.getTradingTokenHeaderList();
});
(0, cucumber_1.Then)('I can get the list of tokens under In Orders Header', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.getInOrdersTokenHeaderList();
});
(0, cucumber_1.Then)('I can see all accounts with high balance only', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.returnHighBalanceAccountList();
});
(0, cucumber_1.Then)('I can see all the tokens after unchecking checkbox', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.returnAllBalanceAccountList();
});
(0, cucumber_1.Then)('I can see tokens in descending order', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.descendingOrderToken();
});
(0, cucumber_1.Then)('I click on Deposit button on Balances Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickDepositButton();
    await global.page.waitForTimeout(10000);
});
(0, cucumber_1.Then)('page should redirect to {string} page', async function (depositPage) {
    const balPage = new balancePage_1.BalPage();
    await balPage.navigateToTradePage();
    await global.page.waitForTimeout(10000);
    return depositPage;
});
(0, cucumber_1.Then)('I hover on Deposit Button', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.hoverDepositButton();
    await global.page.waitForTimeout(5000);
});
(0, cucumber_1.Then)('I hover on Withdraw Button', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.hoverWithdrawButton();
    await global.page.waitForTimeout(5000);
});
(0, cucumber_1.Then)('External link on Deposit button is displayed', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.hoverExternalLinkDepositButton();
    await global.page.waitForTimeout(5000);
});
(0, cucumber_1.Then)('External link on Withdraw button is displayed', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.hoverExternalLinkWithdrawButton();
    await global.page.waitForTimeout(5000);
});
(0, cucumber_1.Then)('I click on Withdraw button on Balances Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickWithdrawButton();
});
(0, cucumber_1.Then)('I click on Transfer button on Balances Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickTransferButton();
});
(0, cucumber_1.Then)('I click on Contactus button on Balances Page', async function () {
    const balPage = new balancePage_1.BalPage();
    await balPage.clickContactusButton();
});
(0, cucumber_1.Then)('balance page is navigated to {string} page', async function (WithDrawPage) {
    const balPage = new balancePage_1.BalPage();
    await balPage.navigateToWithdrawPage();
    return WithDrawPage;
});
(0, cucumber_1.Then)('balance page for Transfer button is navigated to {string} page', async function (transferPage) {
    const balPage = new balancePage_1.BalPage();
    await balPage.navigateToTransferPage();
    return transferPage;
});
(0, cucumber_1.Then)('Contact-us button is navigated to {string} page', async function (transferPage) {
    const balPage = new balancePage_1.BalPage();
    await balPage.navigateToTransferPage();
    return transferPage;
});
