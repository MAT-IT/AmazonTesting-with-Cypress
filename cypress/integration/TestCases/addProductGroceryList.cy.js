/// <reference types="cypress" />
//test casein ismini addproductshoppinglist olarak degistir

import HomePage from "../PageObjectRepository/HomePage"
import searchresultpage from "../PageObjectRepository/searchresultpage"
import ShoppingListPage from "../PageObjectRepository/ShoppingListPAge"
const homepage = new HomePage()
const shoppingListPage = new ShoppingListPage()
const searchResultpage = new searchresultpage()
describe("Add product to Grocery List",()=>{
    it("Add Product to Grocery List",()=>{
        cy.goUrl()
        cy.SignIn()
        // homepage.getaccountList().trigger("mouseover").wait(5000)
        // homepage.getcreateListlink().click({force: true})
        // shoppingListPage.getcreateAListbutton().click().wait(2000)
        // shoppingListPage.getlistName().clear().wait(3000)
        // shoppingListPage.getlistName().type("Grocery List")
        // shoppingListPage.getcreateButton().click({force: true})
        cy.searchProduct("honey")
        //searchResultpage.productlist().eq(0).click()
        searchResultpage.productlist2().eq(0).click()
        searchResultpage.addtolistmenu().click()
        cy.contains("Grocery List").click()
        shoppingListPage.getitemdeletebutton().click({force: true})
        shoppingListPage.getitemdeleteconfirmation().should("be.visible")

      

    })


})