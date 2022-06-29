/// <reference types="cypress" />

import signInPage from "../PageObjectRepository/signInPAge"

describe("Sign In Page",()=>{
    beforeEach(function(){        
        cy.fixture("homepage").then(
            function(data){
                this.data=data
            }
        )
     })

     const sign = new signInPage()
    
   it("Go to Sign In Valid data",function(){
       cy.visit(this.data.url)
       sign.mouseover().trigger("mouseover")
       sign.signin().click({force: true})       
       sign.email().type(this.data.email)
       sign.emailButton().click()
       sign.password().type(this.data.password)
       sign.submit().click()
       cy.get('#nav-link-accountList-nav-line-1').contains("mat")      
       
       
   })

   it.skip("Go to Sign In InValid data",function(){
    cy.visit(this.data.url)
    cy.get('#nav-link-accountList').trigger("mouseover")
    cy.get('#nav-flyout-ya-signin > .nav-action-button > .nav-action-inner').click({force: true})
    cy.get('#ap_email').type(this.data.invalidemail)
    cy.get('.a-button-inner > #continue').click()
    cy.get('#auth-error-message-box > .a-box-inner').contains("There was a problem")
    cy.get('.a-alert-heading').should("have.text","There was a problem")
    cy.get('#ap_password').type(this.data.invalidpass)
    cy.get('#signInSubmit').click()
    
    
    
})


   
  
})