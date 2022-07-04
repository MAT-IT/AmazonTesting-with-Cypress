/// <reference types="cypress" />

import HomePage from "../PageObjectRepository/HomePage"

describe("testing bottom links",()=>{
    const homepage = new HomePage()
    it("bottom links test verify",()=>{
        cy.visit("https://www.amazon.com/")
        homepage
        .getButtomAdvertisingLink().then(function(e){
            const advtext = e.text().substring(7,18).toLowerCase()
            cy.log(advtext)
       homepage
       .getButtomAdvertisingLink().click()
        cy.url().should("contain",advtext)

        })     
              

        
    })

    


})