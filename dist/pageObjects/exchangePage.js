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
        global.clickStButton = global.page.locator("//div[@class='sc-45d90ffc-3 eAIUno']//a[@class='sc-45d90ffc-1 dkiHIk']");
        global.DotUSDText = global.page.locator("//span[contains(text(),'DOT/USDT')]");
        global.buyButton = global.page.locator("//div[@class='sc-714be224-4 eQcFFW']");
        global.sellButton = global.page.locator("//div[@class='sc-714be224-4 dBqqUP']");
        global.percentButton = global.page.locator("//div[@class= 'sc-1af3737e-7 bToErj']");
        global.tradingPairText = global.page.locator("//div[@class='sc-23b221d1-9 jWQwCq']/span[contains(text(),'DOT/USDT')]");
        global.arrowButton = global.page.locator("//button[@class='sc-23b221d1-5 eNPUlc']//*[local-name()='svg']//*[local-name()='path']");
        // global.favouriteButton=global.page.$$('div.sc-1957bb5e-0.lhmdGt > div.sc-1957bb5e-1.eXRxdo:first-child');    ')
    }
    navigateToHomePage = async () => {
        await global.page.goto(global.BASE_URL);
        setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
        await global.page.waitForTimeout(10000);
    };
    navigateToExchangePage = async () => {
        await global.page.goto(global.BASE_URL_EXCHANGE);
        setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
        await global.page.waitForTimeout(10000);
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
        await global.page.waitForTimeout(10000);
    };
    verifyTradingPairText = async () => {
        (0, test_1.expect)(await global.tradingPairText).toHaveText('DOT/USDT');
        await global.page.waitForTimeout(10000);
    };
    getTradingPairList = async () => {
        const tradingPairList = await global.page.locator("div.sc-23b221d1-23.fdpBqb").allTextContents();
        console.log(tradingPairList);
    };
    viewGraph = async () => {
        (0, test_1.expect)(await global.viewGraph).toBeVisible;
        await global.page.waitForTimeout(5000);
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
    clickArrowButton = async () => {
        await global.arrowButton.click();
        await global.page.waitForTimeout(5000);
    };
    tradingpairsoptions = async () => {
        const elements = await global.page.$$('div.sc-23b221d1-18.gaFTEH > button.sc-23b221d1-21.jIhioH > div.sc-1957bb5e-0.lhmdGt');
        let favoritesCount = 0;
        for (const element of elements) {
            if (favoritesCount >= 3) {
                break; // Exit the loop once the first 3 items are favorited
            }
            await element.click();
            favoritesCount++;
        }
        await await global.page.waitForTimeout(10000);
    };
    clickMainFavoriteButton = async () => {
        const elements = await global.page.$$('div.sc-1957bb5e-0.lhmdGt > div.sc-1957bb5e-1.hpOvcJ');
        if (elements.length > 0) {
            const firstElement = elements[0];
            // Perform actions on the first located element
            await firstElement.click();
        }
        await await global.page.waitForTimeout(10000);
    };
    favouriteItemList = async () => {
        const elements = await global.page.$$("//div[@class='sc-23b221d1-23 fdpBqb']");
        for (const element of elements) {
            // Perform actions on each located element
            const text = await element.textContent();
            console.log("Text Content:", text); // Example action - printing text content
            // Other actions...
        }
    };
}
exports.HomePage = HomePage;
module.exports = { HomePage };
