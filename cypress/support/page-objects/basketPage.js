import { fictionPage } from "../../support/page-objects/fictionPage";

export class BasketPage {
  constructor() {
    this.booksSidebar = ".sidebar-list";
    this.productDetailBlock = ".detail-wrapper";
    this.addToCartButton = ".call-to-action";
    this.cartIcon = "#cart";
    this.totalPrice = "#total-price";
    this.productInCart = "#app-content > div > div > ul > li:nth-child(1)";
  }

  goToFirstGenre() {
    cy.get(this.booksSidebar).first().find("a").first().click();
    cy.get(fictionPage.genreBlock)
      .find(fictionPage.productItem)
      .first()
      .click();
  }

  addThreeProductsToCart() {
    for (let i = 0; i < 3; i++) {
      cy.get(this.productDetailBlock).find(this.addToCartButton).click();
      cy.go("back");
    }
  }
  goToCart() {
    cy.get(this.cartIcon).click();
  }

  verifyTotalProductsAmountOnBasket(amount) {
    cy.url().should("eq", "https://danube-webshop.herokuapp.com/cart");
    cy.get(this.totalPrice).invoke("text").should("eq", amount.toString());
  }

  verifySumOfAllProducts(amount) {
    cy.get(this.productInCart)
      .invoke("text")
      .then((text) => parseFloat(text.split("$")[1] * 3).toFixed(2))
      .should("eq", amount.toString());
  }
}

export const basketPage = new BasketPage();
