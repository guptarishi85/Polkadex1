Feature: Exchange Page_Verify the user is able to view the available trading pair
 
 As a user 
 I want to test
 Polkadex Exchange Page

Scenario:Verify the user is able to view the available trading pair
Given I am on the Exchange Page screen
Then I am able to see "DOT/USTD" as selected trading pair
Then I can see graph is diplayed on the screen 
When I click on arrow button 
Then I can see available trading pair as:
| PHA/USTD |
| ASTR/USTD |
| IBTC/USTD |
| DOT/USTD |
| PDEX/USTD |


