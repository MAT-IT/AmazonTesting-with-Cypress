/// <reference types="cypress" />

import signInPage from "../PageObjectRepository/signInPAge"

describe("Sign In Page",()=>{
    beforeEach(function(){        
        cy.fixture("homepage").then(
            function(data){
                this.data=data
            }            
        )
        cy.visit("https://www.amazon.com/")
        sign.hellomenu().trigger("mouseover")
        sign.signin().click({force: true})   
   })

    //  beforeEach(function(){
    //     cy.visit(this.data.url)
    //     sign.hellomenu().trigger("mouseover")
    //     sign.signin().click({force: true})  
    //  })

     const sign = new signInPage()
    
   it("Go to Sign In Valid data",function(){   
       sign.email().type(this.data.email)
       sign.emailButton().click()
       sign.password().type(this.data.password)
       sign.submit().click()
       sign.validassert().should("contain.text","mat")      
       
       
   })

   it("Go to Sign In InValid data",function(){  
    sign.email().type(this.data.invalidemail)
    sign.emailButton().click()
    sign.invalidassert().should("have.text","There was a problem")    
     
    
    })
})