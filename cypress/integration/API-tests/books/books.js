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

Then("I should see a total of {int} books with one star rating", (count) => {
  cy.get("@getBooks").should((response) => {
    expect(response.body.filter((x) => x.rating === "★☆☆☆☆").length).to.eql(
      count
    );
  });

  Then(
    "I should see a total of {int} books with one and two star rating",
    (count) => {
      cy.get("@getBooks").should((response) => {
        expect(
          response.body.filter((x) => ["★☆☆☆☆", "★★☆☆☆"].includes(x.rating))
            .length
        ).to.eql(count);
      });
    }
  );
});
