/// <reference types="cypress" />
import HomePage from "../PageObjectRepository/HomePage"
import ShoppingListPage from "../PageObjectRepository/ShoppingListPAge"
const homepage = new HomePage()
const shoppingListPage = new ShoppingListPage()
describe("create and delete Shopping List",()=>{
    it("Create Shopping List",()=>{
        cy.goUrl()
        cy.SignIn()
        homepage.gethellomenu().trigger("mouseover").wait(5000)
        homepage.getcreateshoppinglistlink().click({force: true})
        shoppingListPage.getyourlistTab().should("have.contain","Your List")
        shoppingListPage.getcreateshoppingalistbuttom().click().wait(2000)
        shoppingListPage.getcreateshoppinglistnamebox().clear().wait(3000)
        shoppingListPage.getcreateshoppinglistnamebox().type("Grocery List")
        shoppingListPage.getcreatelistbutton().click({force: true})
        shoppingListPage.getmorebutton().trigger("mouseover").wait(4000)
        shoppingListPage.getmanagelist().click({force: true})
        shoppingListPage.getdeleteshoppinglistbutton().click({force: true})
        shoppingListPage.getshoppinglistdeletepopupconfirmation().should("have.contain","Confirm delete")
        shoppingListPage.getconfirmdelete().click({force: true})

    })


})