Feature: Balances Page

 As a user 
 I want to test
 Polkadex Balances Page Withdraw_button_Click

Background:
 Given I am on the home screen
 And I click on Start Trading button
 And I can see DOT/USTD Text on screen


Scenario: Verify Withdraw_button_Click functionalities
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
Then I am able to view "Actions" Header Text on balances Page
Then I can see "Withdraw" Button on Balances Page
When I click on Withdraw button on Balances Page
Then balance page is navigated to 'https://thea.polkadex.trade/withdraw' page
