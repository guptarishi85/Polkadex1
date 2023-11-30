"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalPage = void 0;
const test_1 = require("@playwright/test");
const cucumber_1 = require("@cucumber/cucumber");
class BalPage {
    constructor() {
        global.createAccountButton = global.page.locator("//a[contains(text(),'Create Account')]");
        global.selectAccountButton = global.page.locator("//a[contains(text(),'Select Account')]");
        global.accountButton = global.page.locator("div.sc-7a1a3c5c-4.jjglNG");
        global.walletHeadingText = global.page.locator("//h1[contains(text(),'Wallets')]");
        global.balancesHeadingText = global.page.locator("//div[@class='sc-1e226c60-6 ebqibW']/h1");
        global.importAccountButton = global.page.locator("div[class='sc-cdd4ab13-8 cyuxUO'] button:nth-child(2)");
        global.tradingAccountPopup = global.page.locator("//h2[contains(text(),'Add trading account')]");
        global.importExistingAccount = global.page.locator("//span[contains(text(),'Import existing trading account')]");
        global.uploadButton = global.page.locator("//div[@role = 'presentation']");
        global.popup = global.page.locator("//span[contains(text(),'What is Deposit?')]");
        global.nextButton = global.page.locator("//button[normalize-space()='Next']");
        global.importAccountButtonEnabled = global.page.locator("//button[@type = 'submit']");
        global.importMessageSuccess = global.page.locator("//h3[contains(text(),'Trading Account Imported')]");
        global.textBalancePage = global.page.locator("//h2[contains(text(),'Available balance in your funding and trading account.')]");
        global.overviewTextBalancePage = global.page.locator("div.sc-1e226c60-7.fmWlTv h2");
        global.transferheadingText = global.page.locator("div.div.sc-c8178fd-6.fDtRhI h1");
        global.transferheadingText1 = global.page.locator("div.div.sc-c8178fd-6.fDtRhI h2");
        global.connectTradingAccountText = global.page.locator("div.sc-7a1a3c5c-3.iRedQN h2");
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
        global.depositCheckbox = global.page.locator("//div[@class='sc-794beb6c-0 ipvDnG']/input[@type='checkbox']");
        global.withdrawalBackButton = global.page.locator("//button[contains(text(),'Back')]");
        global.readWithdrawalPopupNextButton = global.page.locator("//div[@class='sc-85c6fc8c-2 dUCjbf']/button[2]");
        global.viewSearchButton = global.page.locator("//input[@placeholder='Search']");
        global.hideSmallBalances = global.page.locator("//div[@class = 'sc-dccd9f95-0 gVJEHz']/label");
        global.noSearchedResultFound = global.page.locator("div.sc-339e69cb-1.dBJvZE p");
        global.openTourButton = global.page.locator("//button[@type='button']");
        global.hoverDepositButton = global.page.locator("//div[contains(text(),'Extenal link')]");
        global.withdrawButton = global.page.locator("a.withdrawButton");
        global.transferButton = global.page.locator("a.transferButton");
        global.contactUsButton = global.page.locator("//a[normalize-space()='Contact us']");
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
        await global.page.setInputFiles('(//div[@role = "presentation"]/input)', ['./UploadItems/AccountImport.json']);
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
    viewOpenTourButton = async () => {
        await global.openTourButton.click();
        await await global.page.waitForTimeout(5000);
    };
    transferPopupClosed = async () => {
        (0, test_1.expect)(await global.page.locator("//div[@class='sc-85c6fc8c-2 dUCjbf']/button[2]")).toBeTruthy();
        await await global.page.waitForTimeout(5000);
    };
    clickBackButton = async () => {
        await global.page.locator("//button[@class = 'sc-a9ae2f11-1 iQMGmU' ]//*[local-name()='svg']").click();
    };
    textBalancePage = async () => {
        (0, test_1.expect)(await global.textBalancePage).toHaveText('Available balance in your funding and trading account.');
        await await global.page.waitForTimeout(5000);
    };
    overviewTextBalancePage = async () => {
        (0, test_1.expect)(await global.overviewTextBalancePage).toHaveText('Overview');
        await await global.page.waitForTimeout(5000);
    };
    transferheadingText = async () => {
        (0, test_1.expect)(await global.transferheadingText).toHaveText('Transfer');
        await await global.page.waitForTimeout(5000);
    };
    transferheadingText1 = async () => {
        (0, test_1.expect)(await global.transferheadingText1).toHaveText('Transfer');
        await await global.page.waitForTimeout(5000);
    };
    connectTradingAccountText = async () => {
        (0, test_1.expect)(await global.connectTradingAccountText).toHaveText('Connect your Trading Account');
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
    searchInvalidText = async () => {
        await global.page.type("[placeholder='Search']", "$$");
        await await global.page.waitForTimeout(5000);
    };
    noSearchedResultFound = async () => {
        (0, test_1.expect)(await global.noSearchedResultFound).toHaveText('No result found');
        await await global.page.waitForTimeout(5000);
    };
    clickCheckbox = async () => {
        await global.checkBox.click();
        await await global.page.waitForTimeout(10000);
    };
    undoCheckboxclick = async () => {
        await global.checkBox.click();
        await await global.page.waitForTimeout(10000);
    };
    readTextCheckbox = async () => {
        (0, test_1.expect)(await global.hideSmallBalances).toHaveText('Hide small balances');
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
        await global.page.waitForTimeout(10000);
    };
    clickFAColoumnHeaders = async () => {
        await global.fundAcHeader.click();
        await global.page.waitForTimeout(10000);
    };
    clickTAColoumnHeaders = async () => {
        await global.tradingAcHeader.click();
        await global.page.waitForTimeout(10000);
    };
    clickOrdersColoumnHeaders = async () => {
        await global.inOrders.click();
        await global.page.waitForTimeout(10000);
    };
    clickActionsColoumnHeaders = async () => {
        await global.actions.click();
        await global.page.waitForTimeout(10000);
    };
    clickCrosspopupButton = async () => {
        await global.page.locator("//button[@class='sc-817aa84f-1 loAZxI']//*[local-name()='svg']//*[local-name()='path'][1]").click();
        await global.page.waitForTimeout(2000);
    };
    clickDepositCheckbox = async () => {
        await global.depositCheckbox.click();
        await global.page.waitForTimeout(10000);
    };
    clickWithDrawalCheckbox = async () => {
        await global.depositCheckbox.click();
        await global.page.waitForTimeout(10000);
    };
    clickTransferCheckbox = async () => {
        await global.depositCheckbox.click();
        await global.page.waitForTimeout(10000);
    };
    withdrawalBackButton = async () => {
        await global.withdrawalBackButton.click();
    };
    readWithdrawalPopupNextButton = async () => {
        (0, test_1.expect)(await global.readWithdrawalPopupNextButton).toBeVisible();
    };
    readWithdrawalPopupBackButton = async () => {
        (0, test_1.expect)(await global.withdrawalBackButton).toBeVisible();
    };
    readWithdrawalPopupCheckbox = async () => {
        (0, test_1.expect)(await global.depositCheckbox).toBeVisible();
        //toHaveText("Don't show again");
        await await global.page.waitForTimeout(10000);
    };
    readDepositPopupCheckbox = async () => {
        (0, test_1.expect)(await global.depositCheckbox).toBeVisible();
        //toHaveText("Don't show again");
        await await global.page.waitForTimeout(10000);
    };
    readDepositPopupNextButton = async () => {
        (0, test_1.expect)(await global.page.locator("div.sc-85c6fc8c-2.dUCjbf button")).toBeVisible();
    };
    viewBalancePageButton = async () => {
        const buttons = global.page.locator('a:visible');
        const buttonsCount = await buttons.count();
        const hrefs = [];
        for (let i = 0; i < buttonsCount; i++) {
            hrefs.push(await buttons.nth(i).getAttribute('href'));
        }
        console.log(hrefs);
        await await global.page.waitForTimeout(10000);
    };
    textFooter = async () => {
        const buttons = global.page.locator('div.sc-1e226c60-20.kjRPsS h4:visible');
        const buttonsCount = await buttons.count();
        const hrefs = [];
        for (let i = 0; i < buttonsCount; i++) {
            hrefs.push(await buttons.nth(i).getAttribute('h4'));
        }
        console.log(hrefs);
        await await global.page.waitForTimeout(10000);
    };
    reloadPage = async () => {
        await global.page.goto('https://orderbook.polkadex.trade/balances');
        (0, cucumber_1.setDefaultTimeout)(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
        // global.page.keyboard.press('F5');
        await await global.page.waitForTimeout(6000);
        // //global.page.reload();
    };
    balancesHeadingText = async () => {
        (0, test_1.expect)(await global.balancesHeadingText).toHaveText("Balances");
        await await global.page.waitForTimeout(10000);
    };
    readTransferPopupDoneButton = async () => {
        (0, test_1.expect)(await global.page.locator("//div[@class='sc-85c6fc8c-2 dUCjbf']/button[2]")).toBeVisible();
    };
    readTransferPopupBackButton = async () => {
        (0, test_1.expect)(await global.readWithdrawalPopupNextButton).toBeVisible();
    };
    readTransferPopupCheckbox = async () => {
        (0, test_1.expect)(await global.depositCheckbox).toBeVisible();
        //toHaveText("Don't show again");
        await await global.page.waitForTimeout(10000);
    };
    viewSearchButton = async () => {
        (0, test_1.expect)(await global.viewSearchButton).toBeVisible();
    };
    readBHeaderText = async () => {
        (0, test_1.expect)(await global.page.locator('thead tr th')).toHaveText(['Name', 'Funding Account', 'Trading Account', 'In Orders', 'Actions']);
        await await global.page.waitForTimeout(10000);
    };
    readBSortButton = async () => {
        (0, test_1.expect)(await global.page.locator("//tr/th[@class='sc-1b50adbf-1 AxZQg']/span")).toHaveText(['Name', 'Funding Account', 'Trading Account', 'In Orders']);
        await await global.page.waitForTimeout(10000);
    };
    getTokenHeaderList = async () => {
        const nameHeaderList = await global.page.locator("//div[@class='sc-1b50adbf-3 bqyuGU']/div/span").toHaveText(['ASTR', 'DOT', 'IBTC', 'PDEX', 'USDT']);
        console.log(nameHeaderList);
    };
    getFundingTokenHeaderList = async () => {
        const nameFAHeaderList = await global.page.locator("//div[@class='sc-1b50adbf-7 dWPFre']/span").allTextContents();
        console.log(nameFAHeaderList);
    };
    getTradingTokenHeaderList = async () => {
        const nameTAHeaderList = await global.page.locator("//div[@class='sc-1b50adbf-7 dWPFre']/span").allTextContents();
        console.log(nameTAHeaderList);
    };
    getInOrdersTokenHeaderList = async () => {
        const nameInOrdersHeaderList = await global.page.locator("//div[@class='sc-1b50adbf-7 dWPFre']/span").allTextContents();
        console.log(nameInOrdersHeaderList);
    };
    viewButtonsOnBalance = async () => {
        await global.page.locator("//button[@class='sc-817aa84f-1 loAZxI']//*[local-name()='svg']//*[local-name()='path'][1]").click();
        await global.page.waitForTimeout(2000);
    };
    returnHighBalanceAccountList = async () => {
        const nameHeaderList = await global.page.locator("//div[@class='sc-1b50adbf-3 bqyuGU']/div/span").allTextContents();
        console.log(nameHeaderList);
    };
    returnAllBalanceAccountList = async () => {
        const nameHeaderList = await global.page.locator("//div[@class='sc-1b50adbf-3 bqyuGU']/div/span").allTextContents();
        console.log(nameHeaderList);
    };
    descendingOrderToken = async () => {
        const nameHeaderList = await global.page.locator("//div[@class='sc-1b50adbf-3 bqyuGU']/div/span").allTextContents();
        console.log(nameHeaderList);
    };
    clickDepositButton = async () => {
        (0, test_1.expect)(await global.page.locator("//a[@href='https://thea.polkadex.trade/']").click());
    };
    hoverDepositButton = async () => {
        await global.page.locator("//a[@href='https://thea.polkadex.trade/']").hover();
        await global.page.waitForTimeout(10000);
    };
    hoverWithdrawButton = async () => {
        await global.withdrawButton.hover();
        await global.page.waitForTimeout(10000);
    };
    hoverExternalLinkDepositButton = async () => {
        (0, test_1.expect)(await global.hoverDepositButton).toBeVisible();
        await global.page.waitForTimeout(5000);
    };
    hoverExternalLinkWithdrawButton = async () => {
        (0, test_1.expect)(await global.hoverDepositButton).toBeVisible();
        await global.page.waitForTimeout(5000);
    };
    navigateToTradePage = async () => {
        await global.page.goto('https://thea.polkadex.trade/');
        (0, cucumber_1.setDefaultTimeout)(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
        await await global.page.waitForTimeout(6000);
    };
    clickWithdrawButton = async () => {
        await global.withdrawButton.click();
    };
    clickTransferButton = async () => {
        await global.transferButton.click();
    };
    clickContactusButton = async () => {
        await global.contactUsButton.click();
    };
    navigateToWithdrawPage = async () => {
        await global.page.goto('https://thea.polkadex.trade/withdraw');
        (0, cucumber_1.setDefaultTimeout)(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
        await await global.page.waitForTimeout(6000);
    };
    navigateToTransferPage = async () => {
        await global.page.goto('https://orderbook.polkadex.trade/transfer?token=USDT');
        (0, cucumber_1.setDefaultTimeout)(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
        await await global.page.waitForTimeout(6000);
    };
}
exports.BalPage = BalPage;
module.exports = { BalPage };
