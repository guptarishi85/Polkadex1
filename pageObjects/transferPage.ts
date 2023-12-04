import { expect,Page } from "@playwright/test";
import { setDefaultTimeout } from "@cucumber/cucumber";


export class TransPage {
constructor() { 


global.transferbutton1=global.page.locator("//a[@class='transferButton']");
global.transferToOtherAccount=global.page.locator("div.sc-497a7b1a-2.dCdpND div");
global.trasferheadingText=global.page.locator("div.sc-c8178fd-6.fDtRhI h2");
global.AstrButton=global.page.locator("//p[normalize-space()='ASTR']");
global.Hide0Balance=global.page.locator("//div[@class='sc-dccd9f95-0 gVJEHz']//*[@type='checkbox']");
global.EnterDot=global.page.locator("//div[@class='sc-7ddc4ccd-0 psNiG']//input[@placeholder='Search']");
global.transferBoldText = global.page.locator("div.sc-c8178fd-6.fDtRhI h1");
global.clickArrowButton = global.page.locator("div.sc-123246ec-4.kAislz svg");
global.selectTokenPDEX = global.page.locator("//span[contains(text(),'PDEX')]");
global.enterAmountText = global.page.locator("//input[@placeholder='Enter an amount']");
global.enableTransferButton = global.page.locator("//button[@type='submit']");
global.transferradioText = global.page.locator("div.sc-c8178fd-5.fAcGvj span");
global.warningMessageText = global.page.locator("div[class='sc-ba5e1865-4 kZmlcv'] p");
}

public transferbutton = async () => {
await global.page.waitForTimeout(10000);
await global.page.locator("//a[@class='transferButton']").click();
} 

public trasferheadingText = async () => {
    expect(await global.trasferheadingText).toHaveText ('Move tokens between your Funding account and Trading account');
    await global.page.waitForTimeout(10000);
  }

public transferBoldText = async () => {
    expect(await global.transferBoldText).toHaveText ('Transfer');
    return ;
}
    
public clickRadioButton= async () => {
   await global.transferToOtherAccount.click();
}

public clickArrowButton= async () => {
  await global.clickArrowButton.click();
  await global.page.waitForTimeout(8000);
}

public viewRadioButton= async () => {
  expect(await global.transferToOtherAccount).toBeVisible();
 }

public  transferradioText = async () => {
  expect(await global.transferradioText).toBeVisible();
 }

public viewRadioButtonOff= async () => {
  expect(await global.transferToOtherAccount).toBeVisible();
 }

public astrButton= async () => {
    await global.AstrButton.click();
}     

public Hide0BalanceButton= async () => {
    await global.Hide0Balance.click();
}  

public UnHide0BalanceButton= async () => {
    await global.Hide0Balance.click();
}  

public hoverInSearchBox=async () => {
await global.page.locator("//div[@class='sc-7ddc4ccd-0 psNiG']//div[@class='sc-1957bb5e-1 fRzjdo']//*[name()='svg']").hover();
}


public enterInSearchBox = async (enterInSearchBox) => {
    await global.page.locator("//div[@class='sc-7ddc4ccd-0 psNiG']//input[@placeholder='Search']").type(enterInSearchBox);  
    await global.page.keyboard.press('Enter');
    await global.page.waitForTimeout(10000);
  } 
  
  public getTokenList = async () => {
    const tokenList = await global.page.locator("div.sc-31d1bf61-3.cCrQFb div span").allTextContents();
    console.log(tokenList);
}

public selectToken= async () => {
  await global.selectTokenPDEX.click();
  await global.page.waitForTimeout(5000);
}

public enterAmountText= async () => {
  await global.enterAmountText.fill('3');
  await global.page.waitForTimeout(10000);
}

public enterLowAmountText= async () => {
  await global.enterAmountText.fill('1');
  await global.page.waitForTimeout(10000);
}

public enableTransferButton= async () => {
  expect(await global.enableTransferButton).toBeEnabled();
  await global.page.waitForTimeout(8000);
}

public disableTransferButton= async () => {
  expect(await global.enableTransferButton).toBeDisabled;
  await global.page.waitForTimeout(8000);
}

public clickOnSwtichButton= async () => {
  await global.switchbuttonClick.click();

}
public verifyToTradingAccountHeading = async () => {
  await global.page.waitForTimeout(10000);
  expect(await global.TradingAccountHeading).toHaveText ('Trading account');
}

public verifyToFundingAccountHeading= async () => {
  await global.page.waitForTimeout(10000);
  expect(await global.FundingAccountHeading).toHaveText ('Funding account');
}

// public verifyToTradingAccountHeading= async () => {
// await global.page.waitForTimeout(10000);
// expect(await global.FundingAccountHeading).toHaveText ('Funding account');


  
// public verifyToTradingAccountHeading= async () => {await global.page.waitForTimeout(10000);
// expect(await global.TradingAccountHeading).toHaveText ('Trading account');
// }

public verifySwitchColour= async () =>{
  const docsLink = global.page.locator("//button[@class='sc-d66d2ad9-2 fHNtq']")
  const color = await docsLink.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue("background-color")
})
  console.log(color);
  expect(color).toBe("rgb(230, 0, 122)");
}

public sverifySwitchColour= async () =>{
  const sdocsLink = global.page.locator("//button[@class='sc-ba5e1865-2 dGcYuD']")
  const scolor = await sdocsLink.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue("background-color")
})
  console.log(scolor);
  expect(scolor).toBe("rgb(12, 165, 100)");
}

public warningMessageText= async () => {
  expect(await global.warningMessageText).toBeVisible();
 }

}

module.exports = { TransPage };
