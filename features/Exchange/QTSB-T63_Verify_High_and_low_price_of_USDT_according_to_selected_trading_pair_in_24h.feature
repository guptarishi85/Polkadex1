Feature: Exchange Page_Verify_High_and_low_price_of_USDT_according_to_selected_trading_pair_in_24h
 
 As a user 
 I want to test
 Polkadex Exchange Page

Scenario:Verify_High_and_low_price_of_USDT_according_to_selected_trading_pair_in_24h
Given I am on the Exchange Page screen
Then I am able to see "DOT/USTD" as selected trading pair
Then I can see price of USDT in 24h High field
Then I can see price of USDT in 24h Low field
When I click on arrow button 
Then I can see available trading pair as:
| PHA/USTD |
| ASTR/USTD |
| IBTC/USTD |
| DOT/USTD |
| PDEX/USTD |
When I select the "ASTR/USTD" as trading pair 
Then I am able to see the "ASTR/USTD" as selected trading pair
Then I can see price of USDT in 24h High field
Then I can see price of USDT in 24h Low field