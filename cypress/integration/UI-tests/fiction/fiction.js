import { fictionPage } from '../../../support/page-objects/fictionPage'
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I sign up to the site', () => {
  cy.SignUpToApp()
})

When('I go to the {string} genre', (name) => {
  fictionPage.goToGenre(name)
})

Then('I should see {int} books', (count) => {
  fictionPage.verifyGenreCount(count)
})
