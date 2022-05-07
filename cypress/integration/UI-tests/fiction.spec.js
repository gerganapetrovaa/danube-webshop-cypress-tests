import { fictionPage } from '../../support/page-objects/fictionPage'

describe('Fiction tests', () => {
    beforeEach(() => {
        cy.SignUpToApp()
    })

    it('Should display number of books in each genre', () => {
        fictionPage.verifyGenreCount()
    })
})