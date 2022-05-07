export class FictionPage {
  constructor() {
    this.booksSidebar = '.sidebar-list'
    this.genreBlock = '.shop-content'
    this.productItem = '.preview'
    this.productCounts = [
      3,
      16,
      1,
      3,
      2,
      4
    ]
  }

  verifyGenreCount() {
    cy.get(this.booksSidebar).first()
      .find('a')
      .each(($ProductResult, i) => {
        cy.get($ProductResult).click()
        cy.get(this.genreBlock)
          .find(this.productItem)
          .should('have.length', this.productCounts[i])
      })
  }
}

export const fictionPage = new FictionPage()
