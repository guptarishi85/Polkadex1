import { expect } from "@playwright/test";
import { page } from "../setup/hooks";
const { setDefaultTimeout } = require('@cucumber/cucumber');
export class HomePage {
  constructor() {
    global.logo = global.page.locator("//a[@class='sc-45d90ffc-30 clJkmP']//*[name() ='path'][2]");
    global.link = global.page.locator("//button[@id='headlessui-menu-button-:r2:']");
    global.subMenu = global.page.locator("//div[@id='headlessui-menu-items-:r3:']");
    //("//div[@id='headlessui-menu-items-:r3:']");
  }
  
  public navigateToHomePage = async () => {
    await global.page.goto(global.BASE_URL);
    setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);

  }

  public verifyButtonsAreVisible = async () => {
    await expect(global.logo).toBeVisible()
    await expect(global.searchButton).toBeVisible()
    await expect(global.luckyButton).toBeVisible()
  }

  public verifyTitle = async () => {
    await global.page.waitForTimeout(20000);
    const text = await global.page.locator("//title[contains(text(),'Polkadex Orderbook')]");
    console.log(text);
  }

  public clickLogo = async () => {
    await global.logo.click();
  }

  public clickLink = async () => {
    await global.link.click();
  } 

  public getCount = async () => {
    //await global.page.waitForTimeout(10000);
    //await expect(global.subMenu).toHaveText();
    const r = await global.subMenu.allTextContents();
    console.log("All contents are:"+ "\n\ " + r);

  //  for (let i =0;i<length;i++)
  //  {
  //    if(r[i].trim()===)
    
}

}


module.exports = { HomePage };