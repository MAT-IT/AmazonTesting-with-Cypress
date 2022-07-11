//filterfuction olarak degistir
//locatleri pom dan al

describe("search items",()=>{
    
    it("sort by brand",()=>{
        cy.goUrl().wait(3000)
        cy.searchProduct("Headphones").wait(3000)
        cy.get("li[id='p_89/Sony'] input[type='checkbox']").click({force: true})
        cy.get("[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']")
         .then(function(item) { 
            const  itemCount = Cypress.$(item).length;
             cy.log(itemCount)
             for(var i=0; i<itemCount; i++){
                
                 cy.get("[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']").eq(i)
                 .should(productText => expect(productText.text().toLowerCase()).to.contain('sony'));
                
             }
        })
        
        
    })
})