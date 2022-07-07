class HomePage {

    getsearchbar(){
        return cy.get('#twotabsearchtextbox')
    }

    getsubmitbutton(){
        return cy.get('#nav-search-submit-button')
    }

    getAllMenu(){
        return cy.get("div[class='nav-left'] a[id='nav-hamburger-menu']")
    }

    getSmarthome(){
        return cy.get('.hmenu-visible > :nth-child(9) > .hmenu-item')
    }

    getAllSmartHomeDep(){
        return cy.get('ul[data-menu-id="7" ] a[class="hmenu-item"]')
    }

    getButtomAdvertisingLink(){
        return cy.get('tbody > :nth-child(1) > :nth-child(3) > .nav_a')
    }

    getButtomBusinessLink(){
        return cy.get(':nth-child(3) > :nth-child(3) > .nav_a')
    }

    getButtonBoxOfficeLink(){
        return cy.get(':nth-child(5) > :nth-child(3) > .nav_a')
    }
    getaccountList(){
        return cy.get('#nav-link-accountList')
    }
    getcreateListlink(){
        return cy.get('[href="/hz/wishlist/ls?triggerElementID=createList&ref_=nav_ListFlyout_navFlyout_createList_lv_redirect"] > .nav-text')
    }
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
}
 export default HomePage