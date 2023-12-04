"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransPage = void 0;
const test_1 = require("@playwright/test");
class TransPage {
    constructor() {
        global.transferbutton1 = global.page.locator("//a[@class='transferButton']");
        global.transferToOtherAccount = global.page.locator("div.sc-497a7b1a-2.dCdpND div");
        global.trasferheadingText = global.page.locator("div.sc-c8178fd-6.fDtRhI h2");
        global.AstrButton = global.page.locator("//p[normalize-space()='ASTR']");
        global.Hide0Balance = global.page.locator("//div[@class='sc-dccd9f95-0 gVJEHz']//*[@type='checkbox']");
        global.EnterDot = global.page.locator("//div[@class='sc-7ddc4ccd-0 psNiG']//input[@placeholder='Search']");
        global.transferBoldText = global.page.locator("div.sc-c8178fd-6.fDtRhI h1");
        global.clickArrowButton = global.page.locator("div.sc-123246ec-4.kAislz svg");
        global.selectTokenPDEX = global.page.locator("//span[contains(text(),'PDEX')]");
        global.enterAmountText = global.page.locator("//input[@placeholder='Enter an amount']");
        global.enableTransferButton = global.page.locator("//button[@type='submit']");
        global.transferradioText = global.page.locator("div.sc-c8178fd-5.fAcGvj span");
        global.warningMessageText = global.page.locator("div[class='sc-ba5e1865-4 kZmlcv'] p");
    }
    transferbutton = async () => {
        await global.page.waitForTimeout(10000);
        await global.page.locator("//a[@class='transferButton']").click();
    };
    trasferheadingText = async () => {
        (0, test_1.expect)(await global.trasferheadingText).toHaveText('Move tokens between your Funding account and Trading account');
        await global.page.waitForTimeout(10000);
    };
    transferBoldText = async () => {
        (0, test_1.expect)(await global.transferBoldText).toHaveText('Transfer');
        return;
    };
    clickRadioButton = async () => {
        await global.transferToOtherAccount.click();
    };
    clickArrowButton = async () => {
        await global.clickArrowButton.click();
        await global.page.waitForTimeout(8000);
    };
    viewRadioButton = async () => {
        (0, test_1.expect)(await global.transferToOtherAccount).toBeVisible();
    };
    transferradioText = async () => {
        (0, test_1.expect)(await global.transferradioText).toBeVisible();
    };
    viewRadioButtonOff = async () => {
        (0, test_1.expect)(await global.transferToOtherAccount).toBeVisible();
    };
    astrButton = async () => {
        await global.AstrButton.click();
    };
    Hide0BalanceButton = async () => {
        await global.Hide0Balance.click();
    };
    UnHide0BalanceButton = async () => {
        await global.Hide0Balance.click();
    };
    hoverInSearchBox = async () => {
        await global.page.locator("//div[@class='sc-7ddc4ccd-0 psNiG']//div[@class='sc-1957bb5e-1 fRzjdo']//*[name()='svg']").hover();
    };
    enterInSearchBox = async (enterInSearchBox) => {
        await global.page.locator("//div[@class='sc-7ddc4ccd-0 psNiG']//input[@placeholder='Search']").type(enterInSearchBox);
        await global.page.keyboard.press('Enter');
        await global.page.waitForTimeout(10000);
    };
    getTokenList = async () => {
        const tokenList = await global.page.locator("div.sc-31d1bf61-3.cCrQFb div span").allTextContents();
        console.log(tokenList);
    };
    selectToken = async () => {
        await global.selectTokenPDEX.click();
        await global.page.waitForTimeout(5000);
    };
    enterAmountText = async () => {
        await global.enterAmountText.fill('3');
        await global.page.waitForTimeout(10000);
    };
    enterLowAmountText = async () => {
        await global.enterAmountText.fill('1');
        await global.page.waitForTimeout(10000);
    };
    enableTransferButton = async () => {
        (0, test_1.expect)(await global.enableTransferButton).toBeEnabled();
        await global.page.waitForTimeout(8000);
    };
    disableTransferButton = async () => {
        (0, test_1.expect)(await global.enableTransferButton).toBeDisabled;
        await global.page.waitForTimeout(8000);
    };
    clickOnSwtichButton = async () => {
        await global.switchbuttonClick.click();
    };
    verifyToTradingAccountHeading = async () => {
        await global.page.waitForTimeout(10000);
        (0, test_1.expect)(await global.TradingAccountHeading).toHaveText('Trading account');
    };
    verifyToFundingAccountHeading = async () => {
        await global.page.waitForTimeout(10000);
        (0, test_1.expect)(await global.FundingAccountHeading).toHaveText('Funding account');
    };
    // public verifyToTradingAccountHeading= async () => {
    // await global.page.waitForTimeout(10000);
    // expect(await global.FundingAccountHeading).toHaveText ('Funding account');
    // public verifyToTradingAccountHeading= async () => {await global.page.waitForTimeout(10000);
    // expect(await global.TradingAccountHeading).toHaveText ('Trading account');
    // }
    verifySwitchColour = async () => {
        const docsLink = global.page.locator("//button[@class='sc-d66d2ad9-2 fHNtq']");
        const color = await docsLink.evaluate((e) => {
            return window.getComputedStyle(e).getPropertyValue("background-color");
        });
        console.log(color);
        (0, test_1.expect)(color).toBe("rgb(230, 0, 122)");
    };
    sverifySwitchColour = async () => {
        const sdocsLink = global.page.locator("//button[@class='sc-ba5e1865-2 dGcYuD']");
        const scolor = await sdocsLink.evaluate((e) => {
            return window.getComputedStyle(e).getPropertyValue("background-color");
        });
        console.log(scolor);
        (0, test_1.expect)(scolor).toBe("rgb(12, 165, 100)");
    };
    warningMessageText = async () => {
        (0, test_1.expect)(await global.warningMessageText).toBeVisible();
    };
}
exports.TransPage = TransPage;
module.exports = { TransPage };
