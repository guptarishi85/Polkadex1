Feature: Exchange Page_Verify the user able to view the Trading pair drawer
 
 As a user 
 I want to test
 Polkadex Exchange Page

Scenario:Verify the user is able to view all the trading pairs with USDT
Given I am on the Exchange Page screen
Then I am able to see "DOT/USTD" as selected trading pair
When I click on Icon button
Then I can see available trading pair as:
| PHA/USTD |
| ASTR/USTD |
| IBTC/USTD |
| DOT/USTD |
| PDEX/USTD |