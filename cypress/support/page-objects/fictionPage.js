export class FictionPage {
  constructor() {
    this.genreBlock = '.shop-content'
    this.productItem = '.preview'
  }

  goToGenre(name) {
    cy.contains(name).click()
  }

  verifyGenreCount(count) {
    cy.get(this.genreBlock)
      .find(this.productItem)
      .should('have.length', count)
  }

}

export const fictionPage = new FictionPage()
