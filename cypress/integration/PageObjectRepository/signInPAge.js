class signInPage {

    mouseover(){
        return cy.get('#nav-link-accountList').trigger("mouseover")
    }
    
    signin(){
        return cy.get('#nav-flyout-ya-signin > .nav-action-button > .nav-action-inner').click({force: true})
        
    }

    email(){
        return cy.get('#ap_email')
    }

    emailButton(){
        return cy.get('.a-button-inner > #continue').click()
    }

    password(){
        return cy.get('#ap_password')
    }

    submit(){
        return cy.get('#signInSubmit').click()
    }

    validassert(){
        return cy.get('#nav-link-accountList-nav-line-1').contains("mat") 
    }

    invalidassert(){
        return cy.get('#auth-error-message-box > .a-box-inner').contains("There was a problem")
        .get('.a-alert-heading').should("have.text","There was a problem")
    }
}
export default signInPage