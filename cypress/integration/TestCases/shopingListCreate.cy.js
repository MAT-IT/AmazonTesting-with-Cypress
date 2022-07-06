/// <reference types="cypress" />
import HomePage from "../PageObjectRepository/HomePage"
const homepage = new HomePage
describe("create and delete Shopping List",()=>{
    it("Create Shopping List",()=>{
        cy.goUrl()
        cy.SignIn()
        homepage.getaccountList().trigger("mouseover").wait(5000)
        homepage.getcreateList().click({force: true})
        homepage.getlistTab().should("have.contain","Your List")
        homepage.getcreateButton().click({force: true})
        homepage.getcreateListButton().click({ multiple: true },{force: true})
        homepage.getlistName().should("have.contain","Shopping List ").wait(3000)
        homepage.getmorebutton().trigger("mouseover").wait(4000)
        homepage.getmanagelist().click({force: true})
        homepage.getscroll().scrollIntoView()
        homepage.getdeletebutton().click({force: true})
        homepage.getverfconfirmdelete().should("have.contain","Confirm delete")
        homepage.getconfirmdelete().click({force: true})

    })


})