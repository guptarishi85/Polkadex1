Feature: Exchange Page_Verify_user_able_to_notify_with_a_warning_message_on_Sell_page
 
 As a user 
 I want to test
 Polkadex Exchange Page_orderbook

Scenario:Verify_user_able_to_notify_with_a_warning_message_on_Sell_page
Given I am on the Exchange Page screen
Then I am able to see "DOT/USTD" as selected trading pair
Then I can see "Buy" button on screen
Then I can see "Sell" button on screen
When I click on "Sell" Button
Then I can see available balance for selected trading pair
When I entered "0.1" in price field under Buy/Sell Section
And I entered "13" in amount field under Buy/Sell Section 
Then I can see warning message as "Balance not enough"
