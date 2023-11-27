import { expect,Page } from "@playwright/test";
import { setDefaultTimeout } from "@cucumber/cucumber";

export class BalPage {
constructor() { 

global.createAccountButton = global.page.locator("//a[contains(text(),'Create Account')]");
global.selectAccountButton = global.page.locator("//a[contains(text(),'Select Account')]");
global.accountButton = global.page.locator("div.sc-7a1a3c5c-4.jjglNG");
global.walletHeadingText = global.page.locator("//h1[contains(text(),'Wallets')]");
global.balancesHeadingText = global.page.locator("//div[@class='sc-1e226c60-6 ebqibW']/h1");
global.importAccountButton = global.page.locator("div[class='sc-cdd4ab13-8 cyuxUO'] button:nth-child(2)");
global.tradingAccountPopup = global.page.locator("//h2[contains(text(),'Add trading account')]");
global.importExistingAccount = global.page.locator("//span[contains(text(),'Import existing trading account')]");
global.uploadButton = global.page.locator("//div[@role = 'presentation']");
global.popup = global.page.locator("//span[contains(text(),'What is Deposit?')]");
global.nextButton = global.page.locator("//button[normalize-space()='Next']");
global.importAccountButtonEnabled = global.page.locator("//button[@type = 'submit']");
global.importMessageSuccess = global.page.locator("//h3[contains(text(),'Trading Account Imported')]");
global.textBalancePage =  global.page.locator("//h2[contains(text(),'Available balance in your funding and trading account.')]");
global.overviewTextBalancePage = global.page.locator("div.sc-1e226c60-7.fmWlTv h2");
global.textAftersearch = global.page.locator("//span[contains(text(),'DOT')]");
global.checkBox = global.page.locator("//input[@type='checkbox']"); 
global.nameHeader = global.page.locator("//span[contains(text(),'Name')]"); 
global.fundAcHeader = global.page.locator("//span[contains(text(),'Funding Account')]");
global.tradingAcHeader = global.page.locator("//span[contains(text(),'Trading Account')]");
global.inOrders = global.page.locator("//span[contains(text(),'In Orders')]");
global.actions = global.page.locator("//span[contains(text(),'Actions')]");
global.depositPopup = global.page.locator("//span[contains(text(),'What is Deposit?')]");
global.withdrawalPopup = global.page.locator("//span[contains(text(),'What is Withdrawal?')]");
global.transferPopup = global.page.locator("//span[contains(text(),'What is Transfer?')]");
global.fundingAcPopup = global.page.locator("//span[contains(text(),'What is a Funding Account?')]");
global.tradingAcPopup = global.page.locator("//span[contains(text(),'What is a Trading Account?')]");
global.depositCheckbox = global.page.locator("//div[@class='sc-794beb6c-0 ipvDnG']/input[@type='checkbox']");
global.withdrawalBackButton = global.page.locator("//button[contains(text(),'Back')]");
global.readWithdrawalPopupNextButton = global.page.locator("//div[@class='sc-85c6fc8c-2 dUCjbf']/button[2]");
global.viewSearchButton = global.page.locator("//input[@placeholder='Search']");
global.hideSmallBalances = global.page.locator("//div[@class = 'sc-dccd9f95-0 gVJEHz']/label");
}

public clickLoginLink = async () => {
expect(await global.page.getByRole('link', { name: 'Log In' }).click());
} 

public enterUserEmail = async (enterEmail) => {
await global.page.locator("//input[@name='email']").type(enterEmail);    
} 

public enterUserPassword = async (enterUserPassword) => {
    await global.page.locator("//input[@name='password']").type(enterUserPassword);  
  } 
public createAccountButton = async () => {
    expect(await global.createAccountButton).toBeVisible()
}

public clickWalletsLink = async () => {
    await global.page.locator('a').filter({ hasText: 'Wallets' }).click();
}

public walletHeadingText = async () => {
  expect(await global.walletHeadingText).toHaveText ('Wallets');
  return ;
  }

  public importAccountButton = async () => {
    expect(await global.importAccountButton).toBeVisible()
}

public clickImportAccountButton = async () => {
  await global.importAccountButton.click();
  await global.page.waitForTimeout(10000);
}

public tradingAccountPopup = async () => {
  expect(await global.tradingAccountPopup).toHaveText ('Add trading account');
  return ;
  }

public importExistingAccount = async () => {
    await global.importExistingAccount.click();
}

public jsonRadioButton = async () => {
expect(await global.page.locator("label input#json")).toBeVisible();
} 

public clickJsonRadioButton = async () => {
  await global.page.locator("label input#json").click();
  } 

