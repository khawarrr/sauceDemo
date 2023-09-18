class AddToCart {
  // checkout code for now

  addToCartButton() {
    cy.get('.inventory_list')          // Find the parent div with class "inventory_list"
    .find('.inventory_item')        // Find all elements with class "inventory_item" inside the parent div
    .first()                        // Select the first element (the first item)
    .then(($item) => {
      // Check if the button contains "add to cart"
      if ($item.find('button').text().includes('Remove')) {
        $item.find('button').click();
        $item.find('button').click();

      } else if ($item.find('button').text().includes('Add to cart')) {
        $item.find('button').click(); 
      }
    });
  }


    isAddedToCart() {
      cy.get('.shopping_cart_badge').scrollIntoView()
      .should('be.visible')
    }

    clickCartIcon() {
      cy.get('.shopping_cart_container').click()
    }

    verifyCart() {
      cy.get('.cart_item').should('be.visible')
    }

    /////////////////////////////////////checkout//////////////////////////////////////

    checkoutButton() {
      cy.get('[data-test="checkout"]').click()
    }

    verifyCheckoutPage() {
      cy.get('.title').contains('Checkout: Your Information').should('be.visible')
      cy.url().should('include', 'checkout-step-one.html');
    }

    enterFirstName(firstName) {
      cy.get('[data-test="firstName"]').type(firstName)
    }

    enterLastName(lastName) {
      cy.get('[data-test="lastName"]').type(lastName)
    }
    
    enterPostalCode(postalCode) {
      cy.get('[data-test="postalCode"]').type(postalCode)
    }

    clickContinueButton() {
      cy.get('[data-test="continue"]').should('be.visible').click()
    }

    verifyOverviewPage() {
      // confirm we are on the overview page
    cy.get('.title').contains('Checkout: Overview').should('be.visible')
    cy.url().should('include', 'checkout-step-two.html');
    }

    clickFinishButton() {
      cy.get('[data-test="finish"]').should('be.visible').click()
    }

    confirmationMessage() {
      // confirming the order has been placed
    cy.get('#checkout_complete_container').contains('Thank you for your order!').should('be.visible');
    cy.url().should('include', 'checkout-complete.html');

    }

    clickBackHomeButton() {
      //take us back to inventory list
      cy.get('[data-test="back-to-products"]').should('be.visible').click()
    }


}


export default new AddToCart();