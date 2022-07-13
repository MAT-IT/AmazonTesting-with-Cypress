import searchresultpage from "../PageObjectRepository/searchresultpage"

describe("search items",()=>{
    const searchresult = new searchresultpage()
    it("sort by brand",()=>{
        cy.goUrl().wait(3000)
        cy.searchProduct("Headphones").wait(3000)
        searchresult.getbrandsony().click({force: true})
        searchresult.productlist()
         .then(function(item) { 
            const  itemCount = Cypress.$(item).length;
             cy.log(itemCount)
             for(var i=0; i<itemCount; i++){
                
                searchresult.productlist().eq(i)
                 .should(productText => expect(productText.text().toLowerCase()).to.contain('sony'));
                
             }
        })
        
        
    })
})