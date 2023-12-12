import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { BalPage } from  "../pageObjects/balancePage";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let Page;

When('I click on login link', async function(){
    this.balPage = Page;
    const balPage = new BalPage();
    await balPage.clickLoginLink();
    });

Then('I enter the email as {string}', async function (enterEmail) {
    const balPage = new BalPage();
    await balPage.enterUserEmail(enterEmail);
    });

Given('I enter the password as {string}', async function (enterUserPassword) {
    const balPage = new BalPage();
    await balPage.enterUserPassword(enterUserPassword);
});

When('I click on the login button', async function () {
    await global.page.getByRole('button',{name:'Log In'}).click();     //locator("button[color='primary']").click();
    await global.page.waitForLoadState();
    //global.logger.info("Waiting for 2 seconds")
    await global.page.waitForTimeout(5000);
  });

  Then('Login should be success', async function () {
    const sell = global.page.locator('div.sc-714be224-4.dBqqUP');
    await expect(sell).toBeVisible();
    await global.page.waitForTimeout(10000);
});

Then('I click cross button on popup', async function() {
    const balPage = new BalPage();
    await balPage.clickCrosspopupButton();    
});

Then('I can see Create Account button', async function () {
    await global.page.waitForTimeout(10000);
    const balPage = new BalPage();
    await balPage.createAccountButton();
});

Then('I clicked on Wallets link on Polkadex page',async function () {
    const balPage = new BalPage();
    await balPage.clickWalletsLink();      
    await global.page.waitForTimeout(10000);
});

Then('I can see heading as Wallets on Wallets page', async function () {
    const balPage = new BalPage();
    await balPage.walletHeadingText();
});

When('I clicked on Import Account button', async function () {
const balPage = new BalPage();
 await balPage.clickImportAccountButton();
});

Then('I can see add trading account window', async function () {
const balPage = new BalPage();
await balPage.tradingAccountPopup();
});

Then('I click on the Import existing trading account window', async function () {
const balPage = new BalPage();
await balPage.importExistingAccount();
});

Then('I can see Json file Radio button', async function () {
const balPage = new BalPage();
await balPage.jsonRadioButton();
});

Then('I click on Json file Radio button', async function () {
const balPage = new BalPage();
await balPage.clickJsonRadioButton();
});

Then('I can see upload file button', async function () {
const balPage = new BalPage();
await balPage.uploadButton();
});

Then('I can see Import Button got enabled under add trading account window', async function () {
    const balPage = new BalPage();
    await balPage.importAccountButtonEnabled();
});

When('I clicked on upload file button', async function () {
    const balPage = new BalPage();
     await balPage.uploadFileButton();
    });

Then('I click on the Import Button under add trading account window', async function () {
    const balPage = new BalPage();
    await balPage.clickImportButtonTD();
});

Then('Trading Account imported successfully', async function () {
    const balPage = new BalPage();
    await balPage.tdAccountImportSuccessfully();
});

Then('I click on back button under add trading account window', async function () {
    const balPage = new BalPage();
    await balPage.clickBackButton();
});

Then('I can see the "Open tour" Button on Balances Page', async function () {
    const balPage = new BalPage();
    await balPage.viewOpenTourButton();
});
When('I click on Balances link on Polkadex page',async function () {
    const balPage = new BalPage();
    await balPage.clickBalanceLink();    
});

Then('I can see What is Deposit? popup', async function () {
    const balPage = new BalPage();
    await balPage.depositPopup();
});

Then('I can see What is Withdrawal? popup', async function () {
    const balPage = new BalPage();
    await balPage.withdrawalPopup();
});

Then('I can see What is Transfer? popup', async function () {
    const balPage = new BalPage();
    await balPage.transferPopup();
});

Then('I can see What is a Funding Account? popup', async function () {
    const balPage = new BalPage();
    await balPage.fundingAcPopup();
});

Then('I can see What is a Trading Account? popup', async function () {
    const balPage = new BalPage();
    await balPage.tradingAcPopup();
});

Then('I click on Next button on What is Deposit? popup',async function () {
    const balPage = new BalPage();
    await balPage.clickDepositNextButtonPopup();    
});

Then('I click on Next button on What is Funding Account? popup',async function () {
    const balPage = new BalPage();
    await balPage.clickFundingAcNextButtonPopup();    
});

Then('I click on Done button on What is Trading Account? popup',async function () {
    const balPage = new BalPage();
    await balPage.clickTradingAcNextButtonPopup();    
});

Then('I click on Next button on What is Withdrawal? popup',async function () {
    const balPage = new BalPage();
    await balPage.clickWithdrawalNextButtonPopup();    
});

Then('I click on Done button on What is transfer? popup',async function () {
    const balPage = new BalPage();
    await balPage.clickTransferDoneButtonPopup();    
});

