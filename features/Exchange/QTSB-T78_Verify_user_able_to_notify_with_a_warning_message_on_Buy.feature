Feature: Exchange Page_Verify_user_able_to_notify_with_a_warning_message_on_Buy_page
 
 As a user 
 I want to test
 Polkadex Exchange Page

Scenario:Verify_user_able_to_notify_with_a_warning_message_on_Buy_page
Given I am on the Exchange Page screen
Then I am able to see "DOT/USTD" as selected trading pair
Then I can see "Buy" button on screen
When I entered "0.1" in price field under Buy/Sell Section
And I entered "13" in amount field under Buy/Sell Section 
Then I can see warning message as "Balance not enough"
