Feature: Exchange Page_user_is_able_to_view_selected_trading_pair_on_button_and_Sell_order_form
 
 As a user 
 I want to test
 Polkadex Exchange Page

Scenario:Verify the user_is_able_to_view_selected_trading_pair_on_button_and_Sell_order_form
Given I am on the Exchange Page screen
#Then I am able to see "DOT/USTD" as selected trading pair
When I click on arrow button 
Then I can see available trading pair as:
| PHA/USTD |
| ASTR/USTD |
| IBTC/USTD |
| DOT/USTD |
| PDEX/USTD |
When I select the "ASTR/USTD" as trading pair 
Then I am able to see the "ASTR/USTD" as selected trading pair
Then I can see "Buy" button on screen
Then I can see "Sell" button on screen
When I click on "Sell" Button
Then I can see available balance for selected trading pair
