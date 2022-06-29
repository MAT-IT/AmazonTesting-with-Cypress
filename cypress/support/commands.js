import signInPage from "../integration/PageObjectRepository/signInPAge"

const sign = new signInPage()
Cypress.Commands.add("email", (email) => {

    sign.email().type(email)

})
Cypress.Commands.add("password", (password) => {
    
    sign.password().type(password)

})