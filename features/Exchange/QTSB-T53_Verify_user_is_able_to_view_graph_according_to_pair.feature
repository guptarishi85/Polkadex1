Feature: Exchange Page_Verify the user is able to view the graph according to the pair
 
 As a user 
 I want to test
 Polkadex Exchange Page

Scenario:Verify the user is able to view the graph according to the pair
Given I am on the Exchange Page screen
Then I am able to see "DOT/USTD" as selected trading pair
When I click on arrow button 
Then I can see available trading pair as:
| PHA/USTD |
| ASTR/USTD |
| IBTC/USTD |
| DOT/USTD |
| PDEX/USTD |
When I select the "ASTR/USTD" as trading pair 
Then I can see graph is diplayed on the screen
Then I click on arrow button 
Then "IBTC/USTD" selected as trading pair
Then I can see graph is diplayed on the screen
