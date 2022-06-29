import Amazonhomepage from "../integration/PageObjectRepository/searchBox"

Cypress.Commands.add("searchProduct",(productName)=>{
    
    const amazonhomepage = new Amazonhomepage()

    amazonhomepage.getsearchbar().click().wait(3000).type(productName)
    .wait(2000)
    amazonhomepage.getsubmitbutton().click().wait(2000)    
    
})