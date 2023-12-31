Feature: Exchange Page_Smoke Test
 
 As a user 
 I want to test
 Polkadex Exchange Page

Scenario:Verify_Smoke Test of Exchange Place
Given I am on the home screen
And I click on Start Trading button
And I can see DOT/USTD Text on screen
And I click on login link
And I enter the email as "hjose@4labsinc.com"
And I enter the password as "Leena@2010"
When I click on the login button
Then Login should be success
Then I click cross button on popup
When I clicked on Wallets link on Polkadex page
Then I can see What is a Funding Account? popup
And I click on Next button on What is Funding Account? popup
And I can see What is a Trading Account? popup
And I click on Done button on What is Trading Account? popup  
Then I can see heading as Wallets on Wallets page
When I clicked on Import Account button
Then I can see add trading account window
When I click on the Import existing trading account window
Then I can see Json file Radio button
When I click on Json file Radio button 
Then I can see upload file button
When I clicked on upload file button
Then I can see Import Button got enabled under add trading account window           
And I click on the Import Button under add trading account window
Then Trading Account imported successfully
Then I click on back button under add trading account window
When I click on Exchange link on Polkadex page
Then I am able to see "DOT/USTD" as selected trading pair
Then I can see graph is diplayed on the screen
Then I can see "Buy" button on screen
Then I can see available balance for selected trading pair
When I entered "0.1" in price field under Buy/Sell Section
And I entered "201" in amount field under Buy/Sell Section
Then I can see warning message as "Balance not enough"
When I entered "0.1" in the amount field under Buy/Sell Section
Then I can see "Buy-DOT" button got enabled 
Then I can see button color in "green"
When I click the "Buy-DOT" button 
Then I can see Order placed popup on the top right screen
Then I scroll down the page
And I can see order has been placed under Open Order list
When I click on "cancel" button under Open Order list
Then I can see message as "You don't have any recent orders"
When I click on arrow button
Then I can see available trading pair as:
| PHA/USTD |
| ASTR/USTD |
| IBTC/USTD |
| DOT/USTD |
| PDEX/USTD |
When I click on "USDT" button 
And I can see available trading pair as:
| PHA/USTD |
| ASTR/USTD |
| IBTC/USTD |
| DOT/USTD |
| PDEX/USTD | 
Then I select the "ASTR/USTD" as trading pair 
Then I am able to see the "ASTR/USTD" as selected trading pair
Then I can see "Sell" button on screen
When I click on "Sell" Button
Then I can see available balance for selected trading pair
When I entered "0.1" in price field under Buy/Sell Section
And I entered "201" in amount field under Buy/Sell Section 
Then I can see warning message as "Balance not enough"
When I entered "0.1" in the amount field under Buy/Sell Section
Then I can see "Sell-ASTR" button got enabled 
Then I can see sell button color in "pink"
When I click the "Sell-ASTR" button 
Then I can see Order placed popup on the top right screen
Then I scroll down the page
And I can see order has been placed under Open Order list
When I click on "cancel" button under Open Order list
Then I can see message as "You don't have any recent orders"
When I clicked on "Order History" Link
Then I can see list of pairs under Order History 
When I click on "Trade History" Link
Then I can see Pair details under Trade History
Then I click on "Funds" Link
When I click on "Open Orders" Link 
Then I selected "Show Reverted" CheckBox
Then I selected "Hide OthersPairs" ChecckBox
Then I selected "Buy" CheckkBox
Then I selected "Sell" Cheeckbox
When I click on arrow button 
Then I selected the "DOT/USTD" as trading pair
Then I can see price of USDT in 24h change field
Then I can see price of USDT in volume24h field
Then I can see price of USDT in 24h High field
Then I can see price of USDT in 24h Low field
Then I can see limit order button on exchange page
When I click on limit order button
Then I can see list under limit order menu as:
|Limit Order|
|Market Order|
When I click on viewBox under Orderbook button
Then I can see "Buy Values" under Price USDT colomn
When I click on Icon button
And I hover on search button
And I entered "$$" as invalid coin in search bar
Then searched item should display No result
And I hover on search button
And I searched "ASTR" as valid coin in search bar
Then searched item should display under exchange search Section
And I hover on search button
When I clear the search bar
Then I can see available trading pair as:
| PHA/USTD |
| ASTR/USTD |
| IBTC/USTD |
| DOT/USTD |
| PDEX/USTD |
# Then I select the "ASTR/USTD" as trading pair 
Then I click on favourite button for "ASTR/USTD" trading pair 
Then I click on favourite Icon near search bar
Then I can see trading pairs are listed under favourite icon