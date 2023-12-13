import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { TransPage } from  "../pageObjects/transferPage";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let page;

Then('I can see text as "Move tokens between your Funding account and Trading account"', async function () {
    const transPage = new TransPage();
    await transPage.trasferheadingText();
});

Then('I can see Text as "Transfer to other Polkadex accounts" on Transfer page', async function () {
    const transPage = new TransPage();
    await transPage.transferradioText();
});

Then('I can see heading as "Transfer" in Bold', async function () {
    const transPage = new TransPage();
    await transPage.transferBoldText();
});

Then('I click on radio button', async function(){
    const transPage = new TransPage();
    await transPage.clickRadioButton();
});

Then('I can see radio button with Transfer to other Polkadex accounts on Transfer page', async function(){
    const transPage = new TransPage();
    await transPage.viewRadioButton();
});

Then('I can see radio button with Transfer to other Polkadex accounts on Transfer page is off', async function(){
    const transPage = new TransPage();
    await transPage.viewRadioButtonOff();
});

Then('I click on ASTR',async function(){
    const transPage = new TransPage();
    await transPage.astrButton();
});
Then ('I click on Hide Zero balances',async function(){
    const transPage = new TransPage();
    await transPage.Hide0BalanceButton();
});
Then ('I Unclick on Hide Zero balanaces',async function(){
    const transPage = new TransPage();
    await transPage.UnHide0BalanceButton();
});

Then ('I hover on SeachBox',async function(){
    const transPage = new TransPage();
    await transPage.hoverInSearchBox();
});

Then('I enter in SearchBox {string}', async function (enterInSearchBox) {
    const transPage = new TransPage();
    await transPage.enterInSearchBox(enterInSearchBox);
});

Then('I am able to click on Transfer to other Polkadex accounts radio button', async function () {
    const transPage = new TransPage();
    await transPage.clickRadioButton();
});

Then('I click down arrow button near the token', async function () {
    const transPage = new TransPage();
    await transPage.clickArrowButton();
});

Then('I can get the list of tokens on right drawer', async function () {
    const transPage = new TransPage();
    await transPage.getTokenList();
    });

Then('I can select PDEX token from right drawer', async function () {
    const transPage = new TransPage();
    await transPage.selectToken();
});

Then('I enter amount as "3" in amount field', async function () {
    const transPage = new TransPage();
    await transPage.enterAmountText();
});

Then('I enter "1" as amount in amount field', async function () {
    const transPage = new TransPage();
    await transPage.enterLowAmountText();
});

Then('I can see Transfer button is enable to do Transaction',  async function () {
    const transPage = new TransPage();
    await transPage.enableTransferButton();
});

Then('I can see Transfer button is Disable to do Transaction',  async function () {
    const transPage = new TransPage();
    await transPage.disableTransferButton();
});

When('I click on Switch button',async function(){
    const transPage = new TransPage();
    await transPage.clickOnSwtichButton();
});

Then('Switch colour button is in pink colour', async function(){
    await global.page.waitForTimeout(10000);
    const transPage = new TransPage();
    await transPage.verifySwitchColour();
});
    
Then('Switch colour button is in Green colour', async function(){
    await global.page.waitForTimeout(10000);
    const transPage = new TransPage();
    await transPage.sverifySwitchColour();
});
            
Then('I can see text as "From Trading account"', async function () {
    const transPage = new TransPage();
    await transPage.verifyToTradingAccountHeading();
});

Then('I can see text as "To funding account"', async function () {
    const transPage = new TransPage();
    await transPage.verifyToFundingAccountHeading();
});

Then('I can see text as "From Funding account"', async function () {
    const transPage = new TransPage();
    await transPage.verifyToFundingAccountHeading();
});
Then('I can see text as "To Trading account"', async function () {
    const transPage = new TransPage();
    await transPage.verifyToTradingAccountHeading();  
});

Then('I can see warning message as "The amount you entered exceeds your balance"', async function () {
    const transPage = new TransPage();
    await transPage.warningMessageText();  
});

When('I click MAX button on transfer page',async function(){
    const transPage = new TransPage();
    await transPage.clickMaxButton();
});


