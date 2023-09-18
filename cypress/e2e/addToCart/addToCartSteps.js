import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import AddToCart from "./addToCartPage"


When("the user clicks on add to cart for a product", ()=> {
    AddToCart.addToCartButton()
})


Then("the user can see cart having 1 icon on it", ()=> {
    AddToCart.isAddedToCart()

})

Then("the user clicks on cart", ()=> {
    AddToCart.clickCartIcon()

})

And("the cart has an item added inside it", ()=> {
    AddToCart.verifyCart()

})


//checkout
Given("the user clicks on the Checkout button", ()=> {
    AddToCart.checkoutButton()

})

Then("the user is on the Checkout page", ()=> {
    AddToCart.verifyCheckoutPage()

})

When("the user enters their first name as {string}", (firstName)=> {
    AddToCart.enterFirstName(firstName)
})

And("the user enters their last name as {string}", (lastName)=> {
    AddToCart.enterLastName(lastName)
})

And("the user enters their postal code as {string}", (postalCode)=> {
    AddToCart.enterPostalCode(postalCode)
}
)
And("the user clicks on the Continue button", ()=> {
    AddToCart.clickContinueButton()
})

Then("the user is on the Checkout Overview page", ()=> {
    AddToCart.verifyOverviewPage()
})

And("the user clicks on the Finish button", ()=> {
    AddToCart.clickFinishButton()
})

And("the user receives a confirmation message", ()=> {
    AddToCart.confirmationMessage()
})

And("the user clicks on the Back Home button", ()=> {
    AddToCart.clickBackHomeButton()
})