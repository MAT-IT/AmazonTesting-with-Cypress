import lenovo from "../PageObjectRepository/lenovo"

const search = new lenovo
describe("add items",()=>{
    it("add products to basket",function(){
      
       cy.SignIn().wait(3000)
       cy.searchProduct("lenovo").wait(3000)  
       search.product1().wait(3000).click()
       search.produck1addchart().click()

        
       
        
    })
})