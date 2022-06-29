/// <reference types="cypress" />
describe("Go Amazon",()=>{
    before(function(){
        cy.fixture("homepage").then(
            function(data){
                this.data=data
            }
        )
     })
   

   it("Go to url",function(){
       cy.visit(this.data.url)
       cy.get('#nav-logo-sprites').should("be.visible")
       cy.title().should("contain","Amazon")
       
   })

  
})