describe("search items",()=>{
    it("search lenovo",function(){
        cy.goUrl().wait(3000)
        cy.searchProduct("lenovo").wait(3000)
        cy.get("[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']")
        .eq(0).should('contain.text',"Lenovo") //assert first element contains text

        
         cy.get("[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']")
         .then(function(item) { 
            const  itemCount = Cypress.$(item).length;
             cy.log(itemCount)
             for(var i=0; i<itemCount; i++){
                 cy.get("[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']")
                 .eq(i).should('contain.text',"Lenovo")
                
             }
        })
    
        
    })
})