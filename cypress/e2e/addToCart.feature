Feature: Add to Cart

    log in before running the test

    User should be able to add a product to the cart and then verify that the product has been added

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
        

    Scenario: User can successfully checkout the cart
        Given the user clicks on the Checkout button
        Then the user is on the Checkout page
        When the user enters their first name as "Khawar"
        And the user enters their last name as "Khan"
        And the user enters their postal code as "90034"
        And the user clicks on the Continue button
        Then the user is on the Checkout Overview page
        And the user clicks on the Finish button
        And the user receives a confirmation message
        And the user clicks on the Back Home button