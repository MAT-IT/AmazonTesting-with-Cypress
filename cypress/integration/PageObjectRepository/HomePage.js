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

}
 export default HomePage