import { basketPage } from '../../../support/page-objects/basketPage'
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I sign up to the site', () => {
  cy.SignUpToApp()
})

When('I add three products to cart', () => {
  basketPage.goToFirstGenre()
  basketPage.addThreeProductsToCart()
})

Then('I should see a total amount of {float}', (amount) => {
  basketPage.verifyTotalProductsAmountOnBasket(amount)
})
