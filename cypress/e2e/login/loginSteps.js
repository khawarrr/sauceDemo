import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./loginPage";

// Given("the user is on the login page", () => {
//     LoginPage.visitLoginPage(); // Use the Page Object method
// });

// When("the user enters their username {string}", (username) => {
//     LoginPage.enterUsername(username); // Use the Page Object method
// });

// And("the user enters the password {string}", (password) => {
//     LoginPage.enterPassword(password); // Use the Page Object method
// });

// Then("the user clicks the login button", () => {
//     LoginPage.clickLoginButton(); // Use the Page Object method
// });

// Then("the user should be redirected to the Home page and the user should see products", () => {
//     LoginPage.isLoggedIn(); // Use the Page Object method for verification
// });

Then("the user should see an error message", () => {
    LoginPage.getErrorMessage(); // error message
});