  public uploadButton = async () => {
  expect(await global.uploadButton).toBeVisible();
  
}

public uploadFileButton = async () => {
await global.page.setInputFiles('(//div[@role = "presentation"]/input)', ['F:/PolkadexAutomation_nov/Polkadex1/UploadItems/AccountImport.json']);
await global.page.waitForTimeout(5000);
}

public importAccountButtonEnabled = async () => {
  expect(await global.importAccountButtonEnabled).toBeEnabled();
}

public clickImportButtonTD = async () => {
  await global.importAccountButtonEnabled.click();
  await global.page.waitForTimeout(10000);
}

public popup = async() =>{
  expect(await global.popup).toBeVisible();
  await await global.page.waitForTimeout(5000);
}

public tdAccountImportSuccessfully = async() =>{
  expect(await global.importMessageSuccess).toHaveText ('Trading Account Imported');
  await await global.page.waitForTimeout(5000);
}

public clickBalanceLink = async () => {
  await global.page.locator("//*[name()='path' and contains(@d,'M12 18.75C')]").click();
  await await global.page.waitForTimeout(10000);
 }

 public depositPopup = async () => {
 expect(await global.depositPopup).toHaveText ('What is Deposit?');
 await await global.page.waitForTimeout(5000);
}

public withdrawalPopup = async () => {
  expect(await global.withdrawalPopup).toHaveText ('What is Withdrawal?');
  await await global.page.waitForTimeout(5000);
 }

 public transferPopup = async () => {
  expect(await global.transferPopup).toHaveText ('What is Transfer?');
  await await global.page.waitForTimeout(5000);
 }

 public fundingAcPopup = async () => {
  expect(await global.fundingAcPopup).toHaveText ('What is a Funding Account?');
  await await global.page.waitForTimeout(5000);
 }
 
 public tradingAcPopup = async () => {
  expect(await global.tradingAcPopup).toHaveText ('What is a Trading Account?');
  await await global.page.waitForTimeout(5000);
 }

public clickDepositNextButtonPopup = async () => {
  expect(await global.page.locator("//button[contains(text(),'Next')]").click());
 }

 public clickFundingAcNextButtonPopup = async () => {
  expect(await global.page.locator("//button[contains(text(),'Next')]").click());
 }

 public clickTradingAcNextButtonPopup = async () => {
  expect(await global.page.locator("//button[contains(text(),'Done')]").click());
 }

 public clickWithdrawalNextButtonPopup = async () => {
  expect(await global.page.locator("//div[@class='sc-85c6fc8c-2 dUCjbf']/button[2]").click());
 }

 public clickTransferDoneButtonPopup = async () => {
  expect(await global.page.locator("//div[@class='sc-85c6fc8c-2 dUCjbf']/button[2]").click());
  await await global.page.waitForTimeout(5000);
 }
 
public clickBackButton = async () => {
  await global.page.locator("//button[@class = 'sc-a9ae2f11-1 iQMGmU' ]//*[local-name()='svg']").click();
}

public textBalancePage = async () => {
expect(await global.textBalancePage).toHaveText ('Available balance in your funding and trading account.');
await await global.page.waitForTimeout(5000);
}

public overviewTextBalancePage = async () => {
  expect(await global.overviewTextBalancePage).toHaveText ('Overview');
  await await global.page.waitForTimeout(5000);
  }

public searchText = async () => {
await global.page.type("[placeholder='Search']","DOT");
await await global.page.waitForTimeout(5000);
}

public textAftersearch = async () => {
  expect(await global.textAftersearch).toBeTruthy();
  await await global.page.waitForTimeout(5000);
  }

public clickCheckbox = async () => {
  await global.checkBox.click();
  await await global.page.waitForTimeout(10000);
}

public readTextCheckbox = async () => {
  expect(await global.hideSmallBalances).toHaveText('Hide small balances');
  await await global.page.waitForTimeout(10000);
}