Then('Transfer popup window is closed',async function () {
    const balPage = new BalPage();
    await balPage.transferPopupClosed();    
});

Then('I see text as "Available balance in your funding and trading account. on balance page"', async function () {
    const balPage = new BalPage();
    await balPage.textBalancePage();
});

Then('I can see Text as {string} on footer part', async function (textFooter: string) {
    const balPage = new BalPage();
    await balPage.textFooter();
    return textFooter;
});

Then('I see text as "Overview" on Balances Page', async function () {
    const balPage = new BalPage();
    await balPage.overviewTextBalancePage();
});

Then('I see text as "Transfer" on Transfer Page', async function () {
    const balPage = new BalPage();
    await balPage.transferheadingText();
});

Then('I see text as "Move tokens between your Funding account and Trading account" on Transfer Page', async function () {
    const balPage = new BalPage();
    await balPage.transferheadingText1();
});

Then('I see text as "Connect your Trading Account" on Balances page', async function () {
    const balPage = new BalPage();
    await balPage.connectTradingAccountText();
});

When('I searched text "DOT" in search bar of overview Section', async function () {
    const balPage = new BalPage();
    await balPage.searchText(); 
});

When('I searched "$$" in search bar of overview Section', async function () {
    const balPage = new BalPage();
    await balPage.searchInvalidText(); 
});

Then('searched item should display No result found under overview Section',async function(){
    const balPage = new BalPage();
    await balPage.noSearchedResultFound(); 
});

Then('searched item should display under overview Section', async function () {
    const balPage = new BalPage();
    await balPage.textAftersearch(); 
});

Then('I click on the Name Cloumn header', async function () {
    const balPage = new BalPage();
    await balPage.clickNamesColoumnHeaders(); 
});

Then('I click on the Funding Account Cloumn header', async function () {
    const balPage = new BalPage();
    await balPage.clickFAColoumnHeaders(); 
});

Then('I click on the Trading Account Cloumn header', async function () {
    const balPage = new BalPage();
    await balPage.clickTAColoumnHeaders(); 
});

Then('I click on the In Orders Cloumn header', async function () {
    const balPage = new BalPage();
    await balPage.clickOrdersColoumnHeaders(); 
});

Then('I click on the Actions Cloumn header', async function () {
    const balPage = new BalPage();
    await balPage.clickActionsColoumnHeaders(); 
});

Then('I click Hide small balances checkbox', async function () {
    const balPage = new BalPage();
    await balPage.clickCheckbox(); 
});

Then('I uncheck Hide small balances checkbox', async function () {
    const balPage = new BalPage();
    await balPage.undoCheckboxclick(); 
});

Then('I am able to view Hide_small_balance text with checkbox on Balances Page', async function () {
    const balPage = new BalPage();
    await balPage.readTextCheckbox(); 
});

Then('I can get the list of cloumn header names under Overview Section', async function () {
    const balPage = new BalPage();
    await balPage.getHeaderList(); 
});
    
Then('I can see {string} popup', async function () {
    const balPage = new BalPage();
     await balPage.popup();
    });

Then('I click on {string} button on Deposit popup} popup', async function () {
const balPage = new BalPage();
await balPage.popup();
});

Then('I can see {string} Button on Balances Page', async function (button:any) {
    const balPage = new BalPage();
    await balPage.viewBalancePageButton();
    return button;
    });

Then('I am able to select Dont show again checkbox on What is Deposit? popup', async function () {
    const balPage = new BalPage();
    await balPage.clickDepositCheckbox(); 
});

Then('I click on back button on What is Withdrawal? popup', async function () {
    const balPage = new BalPage();
    await balPage.withdrawalBackButton(); 
});

Then('I can see Next Button on What is Withdrawal? popup', async function () {
    const balPage = new BalPage();
    await balPage.readWithdrawalPopupNextButton();
});

Then('I can see Back Button on What is Withdrawal? popup', async function () {
    const balPage = new BalPage();
    await balPage.readWithdrawalPopupBackButton();
});

Then("I can see checkbox with text as Don't show again on What is Withdrawal? popup", async function () {
    const balPage = new BalPage();
    await balPage.readWithdrawalPopupCheckbox();
});

When('I refresh the page',async function() {
    const balPage = new BalPage();
    await balPage.reloadPage();
});

Then('I can see Balances page without popup', async function () {
    const balPage = new BalPage();
    await balPage.balancesHeadingText();
});

Then('I can see Done Button on What is Transfer? popup', async function () {
    const balPage = new BalPage();
    await balPage.readTransferPopupDoneButton();
});

Then('I can see Back Button on What is Transfer? popup', async function () {
    const balPage = new BalPage();
    await balPage.readTransferPopupBackButton();
});

