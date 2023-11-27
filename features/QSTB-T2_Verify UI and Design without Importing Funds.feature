Feature: Balances Page_Verify UI and design_With trading or funding account

 As a user 
 I want to test
 Polkadex Balances Page _ UI design

Background:
 Given I am on the home screen
 And I click on Start Trading button
 And I can see DOT/USTD Text on screen


Scenario: Verify UI and design_With trading or funding account
And I click on login link
And I enter the email as "hjose@4labsinc.com"
And I enter the password as "Leena@2010"
When I click on the login button
Then Login should be success
And I click cross button on popup
When I click on Balances link on Polkadex page
Then I see text as "Available balance in your funding and trading account. on balance page"
Then I see text as "Overview" on Balances Page
Then I am able to view Search bar on Balances Page
When I searched text "$$" in search bar of overview Section
Then searched item should display No result found under overview Section
And I am able to view Hide_small_balance text with checkbox on Balances Page
And I click Hide small balances checkbox
And I uncheck Hide small balances checkbox
And I see text as "Connect your Trading Account" on Balances page
And I can see "Create Account" Button on Balances Page 
And I can see "Select Account" Button on Balances Page