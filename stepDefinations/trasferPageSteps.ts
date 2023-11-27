import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { TransPage } from  "../pageObjects/transferPage";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let page;

Then('I click on Transfer button on Balances Page', async function(){
    this.page = page;
    const transPage = new TransPage();
    await transPage.transferbutton();
});
Then('I can see text as "Move tokens between your Funding account and Trading account"', async function () {
    const transPage = new TransPage();
    await transPage.trasferheadingText();
});


Then('I click on toggle button', async function(){
    const transPage = new TransPage();
    await transPage.toggleButton();
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







    