Then("I can see checkbox with text as Don't show again on What is Transfer? popup", async function () {
    const balPage = new BalPage();
    await balPage.readTransferPopupCheckbox();
});

Then('I am able to select Dont show again checkbox on What is WithDrawal? popup', async function () {
    const balPage = new BalPage();
    await balPage.clickWithDrawalCheckbox(); 
});

Then('I can see Next Button on What is Deposit? popup', async function () {
    const balPage = new BalPage();
    await balPage.readDepositPopupNextButton();
});

Then('I can see Back Button on What is Deposit? popup', async function () {
    const balPage = new BalPage();
    await balPage.readWithdrawalPopupBackButton();
});

Then("I can see checkbox with text as Don't show again on What is Deposit? popup", async function () {
    const balPage = new BalPage();
    await balPage.readDepositPopupCheckbox();
});

Then('I am able to select Dont show again checkbox on What is Transfer? popup', async function () {
    const balPage = new BalPage();
    await balPage.clickTransferCheckbox(); 
});

Then('I am able to view Search bar on Balances Page', async function () {
    const balPage = new BalPage();
    await balPage.viewSearchButton();
    });

Then('I am able to view {string} Header Text on balances Page', async function (readHeaderText: string) {
    const balPage = new BalPage();
    await balPage.readBHeaderText();
    return readHeaderText;
    });

Then('I am able view sort button for {string} header', async function (readABSortButton: any) {
    const balPage = new BalPage();
    await balPage.readBSortButton();
    return readABSortButton;
    });

Then('I can get the list of tokens under {string} Header', async function (tokenHeaderList: string) {
    const balPage = new BalPage();
    await balPage.getTokenHeaderList();
    return tokenHeaderList;
    });

Then('I can get the list of tokens under Funding Account Header', async function () {
    const balPage = new BalPage();
    await balPage.getFundingTokenHeaderList();
    //return tokenFAHeaderList;
    });

Then('I can get the list of tokens under Trading Account Header', async function () {
    const balPage = new BalPage();
    await balPage.getTradingTokenHeaderList();
    });

Then('I can get the list of tokens under In Orders Header', async function () {
    const balPage = new BalPage();
    await balPage.getInOrdersTokenHeaderList();
    });

Then('I can see all accounts with high balance only', async function () {
    const balPage = new BalPage();
    await balPage.returnHighBalanceAccountList();
    });
    
Then('I can see all the tokens after unchecking checkbox', async function () {
    const balPage = new BalPage();
    await balPage.returnAllBalanceAccountList();
    });

Then('I can see tokens in descending order', async function () {
    const balPage = new BalPage();
    await balPage.descendingOrderToken();
    });

Then('I click on Deposit button on Balances Page', async function() {
    const balPage = new BalPage();
    await balPage.clickDepositButton();   
    await global.page.waitForTimeout(10000); 
});

Then('page should redirect to {string} page', async function(depositPage:string) {
    const balPage = new BalPage();
    await balPage.navigateToTradePage();   
    await global.page.waitForTimeout(10000);
    return depositPage
});

Then('I hover on Deposit Button', async function() {
    const balPage = new BalPage();
    await balPage.hoverDepositButton();   
    await global.page.waitForTimeout(5000); 
});

Then('I hover on Withdraw Button', async function() {
    const balPage = new BalPage();
    await balPage.hoverWithdrawButton();   
    await global.page.waitForTimeout(5000); 
});

Then('External link on Deposit button is displayed', async function() {
    const balPage = new BalPage();
    await balPage.hoverExternalLinkDepositButton();   
    await global.page.waitForTimeout(5000); 
});

Then('External link on Withdraw button is displayed', async function() {
    const balPage = new BalPage();
    await balPage.hoverExternalLinkWithdrawButton();   
    await global.page.waitForTimeout(5000); 
});

Then('I click on Withdraw button on Balances Page', async function() {
    const balPage = new BalPage();
    await balPage.clickWithdrawButton();    
});

Then('I click on Transfer button on Balances Page', async function() {
    const balPage = new BalPage();
    await balPage.clickTransferButton();    
});

Then('I click on Contactus button on Balances Page', async function() {
    const balPage = new BalPage();
    await balPage.clickContactusButton();    
});

Then('balance page is navigated to {string} page', async function(WithDrawPage:string) {
    const balPage = new BalPage();
    await balPage.navigateToWithdrawPage();    
    return WithDrawPage;
});

Then('balance page for Transfer button is navigated to {string} page', async function(transferPage:string) {
    const balPage = new BalPage();
    await balPage.navigateToTransferPage();    
    return transferPage;
});

Then('Contact-us button is navigated to {string} page', async function(transferPage:string) {
    const balPage = new BalPage();
    await balPage.navigateToContactUsPage();    
    return transferPage;
});