  public nextButtonClick = async() => {
    await global.nextButton.click;
}

public getHeaderList = async () => {
  const table = global.page.locator("div.sc-1b50adbf-0.dPWdqK table");
  const headers = global.page.locator("thead");
  console.log(await headers.allTextContents());
}

public clickNamesColoumnHeaders = async () => {
  await global.nameHeader.click();
  await await global.page.waitForTimeout(10000);
}

public clickFAColoumnHeaders = async () => {
  await global.fundAcHeader.click();
  await await global.page.waitForTimeout(10000);
}

public clickTAColoumnHeaders = async () => {
  await global.tradingAcHeader.click();
  await await global.page.waitForTimeout(10000);
}

public clickOrdersColoumnHeaders = async () => {
  await global.inOrders.click();
  await await global.page.waitForTimeout(10000);
}

public clickActionsColoumnHeaders = async () => {
  await global.actions.click();
  await await global.page.waitForTimeout(10000);
}

public clickCrosspopupButton = async () => {
await global.page.locator("//button[@class='sc-817aa84f-1 loAZxI']//*[local-name()='svg']//*[local-name()='path'][1]").click();
await await global.page.waitForTimeout(2000);
}

public clickDepositCheckbox = async () => {
  await global.depositCheckbox.click();
  await await global.page.waitForTimeout(10000);
}

public clickWithDrawalCheckbox = async () => {
  await global.depositCheckbox.click();
  await await global.page.waitForTimeout(10000);
}

public clickTransferCheckbox = async () => {
  await global.depositCheckbox.click();
  await await global.page.waitForTimeout(10000);
}

public withdrawalBackButton = async () => {
  await global.withdrawalBackButton.click();
}

public readWithdrawalPopupNextButton = async () => {
  expect(await global.readWithdrawalPopupNextButton).toBeVisible();
}

public readWithdrawalPopupBackButton = async () => {
  expect(await global.withdrawalBackButton).toBeVisible();
}

public readWithdrawalPopupCheckbox = async () => {
  expect(await global.depositCheckbox).toBeVisible();
  //toHaveText("Don't show again");
  await await global.page.waitForTimeout(10000);
}

public readDepositPopupCheckbox = async () => {
  expect(await global.depositCheckbox).toBeVisible();
  //toHaveText("Don't show again");
  await await global.page.waitForTimeout(10000);
}

public readDepositPopupNextButton = async () => {
  expect(await global.page.locator("div.sc-85c6fc8c-2.dUCjbf button")).toBeVisible();
}

public reloadPage = async () => {
    await global.page.goto('https://orderbook.polkadex.trade/balances');
    setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);
    // global.page.keyboard.press('F5');
    await await global.page.waitForTimeout(6000);
    // //global.page.reload();
    
}
public balancesHeadingText = async () => {
  expect(await global.balancesHeadingText).toHaveText("Balances");
  await await global.page.waitForTimeout(10000);
  }

public readTransferPopupDoneButton = async () => {
    expect(await global.page.locator("//div[@class='sc-85c6fc8c-2 dUCjbf']/button[2]")).toBeVisible();
  }

public readTransferPopupBackButton = async () => {
    expect(await global.readWithdrawalPopupNextButton).toBeVisible();
  }

public readTransferPopupCheckbox = async () => {
  expect(await global.depositCheckbox).toBeVisible();
  //toHaveText("Don't show again");
  await await global.page.waitForTimeout(10000);
}

public viewSearchButton = async () => {
  expect(await global.viewSearchButton).toBeVisible();
}

public readBHeaderText = async () => {
expect(await global.page.locator('thead tr th')).toHaveText(['Name','Funding Account','Trading Account','In Orders', 'Actions']);
await await global.page.waitForTimeout(10000);
}

public readBSortButton = async () => {
  expect(await global.page.locator("//tr/th[@class='sc-1b50adbf-1 AxZQg']/span")).toHaveText(['Name','Funding Account','Trading Account','In Orders']);
  await await global.page.waitForTimeout(10000);
  }

  public getTokenHeaderList = async () => {
    const nameHeaderList = expect(await global.page.locator("//div[@class='sc-1b50adbf-3 bqyuGU']/div/span")).toHaveText(['ASTR', 'DOT', 'IBTC', 'PDEX', 'USDT']);
    //allTextContents();
    //toHaveText(['ASTR','DOT','IBTC','USDT','PDEX']);
    console.log(nameHeaderList);
    // await await global.page.waitForTimeout(10000);
 
}
}
module.exports = { BalPage };
