import searchBox from "../integration/PageObjectRepository/searchBox"

Cypress.Commands.add("goUrl",()=>{
  
     cy.visit("https://www.amazon.com/")
   
    })

Cypress.Commands.add("searchBox",(input)=>{
    const search = new searchBox()
    search.getsearchbar().type(input)
    search.getsubmitbutton().click()
})    