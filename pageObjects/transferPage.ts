import { expect,Page } from "@playwright/test";
import { setDefaultTimeout } from "@cucumber/cucumber";


export class TransPage {
constructor() { 


global.transferbutton1=global.page.locator("//a[@class='transferButton']");
global.transferToOtherAccount=global.page.locator("//div[@class='sc-497a7b1a-2 dCdpND']//div");
global.trasferheadingText=global.page.locator("//h2[contains(text(),'Move tokens between your Funding account and Tradi')]");
global.AstrButton=global.page.locator("//p[normalize-space()='ASTR']");
global.Hide0Balance=global.page.locator("//div[@class='sc-dccd9f95-0 gVJEHz']//*[@type='checkbox']");
global.EnterDot=global.page.locator("//div[@class='sc-7ddc4ccd-0 psNiG']//input[@placeholder='Search']");
}

public transferbutton = async () => {
await global.page.waitForTimeout(10000);
await global.page.locator("//a[@class='transferButton']").click();
} 

public trasferheadingText = async () => {
    expect(await global.trasferheadingText).toHaveText ('Move tokens between your Funding account and Trading account');
    return ;
    }

public toggleButton= async () => {
   await global.transferToOtherAccount.click();
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
  

}
module.exports = { TransPage };
