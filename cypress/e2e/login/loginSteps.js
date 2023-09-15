import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./loginPage";

Given("the user is on the login page", () => {
    LoginPage.visitLoginPage(); // Use the Page Object method
  });
  
  When("the user enters their valid username {string} and valid password {string}", (username, password) => {
    LoginPage.enterUsername(username); // Use the Page Object method
    LoginPage.enterPassword(password); // Use the Page Object method
  });
  
  And("the user clicks the login button", () => {
    LoginPage.clickLoginButton(); // Use the Page Object method
  });
  
  Then("the user should be redirected to the Home page", () => {
    LoginPage.isLoggedIn(); // Use the Page Object method for verification
  });
  
  And("the user should see products", () => {
    // You can add verification steps for products if needed
  });