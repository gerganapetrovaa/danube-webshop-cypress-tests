import { faker } from '@faker-js/faker';


Cypress.Commands.add('SignUpToApp', () => {
    const randomFirstName = faker.name.firstName()
    const randomLastName = faker.name.lastName()
    const randomEmail = faker.internet.email()
    const randomPassword = faker.internet.password()

    cy.visit('/')
    cy.get('#signup').click()
    cy.get('#s-name').type(randomFirstName)
    cy.get('#s-surname').type(randomLastName)
    cy.get('#s-email').type(randomEmail)
    cy.get('#s-password2').type(randomPassword)
    cy.get('#myself').check()
    cy.get('#privacy-policy').check()
    cy.get('#register-btn').click()
    cy.get('#login-message').should('exist')
})