/// <reference types="cypress" />

import HomePage from "../PageObjectRepository/HomePage"

describe("Go Amazon",()=>{
    before(function(){
        cy.fixture("Data").then(
            function(data){
                this.data=data
            }
        )
     })
   const homepage = new HomePage()

   it("Go to url",function(){
       cy.visit(this.data.url)
       homepage.getamazonLogo().should("be.visible")
       cy.title().should("contain","Amazon")
       
   })

  
})