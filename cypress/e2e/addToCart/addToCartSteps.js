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

And("the cart has one item added inside it", ()=> {
    AddToCart.verifyCart()

})

