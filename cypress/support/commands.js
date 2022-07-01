import HomePage from "../integration/PageObjectRepository/HomePage"
import signInPage from "../integration/PageObjectRepository/signInPAge"
Cypress.on('uncaught:exception', (err, runnable) => { //with this we can handle uncaught:exception in cypress
  return false;                                      //commands.js file'a alinabilir
});

Cypress.Commands.add("goUrl", () => {

  cy.visit("https://www.amazon.com/")

})

Cypress.Commands.add("searchProduct", (input) => {
  const search = new HomePage()
  search.getsearchbar().click().wait(3000).type(input)
  search.getsubmitbutton().click()
})

const sign = new signInPage()
beforeEach(function () {
  cy.fixture("homepage").then(
    function (data) {
      this.data = data
    }
  )
  cy.visit("https://www.amazon.com/")
  sign.hellomenu().trigger("mouseover")
  sign.signin().click({ force: true })
})


Cypress.Commands.add("SignIn", function () {
  
  
  sign.email().type(this.data.email)
  sign.emailButton().click()
  sign.password().type(this.data.password)
  sign.submit().click()
  sign.validassert().should("contain.text", "mat")


})
