import { fictionPage } from "../../support/page-objects/fictionPage";

export class BasketPage {
  constructor() {
    this.booksSidebar = ".sidebar-list";
    this.productDetailBlock = ".detail-wrapper";
    this.addToCartButton = ".call-to-action";
    this.cartIcon = "#cart";
    this.totalPrice = "#total-price";
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

  verifyTotalProductsAmountOnBasket(amount) {
    cy.get(this.cartIcon).click();
    cy.url().should("eq", "https://danube-webshop.herokuapp.com/cart");
    cy.get(this.totalPrice).invoke("text").should("eq", amount.toString());
  }
}

export const basketPage = new BasketPage();
