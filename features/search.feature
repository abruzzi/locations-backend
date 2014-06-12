Feature: Search locations
    As a consumer
    I want to do search on liked locations site
    So I can find some interesting places

    Scenario: Search for a location
        Given I am on the home page
        When I type "Melbourne" in search box
        And I click search button
        Then there are 4 locations show up

    Scenario: Like an item
        Given I am on the home page
        When I type "Melbourne" in search box
        And I click search button
        Then there are 4 locations show up
        When I liked the "1st" location
        Then I should see it in liked locations

