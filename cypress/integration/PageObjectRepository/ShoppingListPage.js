class ShoppingListPage {

    //createshoppingalistbuttom
    getcreateAListbutton(){
        return cy.get('.a-button-input')
    }
    //????????
    getlistTab(){
        return cy.get('.a-tabs')
    }
    //yukardaki buttonla check et hangisi kullaniliyor.gereksiz olani silll
    getcreateButton(){
        return cy.contains("Create List")
    }
    //createshoppinglistnamebox
    getlistName(){
        return cy.get('#left-nav .wl-list ')
    }

    getmorebutton(){
        return cy.get('#overflow-menu-popover-trigger > :nth-child(2)')
    }

    getmanagelist(){
        return cy.get("#editYourList")
    }
   //deleteshoppinglistbutton
    getdeletebutton(){
        return cy.get("div[id='list-settings-container'] span[class='a-button a-spacing-base a-button-base full-width-element']")
    }
    //shoppinglistdeletepopupconfirmation
    getverfconfirmdelete(){
        return cy.get('#a-popover-header-3')
    }
    //click i anasayfaya al
    getconfirmdelete(){
        return cy.get("#list-delete-confirm").click()
    }

    getitemdeletebutton(){
        return cy.contains('Delete')
    }
    
    getitemdeleteconfirmation(){
        return cy.contains('Deleted')
    }
}
 export default ShoppingListPage