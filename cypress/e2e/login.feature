Feature: Login Functionality

    User should be able to log in with the right credentials

    Scenario: Validate Login with right credentials
        Given the user is on the login page
        When the user enters their valid username "standard_user"
        And the user enters valid password "secret_sauce"
        When the user clicks the login button
        Then the user should be redirected to the Home page and the user should see products

    Scenario: Invalid User Login (Incorrect Password)
        Given the user is on the login page
        # When the user enters their valid username "standard_user" and invalid password "not_secret_sauce"
        # And clicks the login button
        # Then the user should see an error message
        # And should remain on the login page

#   Scenario: Invalid User Login (Incorrect Username)
#     Given the user is on the login page
#     When the user enters an invalid username "nonexistentuser" and valid password "password123"
#     And clicks the login button
#     Then the user should see an error message "Invalid username or password"
#     And should remain on the login page

#   Scenario: Empty User Login Fields
#     Given the user is on the login page
#     When the user leaves both the username and password fields empty
#     And clicks the login button
#     Then the user should see an error message "Username and password are required"
#     And should remain on the login page