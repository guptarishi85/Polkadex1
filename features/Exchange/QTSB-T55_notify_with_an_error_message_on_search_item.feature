Feature: Exchange Page_Verify the user notify with an error message when a user enters the invalid coin in search bar
 
 As a user 
 I want to test
 Polkadex Exchange Page

Scenario:Verify the user notify with an error message when a user enters the invalid coin in search bar
Given I am on the Exchange Page screen
Then I am able to see "DOT/USTD" as selected trading pair
When I click on arrow button 
Then I can see available trading pair as:
| PHA/USTD |
| ASTR/USTD |
| IBTC/USTD |
| DOT/USTD |
| PDEX/USTD |
When I hover on search button
And I entered "$$" as invalid coin in search bar
Then searched item should display No result
