import { expect } from "@playwright/test";
//import { page } from "../setup/hooks";
const { setDefaultTimeout } = require('@cucumber/cucumber');
export class HomePage {
  constructor() {
    global.logo = global.page.locator("//a[@class='sc-45d90ffc-30 clJkmP']//*[name() ='path'][2]");
    global.link = global.page.locator("//button[@id='headlessui-menu-button-:r2:']");
    global.subMenu = global.page.locator("//div[@id='headlessui-menu-items-:r3:']");
    global.clickStButton = global.page.locator("//div[@class='sc-45d90ffc-3 eAIUno']//a[@class='sc-45d90ffc-1 dkiHIk']")
    global.DotUSDText = global.page.locator("//span[contains(text(),'DOT/USDT')]");
    global.buyButton = global.page.locator("//div[@class='sc-714be224-4 eQcFFW']");
    global.sellButton = global.page.locator("//div[@class='sc-714be224-4 dBqqUP']");
    global.percentButton = global.page.locator("//div[@class= 'sc-1af3737e-7 bToErj']");
    //global.loginLink = global.page.locator("//a[@href = '/signIn']");

  
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
    await global.page.waitForTimeout(10000);
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
    const r = await global.subMenu.allTextContents();
    console.log("All contents are:"+ "\n\ " + r);
  }

  public clickStButton = async () => {
    await global.clickStButton.click();
    }

  public verifyDotUSDText = async () => {
    expect(await global.DotUSDText).toHaveText ('DOT/USDT');
    }
  
  public verifyBuyButton = async () => {
    expect(await  global.buyButton).toBeVisible()
  }

  public clickBuyButton = async () => {
   await global.buyButton.click();
  }

  public clickPercentButton = async (value: number) => {
    let x;
    console.log("value " +value);
    if(value===25){
      x=1;
    console.log("I am in 25% ");
    global.buttonXpath = global.page.locator("//div[@class='sc-1af3737e-7 bToErj']/div["+`${x}`+"]") ; 
    global.buttonXpath.click();
    
    }
    if(value===50)
    {
     x=2;
     console.log("I am in 50% ");
     global.buttonXpath = global.page.locator("//div[@class='sc-1af3737e-7 bToErj']/div["+`${x}`+"]") ; 
    global.buttonXpath.click();

    }
    if(value===75)
    {
     x=3;
     console.log("I am in 75% ");
     global.buttonXpath = global.page.locator("//div[@class='sc-1af3737e-7 bToErj']/div["+`${x}`+"]") ; 
    global.buttonXpath.click();

    }
    if(value===100)
    {
      x=4;
      console.log("I am in 100% ");
      global.buttonXpath = global.page.locator("//div[@class='sc-1af3737e-7 bToErj']/div["+`${x}`+"]") ; 
    global.buttonXpath.click();

    }
    
  }
    
  }



module.exports = { HomePage };


