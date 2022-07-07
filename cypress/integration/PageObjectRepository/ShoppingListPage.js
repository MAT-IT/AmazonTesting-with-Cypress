class ShoppingListPage {

    
    getcreateAListbutton(){
        return cy.get('.a-button-input')
    }
    getlistTab(){
        return cy.get('.a-tabs')
    }
    getcreateButton(){
        return cy.contains("Create List")
    }
    getlistName(){
        return cy.get('#left-nav .wl-list ')
    }
    getmorebutton(){
        return cy.get('#overflow-menu-popover-trigger > :nth-child(2)')
    }
    getmanagelist(){
        return cy.get("#editYourList")
    }
   
    getdeletebutton(){
        return cy.get("div[id='list-settings-container'] span[class='a-button a-spacing-base a-button-base full-width-element']")
    }
    getverfconfirmdelete(){
        return cy.get('#a-popover-header-3')
    }
    getconfirmdelete(){
        return cy.get("#list-delete-confirm").click()
    }
    getinputlistname(){
        return cy.get(".a-declarative #list-name")
    }
    getitemdeletebutton(){
        return cy.contains('Delete')
    }
    getitemdeleteconfirmation(){
        return cy.contains('Deleted')
    }
}
 export default ShoppingListPage