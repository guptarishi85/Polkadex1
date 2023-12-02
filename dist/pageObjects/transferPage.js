"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransPage = void 0;
const test_1 = require("@playwright/test");
class TransPage {
    constructor() {
        global.transferbutton1 = global.page.locator("//a[@class='transferButton']");
        global.transferToOtherAccount = global.page.locator("//div[@class='sc-497a7b1a-2 dCdpND']//div");
        global.trasferheadingText = global.page.locator("//h2[contains(text(),'Move tokens between your Funding account and Tradi')]");
        global.AstrButton = global.page.locator("//p[normalize-space()='ASTR']");
        global.Hide0Balance = global.page.locator("//div[@class='sc-dccd9f95-0 gVJEHz']//*[@type='checkbox']");
        global.EnterDot = global.page.locator("//div[@class='sc-7ddc4ccd-0 psNiG']//input[@placeholder='Search']");
        global.switchbuttonClick = global.page.locator("//span[normalize-space()='Switch']");
        global.STradingAccountHeading = global.page.locator("//p[contains(text(),'Trading account')]");
        global.SFundingAccountHeading = global.page.locator("//p[contains(text(),'Funding account')]");
        global.TradingAccountHeading = global.page.locator("//p[@class='sc-b977ef78-2 eEkzwt'][normalize-space()='Trading account']");
        global.FundingAccountHeading = global.page.locator("//p[normalize-space()='Funding account']");
    }
    transferbutton = async () => {
        await global.page.waitForTimeout(10000);
        await global.page.locator("//a[@class='transferButton']").click();
    };
    trasferheadingText = async () => {
        (0, test_1.expect)(await global.trasferheadingText).toHaveText('Move tokens between your Funding account and Trading account');
        return;
    };
    toggleButton = async () => {
        await global.transferToOtherAccount.click();
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
    clickOnSwtichButton = async () => {
        await global.switchbuttonClick.click();
    };
    SverifyToTradingAccountHeading = async () => {
        await global.page.waitForTimeout(10000);
        (0, test_1.expect)(await global.STradingAccountHeading).toHaveText('Trading account');
    };
    SverifyToFundingAccountHeading = async () => {
        await global.page.waitForTimeout(10000);
        (0, test_1.expect)(await global.SFundingAccountHeading).toHaveText('Funding account');
    };
    verifyToFundingAccountHeading = async () => {
        await global.page.waitForTimeout(10000);
        (0, test_1.expect)(await global.FundingAccountHeading).toHaveText('Funding account');
    };
    verifyToTradingAccountHeading = async () => {
        await global.page.waitForTimeout(10000);
        (0, test_1.expect)(await global.TradingAccountHeading).toHaveText('Trading account');
    };
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
}
exports.TransPage = TransPage;
module.exports = { TransPage };
