import { faker } from "@faker-js/faker";

export class SignUpPage {
  constructor() {
    this.randomFirstName = faker.name.firstName();
    this.randomLastName = faker.name.lastName();
    this.randomEmail = faker.internet.email();
    this.randomPassword = faker.internet.password();
  }
  signUpWithRandomUser() {
    cy.visit("/");
    cy.get("#signup").click();
    cy.get("#s-name").type(this.randomFirstName);
    cy.get("#s-surname").type(this.randomLastName);
    cy.get("#s-email").type(this.randomEmail);
    cy.get("#s-password2").type(this.randomPassword);
    cy.get("#myself").check();
    cy.get("#privacy-policy").check();
    cy.get("#register-btn").click();
    cy.get("#login-message").should("exist");
  }
}

export const signUpPage = new SignUpPage();
