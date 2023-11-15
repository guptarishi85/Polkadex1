"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalPage = void 0;
const test_1 = require("@playwright/test");
class BalPage {
    constructor() {
        global.createAccountButton = global.page.locator("//a[contains(text(),'Create Account')]");
        global.selectAccountButton = global.page.locator("//a[contains(text(),'Select Account')]");
        global.accountButton = global.page.locator("div.sc-7a1a3c5c-4.jjglNG");
        global.walletHeadingText = global.page.locator("//h1[contains(text(),'Wallets')]");
        global.importAccountButton = global.page.locator("div[class='sc-cdd4ab13-8 cyuxUO'] button:nth-child(2)");
        global.tradingAccountPopup = global.page.locator("//h2[contains(text(),'Add trading account')]");
        global.importExistingAccount = global.page.locator("//span[contains(text(),'Import existing trading account')]");
        global.uploadButton = global.page.locator("//div[@role = 'presentation']");
        global.popup = global.page.locator("//span[contains(text(),'What is Deposit?')]");
        global.nextButton = global.page.locator("//button[normalize-space()='Next']");
        global.importAccountButtonEnabled = global.page.locator("//button[@type = 'submit']");
        global.importMessageSuccess = global.page.locator("//h3[contains(text(),'Trading Account Imported')]");
        global.textBalancePage = global.page.locator("//h2[contains(text(),'Available balance in your funding and trading account.')]");
        global.textAftersearch = global.page.locator("//span[contains(text(),'DOT')]");
        global.checkBox = global.page.locator("//input[@type='checkbox']");
        global.nameHeader = global.page.locator("//span[contains(text(),'Name')]");
        global.fundAcHeader = global.page.locator("//span[contains(text(),'Funding Account')]");
        global.tradingAcHeader = global.page.locator("//span[contains(text(),'Trading Account')]");
        global.inOrders = global.page.locator("//span[contains(text(),'In Orders')]");
        global.actions = global.page.locator("//span[contains(text(),'Actions')]");
        global.depositPopup = global.page.locator("//span[contains(text(),'What is Deposit?')]");
        global.withdrawalPopup = global.page.locator("//span[contains(text(),'What is Withdrawal?')]");
        global.transferPopup = global.page.locator("//span[contains(text(),'What is Transfer?')]");
        global.fundingAcPopup = global.page.locator("//span[contains(text(),'What is a Funding Account?')]");
        global.tradingAcPopup = global.page.locator("//span[contains(text(),'What is a Trading Account?')]");
    }
    clickLoginLink = async () => {
        (0, test_1.expect)(await global.page.getByRole('link', { name: 'Log In' }).click());
    };
    enterUserEmail = async (enterEmail) => {
        await global.page.locator("//input[@name='email']").type(enterEmail);
    };
    enterUserPassword = async (enterUserPassword) => {
        await global.page.locator("//input[@name='password']").type(enterUserPassword);
    };
    createAccountButton = async () => {
        (0, test_1.expect)(await global.createAccountButton).toBeVisible();
    };
    selectAccountButton = async () => {
        (0, test_1.expect)(await global.selectAccountButton).toHaveAttribute("", "");
    };
    clickWalletsLink = async () => {
        await global.page.locator('a').filter({ hasText: 'Wallets' }).click();
    };
    walletHeadingText = async () => {
        (0, test_1.expect)(await global.walletHeadingText).toHaveText('Wallets');
        return;
    };
    importAccountButton = async () => {
        (0, test_1.expect)(await global.importAccountButton).toBeVisible();
    };
    clickImportAccountButton = async () => {
        await global.importAccountButton.click();
        await global.page.waitForTimeout(10000);
    };
    tradingAccountPopup = async () => {
        (0, test_1.expect)(await global.tradingAccountPopup).toHaveText('Add trading account');
        return;
    };
    importExistingAccount = async () => {
        await global.importExistingAccount.click();
    };
    jsonRadioButton = async () => {
        (0, test_1.expect)(await global.page.locator("label input#json")).toBeVisible();
    };
    clickJsonRadioButton = async () => {
        await global.page.locator("label input#json").click();
    };
    uploadButton = async () => {
        (0, test_1.expect)(await global.uploadButton).toBeVisible();
    };
    uploadFileButton = async () => {
        await global.page.setInputFiles('(//div[@role = "presentation"]/input)', ['D:/PolkadexAutomation/Polkadex1/UploadItems/AccountImport.json']);
        await global.page.waitForTimeout(5000);
    };
    importAccountButtonEnabled = async () => {
        (0, test_1.expect)(await global.importAccountButtonEnabled).toBeEnabled();
    };
    clickImportButtonTD = async () => {
        await global.importAccountButtonEnabled.click();
        await global.page.waitForTimeout(10000);
    };
    popup = async () => {
        (0, test_1.expect)(await global.popup).toBeVisible();
        await await global.page.waitForTimeout(5000);
    };
    tdAccountImportSuccessfully = async () => {
        (0, test_1.expect)(await global.importMessageSuccess).toHaveText('Trading Account Imported');
        await await global.page.waitForTimeout(5000);
    };
    clickBalanceLink = async () => {
        await global.page.locator("//*[name()='path' and contains(@d,'M12 18.75C')]").click();
        await await global.page.waitForTimeout(10000);
    };
    depositPopup = async () => {
        (0, test_1.expect)(await global.depositPopup).toHaveText('What is Deposit?');
        await await global.page.waitForTimeout(5000);
    };
    withdrawalPopup = async () => {
        (0, test_1.expect)(await global.withdrawalPopup).toHaveText('What is Withdrawal?');
        await await global.page.waitForTimeout(5000);
    };
    transferPopup = async () => {
        (0, test_1.expect)(await global.transferPopup).toHaveText('What is Transfer?');
        await await global.page.waitForTimeout(5000);
    };
    fundingAcPopup = async () => {
        (0, test_1.expect)(await global.fundingAcPopup).toHaveText('What is a Funding Account?');
        await await global.page.waitForTimeout(5000);
    };
    tradingAcPopup = async () => {
        (0, test_1.expect)(await global.tradingAcPopup).toHaveText('What is a Trading Account?');
        await await global.page.waitForTimeout(5000);
    };
    clickDepositNextButtonPopup = async () => {
        (0, test_1.expect)(await global.page.locator("//button[contains(text(),'Next')]").click());
    };
    clickFundingAcNextButtonPopup = async () => {
        (0, test_1.expect)(await global.page.locator("//button[contains(text(),'Next')]").click());
    };
    clickTradingAcNextButtonPopup = async () => {
        (0, test_1.expect)(await global.page.locator("//button[contains(text(),'Done')]").click());
    };
    clickWithdrawalNextButtonPopup = async () => {
        (0, test_1.expect)(await global.page.locator("//div[@class='sc-85c6fc8c-2 dUCjbf']/button[2]").click());
    };
    clickTransferDoneButtonPopup = async () => {
        (0, test_1.expect)(await global.page.locator("//div[@class='sc-85c6fc8c-2 dUCjbf']/button[2]").click());
        await await global.page.waitForTimeout(5000);
    };
    clickBackButton = async () => {
        await global.page.locator("//button[@class = 'sc-a9ae2f11-1 iQMGmU' ]//*[local-name()='svg']").click();
    };
    textBalancePage = async () => {
        (0, test_1.expect)(await global.textBalancePage).toHaveText('Available balance in your funding and trading account.');
        await await global.page.waitForTimeout(5000);
    };
    searchText = async () => {
        await global.page.type("[placeholder='Search']", "DOT");
        await await global.page.waitForTimeout(5000);
    };
    textAftersearch = async () => {
        (0, test_1.expect)(await global.textAftersearch).toBeTruthy();
        await await global.page.waitForTimeout(5000);
    };
    clickCheckbox = async () => {
        await global.checkBox.click();
        await await global.page.waitForTimeout(10000);
    };
    nextButtonClick = async () => {
        await global.nextButton.click;
    };
    getHeaderList = async () => {
        const table = global.page.locator("div.sc-1b50adbf-0.dPWdqK table");
        const headers = global.page.locator("thead");
        console.log(await headers.allTextContents());
    };
    clickNamesColoumnHeaders = async () => {
        await global.nameHeader.click();
        await await global.page.waitForTimeout(10000);
    };
    clickFAColoumnHeaders = async () => {
        await global.fundAcHeader.click();
        await await global.page.waitForTimeout(10000);
    };
    clickTAColoumnHeaders = async () => {
        await global.tradingAcHeader.click();
        await await global.page.waitForTimeout(10000);
    };
    clickOrdersColoumnHeaders = async () => {
        await global.inOrders.click();
        await await global.page.waitForTimeout(10000);
    };
    clickActionsColoumnHeaders = async () => {
        await global.actions.click();
        await await global.page.waitForTimeout(10000);
    };
    clickCrosspopupButton = async () => {
        await global.page.locator("//button[@class='sc-817aa84f-1 loAZxI']//*[local-name()='svg']//*[local-name()='path'][1]").click();
        await await global.page.waitForTimeout(10000);
    };
}
exports.BalPage = BalPage;
module.exports = { BalPage };
