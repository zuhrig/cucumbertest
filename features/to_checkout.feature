Feature: As a User I want to select products and proceed to checkout


Scenario: Flow to checkout with P-F
  Given I am on the preselected_flight results page
  And I navigate to Preselected flight detail page
  And I navigate to Preselected flight upselling page
  When I click on the upselling buy button
  Then I should navigate to checkout
