/// <reference types="cypress" />
 
import HomePage from "../PageObjectRepository/HomePage"
import signInPage from "../PageObjectRepository/signInPAge"

const sign = new signInPage()
const homepage =new HomePage()

describe("Sign In Page",()=>{
    beforeEach(function(){        
        cy.fixture("Data").then(
            function(data){
                this.data=data
            }            
        )
        cy.visit(this.data.url)
        homepage.hellomenu().trigger("mouseover")
        homepage.signin().click({force: true})   
   })     
    
   it("Go to Sign In Valid data",function(){   
       sign.getemailbox().type(this.data.email)
       sign.emailButton().click()
       sign.getpasswordbox().type(this.data.password)
       sign.getloginsubmitbutton().click()
       sign.verifysignin().should("contain.text","mat")      
       
       
   })

   it("Go to Sign In InValid data",function(){  
    sign.getemailbox().type(this.data.invalidemail)
    sign.emailButton().click()
    sign.getproblemmessage().should("have.text","There was a problem")    
     
    
    })
})