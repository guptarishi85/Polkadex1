Feature: Exchange Page_Verify_the_User_is_Able_to_view_the_list_of_trading_pairs_that_the_user
_set_as_favorite
 
 As a user 

Scenario:Verify the user is able to view the available trading pair
Given I am on the Exchange Page screen
Then I am able to see "DOT/USTD" as selected trading pair
When I click on arrow button 
Then I click on favourite button for "ASTR/USTD" trading pair 
Then I click on favourite Icon near search bar
Then I can see trading pairs are listed under favourite icon


