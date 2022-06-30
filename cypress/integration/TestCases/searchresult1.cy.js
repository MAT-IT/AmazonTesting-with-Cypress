describe("search items",()=>{
    it("search lenovo",()=>{
        cy.goUrl().wait(3000)
        cy.searchBox("lenovo").wait(3000)
        cy.get("[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']").wait(5000)
        .should("contain.text","e")
        
    })
})