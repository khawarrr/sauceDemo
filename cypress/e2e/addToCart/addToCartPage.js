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

}


export default new AddToCart();