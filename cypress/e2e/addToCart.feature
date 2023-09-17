Feature: Checkout Validation

    log in before running the test

    Feature Description

    Scenario: Log in
        Given the user is on the login page
        When the user enters their username "standard_user"
        And the user enters the password "secret_sauce"
        When the user clicks the login button


    Scenario: User can add a product to cart
        Given the user should be redirected to the Home page and the user should see products
        When the user clicks on add to cart for a product
        Then the user can see cart having 1 icon on it
        Then the user clicks on cart
        And the cart has one item added inside it
        