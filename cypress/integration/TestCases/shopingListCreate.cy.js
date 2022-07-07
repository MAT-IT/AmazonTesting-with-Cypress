/// <reference types="cypress" />
import HomePage from "../PageObjectRepository/HomePage"
import ShoppingListPage from "../PageObjectRepository/ShoppingListPAge"
const homepage = new HomePage()
const shoppingListPage = new ShoppingListPage()
describe("create and delete Shopping List",()=>{
    it("Create Shopping List",()=>{
        cy.goUrl()
        cy.SignIn()
        homepage.getaccountList().trigger("mouseover").wait(5000)
        homepage.getcreateListlink().click({force: true})
        shoppingListPage.getlistTab().should("have.contain","Your List")
        shoppingListPage.getcreateAListbutton().click().wait(2000)
        shoppingListPage.getinputlistname().clear().wait(3000)
        shoppingListPage.getinputlistname().type("Grocery List")
        shoppingListPage.getcreateButton().click({force: true})
        shoppingListPage.getlistName().should("have.contain","Grocery List").wait(3000)
        shoppingListPage.getmorebutton().trigger("mouseover").wait(4000)
        shoppingListPage.getmanagelist().click({force: true})
        shoppingListPage.getdeletebutton().click({force: true})
        shoppingListPage.getverfconfirmdelete().should("have.contain","Confirm delete")
        shoppingListPage.getconfirmdelete().click({force: true})

    })


})