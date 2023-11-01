"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const test_1 = require("@playwright/test");
const { setDefaultTimeout } = require('@cucumber/cucumber');
class HomePage {
    constructor() {
        global.logo = global.page.locator("//a[@class='sc-45d90ffc-30 clJkmP']//*[name() ='path'][2]");
        global.link = global.page.locator("//button[@id='headlessui-menu-button-:r2:']");
        global.subMenu = global.page.locator("//div[@id='headlessui-menu-items-:r3:']");
        //("//div[@id='headlessui-menu-items-:r3:']");
    }
    navigateToHomePage = async () => {
        await global.page.goto(global.BASE_URL);
        setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
    };
    verifyButtonsAreVisible = async () => {
        await (0, test_1.expect)(global.logo).toBeVisible();
        await (0, test_1.expect)(global.searchButton).toBeVisible();
        await (0, test_1.expect)(global.luckyButton).toBeVisible();
    };
    verifyTitle = async () => {
        await global.page.waitForTimeout(20000);
        const text = await global.page.locator("//title[contains(text(),'Polkadex Orderbook')]");
        console.log(text);
    };
    clickLogo = async () => {
        await global.logo.click();
    };
    clickLink = async () => {
        await global.link.click();
    };
    getCount = async () => {
        //await global.page.waitForTimeout(10000);
        //await expect(global.subMenu).toHaveText();
        const r = await global.subMenu.allTextContents();
        console.log("All contents are:" + "\n\ " + r);
        //  for (let i =0;i<length;i++)
        //  {
        //    if(r[i].trim()===)
    };
}
exports.HomePage = HomePage;
module.exports = { HomePage };
