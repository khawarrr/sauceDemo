const URL = 'https://www.saucedemo.com/'
const USERNAME_INPUT = '[data-test="username"]'
const PASSWORD_INPUT = '[data-test="password"]'
const SUBMIT_BUTTON = '[data-test="login-button"]'


class LoginPage {
    visitLoginPage() {
      cy.visit(URL);
    }
  
    enterUsername(username) {
      cy.get(USERNAME_INPUT).type(username);
    }
  
    enterPassword(password) {
      cy.get(PASSWORD_INPUT).type(password);
    }
  
    clickLoginButton() {
      cy.get(SUBMIT_BUTTON).click();
    }
  
    isLoggedIn() {
      // You can add assertions or checks here to verify if the user is logged in.
      // For example, checking for elements on the home page.
      cy.contains('Swag Labs').should('be.visible');
      cy.url().should('include', 'inventory.html');
    }
  }
  
  export default new LoginPage();
  