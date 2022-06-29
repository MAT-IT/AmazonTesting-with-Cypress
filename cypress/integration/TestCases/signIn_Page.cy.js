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
       sign.mouseover()
       sign.signin()       
       cy.email(this.data.email)
       sign.emailButton()
       cy.password(this.data.password)
       sign.submit()
       sign.validassert()     
       
       
   })

   it("Go to Sign In InValid data",function(){
    cy.visit(this.data.url)
    sign.mouseover()
    sign.signin()       
    cy.email(this.data.invalidemail)
    sign.emailButton()
    sign.invalidassert()    
    cy.get('#ap_password').type(this.data.invalidpass)
    cy.get('#signInSubmit').click()    
    
    })
})