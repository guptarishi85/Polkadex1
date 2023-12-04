Feature: Balances Page

 As a user 
 I want to test
 Polkadex Balances Page

Background:
 Given I am on the home screen
 And I click on Start Trading button
 And I can see DOT/USTD Text on screen


Scenario: Verify Import Button functionality and Balance Page functionalities
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
When I click on Balances link on Polkadex page
Then I can see What is Deposit? popup
Then I click on Next button on What is Deposit? popup
Then I can see What is Withdrawal? popup
Then I click on Next button on What is Withdrawal? popup
Then I can see What is Transfer? popup
Then I click on Done button on What is transfer? popup  
Then I see text as "Available balance in your funding and trading account. on balance page"
Then I can get the list of cloumn header names under Overview Section 
Then I click on the Name Cloumn header
Then I click on the Funding Account Cloumn header
Then I click on the Trading Account Cloumn header
Then I click on the In Orders Cloumn header
When I click Hide small balances checkbox
Then I can see all accounts with high balance only
When I uncheck Hide small balances checkbox
Then I can see all the tokens after unchecking checkbox
And I can see Text as "Having Trouble?" on footer part
And I can see Text as "Feel free to get in touch." on footer part
And I can see the "Open tour" Button on Balances Page
And I can see Text as "Deposit, Withdrawal, and Transfer differences" on footer part
And I can see Text as "We'll guide you through these new processes on a quick tour." on footer part
And I can see What is Deposit? popup
And I click on Next button on What is Deposit? popup
And I can see What is Withdrawal? popup
And I click on Next button on What is Withdrawal? popup
And I can see What is Transfer? popup
And I click on Done button on What is transfer? popup  
Then I can see "Deposit" Button on Balances Page
When I hover on Deposit Button
Then External link on Deposit button is displayed
Then I can see "Withdraw" Button on Balances Page
When I hover on Withdraw Button
Then External link on Withdraw button is displayed
Then I can see "Transfer" Button on Balances Page
When I searched text "DOT" in search bar of overview Section
Then searched item should display under overview Section
Then I can see "Contact us" Button on Balances Page
When I click on Contactus button on Balances Page
Then Contact-us button is navigated to "https://discord.com/channels/859180272335323166/1034160372954964089" page
