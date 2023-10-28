const{test,expect}=require('@playwright/test')

test("Verify Application Title",async function({page})
{
 await page.goto("https://orderbook.polkadex.trade/")

 const url=await page.url()

 console.log("title is "+url)

})
