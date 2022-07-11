import HomePage from "../integration/PageObjectRepository/HomePage"
import signInPage from "../integration/PageObjectRepository/signInPAge"
Cypress.on('uncaught:exception', (err, runnable) => { //with this we can handle uncaught:exception in cypress
  return false;                                      //commands.js file'a alinabilir
});
const search = new HomePage()
const sign = new signInPage()
beforeEach(function(){        
  cy.fixture("homepage").then(
      function(data){
          this.data=data
      }            
  )
})

Cypress.Commands.add("goUrl", () => {
  cy.visit(this.data.url)
})

Cypress.Commands.add("searchProduct", (input) => {
  search.getsearchbar().click().wait(3000).type(input)
  search.getsubmitbutton().click()
})

Cypress.Commands.add("SignIn", function () {
  sign.hellomenu().trigger("mouseover")
  sign.signin().click({force: true})
  sign.email().type(this.data.email)
  sign.emailButton().click()
  sign.password().type(this.data.password)
  sign.submit().click()
  
})
