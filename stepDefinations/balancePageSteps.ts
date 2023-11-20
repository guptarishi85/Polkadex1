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
    await global.page.waitForTimeout(2000);
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

Then('I see text as "Available balance in your funding and trading account. on balance page"', async function () {
    const balPage = new BalPage();
    await balPage.textBalancePage();
});

Then('I see text as "Overview" on Balances Page', async function () {
    const balPage = new BalPage();
    await balPage.overviewTextBalancePage();
});


When('I searched text {string} in search bar of overview Section', async function (string) {
    const balPage = new BalPage();
    await balPage.searchText(); 
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

Then('I am able to select Hide small balances checkbox', async function () {
    const balPage = new BalPage();
    await balPage.clickCheckbox(); 
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
    
