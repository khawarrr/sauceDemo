Feature: Login Functionality

    User shoudl not be able to login with wrong credentials

    User should be able to log in with the right credentials

    Scenario: Invalid User Login (Incorrect Password)
        Given the user is on the login page
        When the user enters their username "standard_user"
        And the user enters the password "not_secret_sauce"
        When the user clicks the login button
        Then the user should see an error message
        # And should remain on the login page

    Scenario: Validate Login with right credentials
        Given the user is on the login page
        When the user enters their username "standard_user"
        And the user enters the password "secret_sauce"
        When the user clicks the login button
        Then the user should be redirected to the Home page and the user should see products


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