import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given("the user is on the login page", () => {
    cy.visit('https://www.saucedemo.com/')
  })

When("the user enters their valid username {string} and valid password {string}", (username, password)=>{
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)

})
And("the user clicks the login button", ()=>{
    cy.get('[data-test="login-button"]').click()

})

Then("the user should be redirected to the Home page", ()=>{
    // cy.contains('Swag Labs').should('be.visible');
    cy.url().should('include', 'inventory.html')

})

And("the user should see products", ()=>{
    // cy.contains('Swag Labs').should('be.visible');
    cy.get('#inventory_container').should('be.visible');

})



