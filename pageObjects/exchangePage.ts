import { expect } from "@playwright/test";
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
  
  public navigateToHomePage = async () => {
    await global.page.goto(global.BASE_URL);
    setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
    await global.page.waitForTimeout(10000);
  }

  public navigateToExchangePage = async () => {
    await global.page.goto(global.BASE_URL_EXCHANGE);
    setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
    await global.page.waitForTimeout(10000);
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
    await global.page.waitForTimeout(10000);
    }

  public verifyDOTUSDTTradingPairText = async () => {
    expect(await global.tradingPairDOTText).toHaveText ('DOT/USDT');
    await global.page.waitForTimeout(10000);
    }

  public verifyASTRUSDTTradingPairText = async () => {
    expect(await global.tradingPairASTRText).toHaveText ('ASTR/USDT');
    await global.page.waitForTimeout(10000);
    }

  public viewAvailableBalance = async () => {
      const buttons = await global.page.locator('span.sc-1af3737e-3.dRfAHk span').allTextContents();
      console.log(buttons);
    }
    
  public view24hChangeAmount = async () => {
      const element = await global.page.locator('p.sc-a5742073-2.dZBGrX').allTextContents();
      console.log(element);
  }

  public viewVolume24hAmount = async () => {
  const element = await global.page.locator('div:nth-child(3) > p').allTextContents();
  console.log(element);
  }

  public view24hHighAmount = async () => {
  const element = await global.page.locator('div.sc-3ee64bf-7.kENhPq p').allTextContents();
  console.log(element);
  }
  
  public view24hLowAmount = async () => {
  const element = await global.page.locator('div.sc-3ee64bf-8.grqTHx p').allTextContents();
  console.log(element);
  }
  
  public selectTradingPair = async () => {
  const buttons = global.page.locator("div:nth-child(2) > div >div.sc-23b221d1-20.blKwAM > div.sc-23b221d1-23.fdpBqb > span");
  const buttonsCount = await buttons.count();
    for (let i = 0; i < buttonsCount; i++) {
  await buttons.nth(i).click();
  await await global.page.waitForTimeout(1000);
  }
await global.page.waitForTimeout(10000);

}

public selectISBTTradingPair = async () => { 
const buttons = global.page.locator("div:nth-child(3) > div >div.sc-23b221d1-20.blKwAM > div.sc-23b221d1-23.fdpBqb > span");
  const buttonsCount = await buttons.count();
    for (let i = 0; i < buttonsCount; i++) {
  await buttons.nth(i).click();
  await await global.page.waitForTimeout(1000);
  }
    await global.page.waitForTimeout(10000);
  
  }

  public selectDOTUSTDTradingPair = async () => { 
    const buttons = global.page.locator("div:nth-child(4) > div >div.sc-23b221d1-20.blKwAM > div.sc-23b221d1-23.fdpBqb > span");
    buttons.click();
  }

  public getTradingPairList = async () => {
    const tradingPairList = await global.page.locator("div.sc-23b221d1-23.fdpBqb").allTextContents();
    }
    
    public viewGraph = async () => {
      expect(await global.viewGraph).toBeVisible;
      await global.page.waitForTimeout(5000);
    }
    
  public verifyBuyButton = async () => {
  const buttons = global.page.locator("//div[@class='sc-714be224-2 hbQdsF']/div");
  const buttonsCount = await buttons.count();
  const span = [];
  for (let i = 0; i < buttonsCount; i++) {
    span.push(await buttons.nth(i).getAttribute('div'));
  }
}

