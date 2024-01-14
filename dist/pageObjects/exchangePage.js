"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const test_1 = require("@playwright/test");
const { setDefaultTimeout } = require('@cucumber/cucumber');
//import { expect } from "chai"; 
let strAfter;
let strBefore;
let strAvailableBalancesInFunds;
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
        global.tradingPairDOTText = global.page.locator("//div[@class='sc-23b221d1-9 jWQwCq']/span[contains(text(),'DOT/USDT')]");
        global.tradingPairASTRText = global.page.locator("//div[@class='sc-23b221d1-9 jWQwCq']/span[contains(text(),'ASTR/USDT')]");
        global.arrowButton = global.page.locator("//button[@class='sc-23b221d1-5 eNPUlc']//*[local-name()='svg']//*[local-name()='path']");
        global.clickIconButton = global.page.locator("//div[@class='sc-1957bb5e-1 gajulw']//*[name()='svg']//*[name()='path'][2]");
        global.clickUSTDButton = global.page.locator(".sc-23b221d1-27");
        global.selectTradingPair = global.page.locator(".sc-23b221d1-23.fdpBqb");
        global.clickExchangeLink = global.page.locator("//a[@href='/trading']//div[@class='sc-1957bb5e-0 lhmdGt']//div[@class='sc-1957bb5e-1 jVoEnZ']//*[name()='svg']");
        global.clickViewBox = global.page.locator("//div[@class='sc-85531983-3 bkUOey']//div[1]//*[name()='svg']");
        global.textAftersearchResult = global.page.locator("//span[contains(text(),'ASTR')]");
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
    verifyDOTUSDTTradingPairText = async () => {
        (0, test_1.expect)(await global.tradingPairDOTText).toHaveText('DOT/USDT');
        await global.page.waitForTimeout(10000);
    };
    verifyASTRUSDTTradingPairText = async () => {
        (0, test_1.expect)(await global.tradingPairASTRText).toHaveText('ASTR/USDT');
        await global.page.waitForTimeout(10000);
    };
    viewAvailableBalance = async () => {
        const buttons = await global.page.locator('span.sc-1af3737e-3.dRfAHk span').allTextContents();
        console.log(buttons);
    };
    viewAvailableBalancesInFunds = async () => {
        const viewAvailableBalancesInFunds = await global.page.locator('tbody tr:nth-child(4) td:nth-child(2) div:nth-child(1) span:nth-child(1)').allTextContents();
        console.log(viewAvailableBalancesInFunds);
        strAvailableBalancesInFunds = viewAvailableBalancesInFunds;
        console.log("viewAvailableBalancesInFunds :" + viewAvailableBalancesInFunds);
        console.log("strAvailableBalancesInFunds", +strAvailableBalancesInFunds);
        await global.page.waitForTimeout(7000);
    };
    viewAvailableBalanceBeforeBuyingTrade = async () => {
        const availableBalanceBeforeBuyingTrade = await global.page.locator('span.sc-1af3737e-3.dRfAHk span').allTextContents();
        await global.page.waitForTimeout(7000);
        strBefore = availableBalanceBeforeBuyingTrade[0] + availableBalanceBeforeBuyingTrade[1];
        console.log("Rishi:  " + strBefore);
        //console.log(availableBalanceBeforeBuyingTrade);
    };
    viewAvailableBalancesAfterBuyingTrade = async () => {
        const availableBalanceAfterBuyingTrade = await global.page.locator('span.sc-1af3737e-3.dRfAHk span').allTextContents();
        await global.page.waitForTimeout(7000);
        strAfter = availableBalanceAfterBuyingTrade[0] + availableBalanceAfterBuyingTrade[1];
        console.log("Rishi:  " + strAfter);
        //console.log(availableBalanceAfterBuyingTrade);
    };
    compareAvailableBalance = async () => {
        console.log("strAfter: ", +strAfter);
        console.log("strBefore: ", +strBefore);
        console.log("strAvailableBalancesInFunds :", +strAvailableBalancesInFunds);
        let strAvailableBalancesInFundsRoundOff = parseFloat(strAvailableBalancesInFunds);
        let n = strAvailableBalancesInFundsRoundOff.toFixed(4);
        console.log(n);
        let strAfterRoundOff = parseFloat(strAfter);
        let n1 = strAfterRoundOff.toFixed(3);
        console.log(n1);
        (0, test_1.expect)(n1).toEqual(test_1.expect.stringContaining(n));
        //expect(strAfter).toEqual(n);
        ///    let availableBalanceAfterBuyingTrade = await global.page.locator('span.sc-1af3737e-3.dRfAHk span').allTextContents();
        //   console.log("availableBalanceAfterBuyingTrade :" +availableBalanceAfterBuyingTrade);
        //   let viewAvailableBalancesInFunds = await global.page.locator('tr:nth-child(5) >td:nth-child(2) > div > span').allTextContents();
        //number n1 = Number(viewAvailableBalancesInFunds);
        //    console.log("viewAvailableBalancesInFunds :" +viewAvailableBalancesInFunds);
        //          let result= expect(viewAvailableBalancesInFunds).toEqual(strAfter);
        //          console.log(result);
        //  let viewAvailableBalancesInFunds1:number  = parseFloat(viewAvailableBalancesInFunds);
        //console.log("Gajraj: " +n);
        //let n2 = 456.123456;     
        //let n = expect(n).toHaveText(str);
        //expect(viewAvailableBalancesInFunds).stringContaining(availableBalanceAfterBuyingTrade);
        //expect(viewAvailableBalancesInFunds).toEqual(expect.stringContaining(availableBalanceAfterBuyingTrade));
        //console.log("roundoff: " +n);
    };
    //expect(value).stringContaining()
    view24hChangeAmount = async () => {
        const element = await global.page.locator('p.sc-a5742073-2.dZBGrX').allTextContents();
        console.log(element);
    };
    viewVolume24hAmount = async () => {
        const element = await global.page.locator('div:nth-child(3) > p').allTextContents();
        console.log(element);
    };
    view24hHighAmount = async () => {
        const element = await global.page.locator('div.sc-3ee64bf-7.kENhPq p').allTextContents();
        console.log(element);
    };
    view24hLowAmount = async () => {
        const element = await global.page.locator('div.sc-3ee64bf-8.grqTHx p').allTextContents();
        console.log(element);
    };
    selectTradingPair = async () => {
        const buttons = global.page.locator("div:nth-child(2) > div >div.sc-23b221d1-20.blKwAM > div.sc-23b221d1-23.fdpBqb > span");
        const buttonsCount = await buttons.count();
        for (let i = 0; i < buttonsCount; i++) {
            await buttons.nth(i).click();
            await await global.page.waitForTimeout(1000);
        }
        await global.page.waitForTimeout(10000);
    };
    selectISBTTradingPair = async () => {
        const buttons = global.page.locator("div:nth-child(3) > div >div.sc-23b221d1-20.blKwAM > div.sc-23b221d1-23.fdpBqb > span");
        const buttonsCount = await buttons.count();
        for (let i = 0; i < buttonsCount; i++) {
            await buttons.nth(i).click();
            await await global.page.waitForTimeout(1000);
        }
        await global.page.waitForTimeout(10000);
    };
    selectDOTUSTDTradingPair = async () => {
        const buttons = global.page.locator("div:nth-child(4) > div >div.sc-23b221d1-20.blKwAM > div.sc-23b221d1-23.fdpBqb > span");
        buttons.click();
    };
    getTradingPairList = async () => {
        const tradingPairList = await global.page.locator("div.sc-23b221d1-23.fdpBqb").allTextContents();
    };
    viewGraph = async () => {
        (0, test_1.expect)(await global.viewGraph).toBeVisible;
        await global.page.waitForTimeout(10000);
    };
    verifyBuyButton = async () => {
        const buttons = global.page.locator("//div[@class='sc-714be224-2 hbQdsF']/div");
        const buttonsCount = await buttons.count();
        const span = [];
        for (let i = 0; i < buttonsCount; i++) {
            span.push(await buttons.nth(i).getAttribute('div'));
        }
    };
    clickBuySellButton = async () => {
        const buttons = global.page.locator("//div[@class='sc-714be224-2 hbQdsF']/div");
        const buttonsCount = await buttons.count();
        for (let i = 0; i < buttonsCount; i++) {
            await buttons.nth(i).click();
        }
        await global.page.waitForTimeout(5000);
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
    clickIconButton = async () => {
        await global.clickIconButton.click();
        await global.page.waitForTimeout(5000);
    };
    clickExchangeLink = async () => {
        await global.clickExchangeLink.click();
        await global.page.waitForTimeout(5000);
    };
    clickViewBox = async () => {
        await global.clickViewBox.click();
        await global.page.waitForTimeout(5000);
    };
    clickUSTDAllButton = async () => {
        const buttons = global.page.locator('.sc-23b221d1-26.kEtmab :visible');
        const buttonsCount = await buttons.count();
        for (let i = 1; i < buttonsCount; i++) {
            await buttons.nth(i).click();
        }
        await global.page.waitForTimeout(10000);
    };
    hoverSearchbutton = async () => {
        await global.page.locator("div > div.sc-7ddc4ccd-0.deryhW > button > div > div > svg").hover();
        await global.page.waitForTimeout(5000);
    };
    enterTTextSearch = async () => {
        await global.page.locator("[placeholder='Search Markets..']").fill('$$');
        await global.page.waitForTimeout(5000);
    };
    enterASTRTextSearch = async () => {
        await global.page.locator("[placeholder='Search Markets..']").fill('ASTR');
        await global.page.waitForTimeout(5000);
    };
    textAftersearchResult = async () => {
        (0, test_1.expect)(await global.textAftersearchResult).toBeTruthy();
        await global.page.waitForTimeout(5000);
    };
    enterPriceAmount = async () => {
        const random = await global.page.locator("//input[@id='order-price']").fill('0.1');
        await global.page.waitForTimeout(5000);
    };
    enterAmountBuy = async () => {
        const random = await global.page.locator("#order-amount").fill('201');
        await global.page.waitForTimeout(2000);
    };
    entersAmountBuy = async () => {
        const random = await global.page.locator("#order-amount").fill('0.1');
        await global.page.waitForTimeout(2000);
    };
    searchItemView = async () => {
        (0, test_1.expect)(await global.page.locator("div.sc-339e69cb-1.dBJvZE p")).toHaveText('No result found');
        await global.page.waitForTimeout(10000);
    };
    warningMessage = async () => {
        (0, test_1.expect)(await global.page.locator("div.sc-1af3737e-13.iVTJIk span.sc-1af3737e-14.iUpfVO")).toBeVisible();
        await await global.page.waitForTimeout(5000);
    };
    buttonEnabled = async () => {
        (0, test_1.expect)(await global.page.locator("button[type='submit']")).toBeEnabled;
        await await global.page.waitForTimeout(5000);
    };
    viewOrderbookValues = async () => {
        const element = await global.page.locator("//span[@class='sc-85531983-15 IpVQa']/span").allTextContents();
        console.log(element);
        await await global.page.waitForTimeout(5000);
    };
    viewOrderbookBackgroundColor = async () => {
        const element = await global.page.locator("//span[@class='sc-85531983-15 IpVQa']/span");
        console.log(element);
        const color = await element.evaluate((e) => {
            return window.getComputedStyle(e).getPropertyValue("color");
        });
        console.log(color);
        (0, test_1.expect)(color).toBe("rgb(12, 165, 100)");
        (0, test_1.expect)(color).toBe("rgb(230, 0, 122)");
    };
    viewLimitOrderMenu = async () => {
        const element = (0, test_1.expect)(await global.page.locator("div:nth-child(2) >section:nth-child(1) > div:nth-child(1) > div:nth-child(2)")).toBeVisible();
        console.log(element);
        await global.page.waitForTimeout(5000);
    };
    clickLimitOrderMenu = async () => {
        const element = await global.page.locator("div:nth-child(2) >section:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click();
        await global.page.waitForTimeout(10000);
    };
    clearSearchBar = async () => {
        await global.page.locator("[placeholder='Search Markets..']").fill('');
        ;
        await global.page.waitForTimeout(5000);
    };
    getListLimitOrderMenu = async () => {
        const element = await global.page.locator("//div[@id='react-aria2920736001-:r2i:']").allTextContents();
        console.log(element);
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
            const text = await element.textContent();
            console.log("Text Content:", text); // Example action - printing text content
            // Other actions...
        }
    };
    verifyButtonColor = async () => {
        const docsLink = global.page.locator("button[type='submit']");
        const color = await docsLink.evaluate((e) => {
            return window.getComputedStyle(e).getPropertyValue("background-color");
        });
        console.log(color);
        (0, test_1.expect)(color).toBe("rgb(12, 165, 100)");
    };
    verifyPinkButtonColor = async () => {
        const docsLink = global.page.locator("button[type='submit']");
        const color = await docsLink.evaluate((e) => {
            return window.getComputedStyle(e).getPropertyValue("background-color");
        });
        console.log(color);
        (0, test_1.expect)(color).toBe("rgb(230, 0, 122)");
    };
    clicksubmitButton = async () => {
        await global.page.locator("//button[@type='submit']").click();
        await global.page.waitForTimeout(5000);
    };
    OrderPlacedPopup = async () => {
        (0, test_1.expect)(await global.page.locator("div[role='alert'] div:nth-child(2)")).toBeVisible();
        await global.page.waitForTimeout(10000);
    };
    CancelorderPlacedList = async () => {
        const buttons = global.page.locator('.sc-da7c8ccf-4.jLNFYK');
        const buttonsCount = await buttons.count();
        for (let i = 0; i < buttonsCount; i++) {
            await buttons.nth(i).click();
        }
        await global.page.waitForTimeout(10000);
    };
    OrderPlacedList = async () => {
        let ele = await global.page.locator(".sc-da7c8ccf-0.MtcLf").allTextContents();
        await global.page.waitForTimeout(5000);
        console.log(ele);
    };
    scrolDownPage = async () => {
        global.page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
        await global.page.waitForTimeout(5000);
    };
    cancelledOrderPopup = async () => {
        (0, test_1.expect)(await global.page.locator("//div[contains(text(),'Order cancelled: 0xb5ac2f192fade9cc16aa3131c0ac73b')]")).toBeVisible();
        await global.page.waitForTimeout(10000);
    };
    cancelledScreenMessage = async () => {
        (0, test_1.expect)(await global.page.locator("//section[@class='sc-5feba810-0 jqlyWx']//p[1]")).toBeVisible();
        await global.page.waitForTimeout(5000);
    };
    clickLinks = async () => {
        const buttons = global.page.locator('.sc-5feba810-4.OLBzg li');
        const buttonsCount = await buttons.count();
        for (let i = 0; i < buttonsCount; i++) {
            await buttons.nth(i).click();
            await global.page.waitForTimeout(2000);
        }
        await global.page.waitForTimeout(10000);
    };
    orderHistory = async () => {
        let ele = await global.page.locator(".infinite-scroll-component tr").allTextContents();
        console.log(ele);
        await global.page.waitForTimeout(10000);
    };
    tradeHistory = async () => {
        let ele = await global.page.locator(".sc-2424705b-0.GBQIU").allTextContents();
        console.log(ele);
        await global.page.waitForTimeout(10000);
    };
    selectSRBoxbutton = async () => {
        await global.page.locator("div:nth-child(2) >div:nth-child(1) > input:nth-child(1)").click();
        await global.page.waitForTimeout(3000);
    };
    hideOtherPairCheckBox = async () => {
        await global.page.locator("div:nth-child(2) >div:nth-child(2) > input:nth-child(1)").click();
        await global.page.waitForTimeout(3000);
    };
    buyCheckBox = async () => {
        await global.page.locator("div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)").click();
        await global.page.waitForTimeout(3000);
    };
    sellCheckBox = async () => {
        await global.page.locator("div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click();
        await global.page.waitForTimeout(3000);
    };
    clickOrderHistory = async () => {
        await global.page.locator("//li[normalize-space()='Order History']").click();
        await global.page.waitForTimeout(3000);
    };
    clickTradeHistory = async () => {
        await global.page.locator("//li[normalize-space()='Trade History']").click();
        await global.page.waitForTimeout(3000);
    };
    clickFunds = async () => {
        await global.page.locator("//li[normalize-space()='Funds']").click();
        await global.page.waitForTimeout(3000);
    };
    clickOpenOrders = async () => {
        await global.page.locator("//li[normalize-space()='Open Orders']").click();
        await global.page.waitForTimeout(3000);
    };
}
exports.HomePage = HomePage;
module.exports = { HomePage };
