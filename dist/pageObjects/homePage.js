"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const test_1 = require("@playwright/test");
//import { page } from "../setup/hooks";
const { setDefaultTimeout } = require('@cucumber/cucumber');
class HomePage {
    constructor() {
        global.logo = global.page.locator("//a[@class='sc-45d90ffc-30 clJkmP']//*[name() ='path'][2]");
        global.link = global.page.locator("//button[@id='headlessui-menu-button-:r2:']");
        global.subMenu = global.page.locator("//div[@id='headlessui-menu-items-:r3:']");
        global.clickStButton = global.page.locator("//div[@class='sc-45d90ffc-3 eAIUno']//a[@class='sc-45d90ffc-1 dkiHIk']");
        global.DotUSDText = global.page.locator("//span[contains(text(),'DOT/USDT')]");
        global.buyButton = global.page.locator("//div[@class='sc-714be224-4 eQcFFW']");
        global.sellButton = global.page.locator("//div[@class='sc-714be224-4 dBqqUP']");
        global.percentButton = global.page.locator("//div[@class= 'sc-1af3737e-7 bToErj']");
        //global.loginLink = global.page.locator("//a[@href = '/signIn']");
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
        await global.page.waitForTimeout(10000);
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
        const r = await global.subMenu.allTextContents();
        console.log("All contents are:" + "\n\ " + r);
    };
    clickStButton = async () => {
        await global.clickStButton.click();
    };
    verifyDotUSDText = async () => {
        (0, test_1.expect)(await global.DotUSDText).toHaveText('DOT/USDT');
    };
    verifyBuyButton = async () => {
        (0, test_1.expect)(await global.buyButton).toBeVisible();
    };
    clickBuyButton = async () => {
        await global.buyButton.click();
    };
    clickPercentButton = async (value) => {
        let x;
        console.log("value " + value);
        if (value === 25) {
            x = 1;
            console.log("I am in 25% ");
            global.buttonXpath = global.page.locator("//div[@class='sc-1af3737e-7 bToErj']/div[" + `${x}` + "]");
            global.buttonXpath.click();
        }
        if (value === 50) {
            x = 2;
            console.log("I am in 50% ");
            global.buttonXpath = global.page.locator("//div[@class='sc-1af3737e-7 bToErj']/div[" + `${x}` + "]");
            global.buttonXpath.click();
        }
        if (value === 75) {
            x = 3;
            console.log("I am in 75% ");
            global.buttonXpath = global.page.locator("//div[@class='sc-1af3737e-7 bToErj']/div[" + `${x}` + "]");
            global.buttonXpath.click();
        }
        if (value === 100) {
            x = 4;
            console.log("I am in 100% ");
            global.buttonXpath = global.page.locator("//div[@class='sc-1af3737e-7 bToErj']/div[" + `${x}` + "]");
            global.buttonXpath.click();
        }
    };
}
exports.HomePage = HomePage;
module.exports = { HomePage };
