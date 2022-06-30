/// <reference types="cypress" />
describe("Select All Menu",()=>{
    it("All menu Smart Home",()=>{
        cy.goUrl()
        cy.get('#nav-hamburger-menu').click()
        cy.get('.hmenu-visible > :nth-child(9) > .hmenu-item').click()
        cy.get('ul[data-menu-id="7" ] a[class="hmenu-item"]').should("have.length","16")
    })
})