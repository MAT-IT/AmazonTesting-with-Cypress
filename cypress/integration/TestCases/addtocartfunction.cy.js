/// <reference types="cypress" />
import productInfoPage from "../PageObjectRepository/productInfoPage"
import searchresultpage from "../PageObjectRepository/searchresultpage"
const search = new searchresultpage()
const productinfo = new productInfoPage()
describe("add items", () => {
  //const sign = new signInPage()
  beforeEach(function () {
    cy.fixture("Data").then(
      function (data) {
        this.data = data
      }
    )
    cy.visit(this.data.url)
  })
  it("add products to basket", function () {
    cy.searchProduct("sony").wait(3000)
    search.productlist().eq(0).then(str => {
      const name1 = str.text()
      cy.wrap(name1).as("name1")
    })
    search.productlist().eq(0).click({ force: true })
    productinfo.productprice().then(function (el) {
      cy.log(el.text())
      const price1 = Number(el.text().replace("$", ""))
      cy.wrap(price1).as("price1")

    })
    productinfo.addchart().click({ force: true })
    cy.go("back")
    search.productlist().eq(1).then(str => {
      const name2 = str.text()
      cy.log(name2)
      cy.wrap(name2).as("name2")
    })
    search.productlist().eq(1).click({ force: true })
    productinfo.productprice().then(function (el) {
      cy.log(el.text())
      const price2 = Number(el.text().replace("$", ""))
      cy.log(this.name2)
      cy.wrap(price2).as("price2")

    })
    productinfo.addchart().click({ force: true })
    productinfo.gotocart().click({force:true})
    productinfo.getcartproductname().eq(0).then(function (e) {
      const cartname1 = e.text().substring(0, 7)
      cy.log(cartname1)
      expect(this.name2).to.contain(cartname1)
    })

    productinfo.getcartproductname().eq(1).then(function (e) {
      const cartname = e.text().substring(0, 7)
      cy.log(cartname)
      expect(this.name1).to.contain(cartname)
    })

    search.subtotal().then(function(e){
      const totalprice = Number(e.text().replace("$", ""))
      cy.log(totalprice)
      expect(this.price1+this.price2).to.equal(totalprice)
    })
  })
})