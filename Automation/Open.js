// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://polkadex.trade/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Polkadex Orderbook - Decentralized Crypto Currency Exchange/);
});

