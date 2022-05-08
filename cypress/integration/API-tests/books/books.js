import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I get all books", () => {
  cy.request({
    url: "api/books",
    headers: {
      accept: "application/json",
    },
  }).as("getBooks");
});

Then("I should see a total of {int} books", (count) => {
  cy.get("@getBooks").should((response) => {
    expect(response.body.length).to.eql(count);
  });
});
