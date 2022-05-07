Feature: Basket's total amount
    I want to see the total amount on cart page

    Scenario: Verifying the total amount on basket page

        Given I sign up to the site
        When I add three products to cart
        Then I should see a total amount of 29.85
