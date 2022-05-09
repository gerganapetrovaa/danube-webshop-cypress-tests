import { basketPage } from "../../../support/page-objects/basketPage";
import { signUpPage } from "../../../support/page-objects/signUpPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I sign up to the site", () => {
  signUpPage.signUpWithRandomUser();
});

When("I add three products to cart", () => {
  basketPage.goToFirstGenre();
  basketPage.addThreeProductsToCart();
});

Then("I should see a total amount of {float}", (amount) => {
  basketPage.verifyTotalProductsAmountOnBasket(amount);
});
