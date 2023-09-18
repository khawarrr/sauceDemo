Feature: Checkout Functionality 

    log in before running the test

    user should be able to checkout from the cart and then enter valid info

    Scenario: Log in
        Given the user is on the login page
        When the user enters their username "standard_user"
        And the user enters the password "secret_sauce"
        When the user clicks the login button

    Scenario: Verify user can add a product to cart
        Given the user should be redirected to the Home page and the user should see products
        When the user clicks on add to cart for a product
        Then the user can see cart having 1 icon on it
        Then the user clicks on cart
        And the cart has an item added inside it


    Scenario: User can successfully checkout
        Given the user should be redirected to the Home page and the user should see products
        When the user clicks on add to cart for a product
        Then the user can see cart having 1 icon on it
        Then the user clicks on cart
        And the cart has one item added inside it