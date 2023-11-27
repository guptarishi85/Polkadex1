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
}
exports.TransPage = TransPage;
module.exports = { TransPage };