public clickBuySellButton = async () => {
const buttons = global.page.locator("//div[@class='sc-714be224-2 hbQdsF']/div");
  const buttonsCount = await buttons.count();
    for (let i = 0; i < buttonsCount; i++) {
  await buttons.nth(i).click();
  }
    await global.page.waitForTimeout(5000);
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

public clickArrowButton = async () => {
  await global.arrowButton.click();
  await global.page.waitForTimeout(5000);
}

public clickIconButton = async () => {
  await global.clickIconButton.click();
  await global.page.waitForTimeout(5000);
}

public clickExchangeLink = async () => {
  await global.clickExchangeLink.click();
  await global.page.waitForTimeout(5000);
}

public clickViewBox = async () => {
  await global.clickViewBox.click();
  await global.page.waitForTimeout(5000);
}

public clickUSTDAllButton = async () => {
  const buttons = global.page.locator('.sc-23b221d1-26.kEtmab :visible');
  const buttonsCount = await buttons.count();
  for (let i = 1; i < buttonsCount; i++) {
  await buttons.nth(i).click();
  }
  await global.page.waitForTimeout(10000);
  }
    
public hoverSearchbutton = async () => {
  await global.page.locator("div > div.sc-7ddc4ccd-0.deryhW > button > div > div > svg").hover();
  await global.page.waitForTimeout(10000);
 }

 public enterTTextSearch= async () => {
  await global.page.locator("[placeholder='Search Markets..']").fill('$$');
  await global.page.waitForTimeout(10000);
 }

 public enterASTRTextSearch= async () => {
  await global.page.locator("[placeholder='Search Markets..']").fill('ASTR');
  await global.page.waitForTimeout(10000);
 }

 public textAftersearchResult = async () => {
  expect(await global.textAftersearchResult).toBeTruthy();
  await global.page.waitForTimeout(5000);
  }
 
public enterPriceAmount= async () => {
const random =  await global.page.locator("//input[@id='order-price']").fill('0.1');
  await global.page.waitForTimeout(5000);
 }
 
public  enterAmountBuy = async () => {
const random =  await global.page.locator("#order-amount").fill('13');
await global.page.waitForTimeout(10000);
 }

public  entersAmountBuy = async () => {
const random =  await global.page.locator("#order-amount").fill('0.1');
await global.page.waitForTimeout(10000);
 }

 public searchItemView= async () => {
  expect(await global.page.locator("div.sc-339e69cb-1.dBJvZE p")).toHaveText('No result found');
  await global.page.waitForTimeout(10000);
 }
 
 public warningMessage= async () => {
  expect(await global.page.locator("div.sc-1af3737e-13.iVTJIk span.sc-1af3737e-14.iUpfVO")).toBeVisible();
  await await global.page.waitForTimeout(5000);
 }

 public buttonEnabled= async () => {
  expect(await global.page.locator("button[type='submit']")).toBeEnabled;
  await await global.page.waitForTimeout(5000);
 }

public viewOrderbookValues= async () => {
  const element = await global.page.locator("//span[@class='sc-85531983-15 IpVQa']/span").allTextContents();
  console.log(element);
  await await global.page.waitForTimeout(5000);
 }

public viewOrderbookBackgroundColor= async () => {
  const element = await global.page.locator("//span[@class='sc-85531983-15 IpVQa']/span");
  console.log(element);
  const color = await element.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("color")
})
console.log(color);
expect(color).toBe("rgb(12, 165, 100)");
}

public viewLimitOrderMenu= async () => {
  const element = expect(await global.page.locator("div:nth-child(2) >section:nth-child(1) > div:nth-child(1) > div:nth-child(2)")).toBeVisible();
  console.log(element);
  await global.page.waitForTimeout(5000);
 }

public clickLimitOrderMenu= async () => {
 const element = await global.page.locator("div:nth-child(2) >section:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click();
 await global.page.waitForTimeout(10000);
 }

public clearSearchBar= async () => {
await global.page.locator("[placeholder='Search Markets..']").fill('');;
 await global.page.waitForTimeout(10000);
 }

public getListLimitOrderMenu= async () => {
  const element = await global.page.locator("//div[@id='react-aria2920736001-:r2i:']").allTextContents();
  console.log(element);
  await global.page.waitForTimeout(5000);
 }

 public tradingpairsoptions = async () => {
      const elements = await global.page.$$('div.sc-23b221d1-18.gaFTEH > button.sc-23b221d1-21.jIhioH > div.sc-1957bb5e-0.lhmdGt');
      let favoritesCount = 0;
      for (const element of elements) 
      {
        if (favoritesCount >= 3) 
        {
          break; // Exit the loop once the first 3 items are favorited
        }
    
        await element.click();
        favoritesCount++;
      }
    
    
      
      await await global.page.waitForTimeout(10000);
      }

    public clickMainFavoriteButton= async () => {
      const elements = await global.page.$$('div.sc-1957bb5e-0.lhmdGt > div.sc-1957bb5e-1.hpOvcJ');
      if (elements.length > 0) {
        const firstElement = elements[0];
        // Perform actions on the first located element
        await firstElement.click(); 
      }
      await await global.page.waitForTimeout(10000);
        }
    
      public favouriteItemList= async () => {
        const elements = await global.page.$$("//div[@class='sc-23b221d1-23 fdpBqb']");
        for (const element of elements) {
          // Perform actions on each located element
          const text = await element.textContent();
          console.log("Text Content:", text); // Example action - printing text content
          // Other actions...
        }
      


  }
}

module.exports = { HomePage };


