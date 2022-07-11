class signInPage {
    //homepagede getaccountlist olarak var ama farkli isimde onu duzenle bunu buradan sil ve importu duzelt
    hellomenu(){
        return cy.get('#nav-link-accountList')
    }
    //homepage at
    //getsigninlink
    signin(){
        return cy.get('#nav-flyout-ya-signin > .nav-action-button > .nav-action-inner')
        
    }
    //getemailbox
    email(){
        return cy.get('#ap_email')
    }
    
    emailButton(){
        return cy.get('.a-button-inner > #continue')
    }
    //getpasswordbox
    password(){
        return cy.get('#ap_password')
    }
    //getloginsubmitbutton
    submit(){
        return cy.get('#signInSubmit')
    }
    //verifysignin
    validassert(){
        return cy.get('#nav-link-accountList-nav-line-1')
    }
    //getproblemmessage
    invalidassert(){
        return cy.get('.a-alert-heading')
    }
}
export default signInPage