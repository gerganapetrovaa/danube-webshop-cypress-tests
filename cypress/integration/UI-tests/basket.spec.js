import { basketPage } from '../../support/page-objects/basketPage'

describe('Basket tests', () => {
    beforeEach(() => {
        cy.SignUpToApp()
    })

    it('Should display correct total amount in basket page', () => {
        basketPage.verifyTotalProductsAmountOnBasket()
    })
})