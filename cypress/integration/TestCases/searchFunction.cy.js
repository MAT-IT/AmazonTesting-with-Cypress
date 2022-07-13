import searchresultpage from "../PageObjectRepository/searchresultpage"

describe("search items", () => {
    const searchresult = new searchresultpage()
    it("search lenovo", function () {
        cy.goUrl().wait(3000)
        cy.searchProduct("lenovo").wait(3000)
        searchresult.productlist().eq(0).should('contain.text', "Lenovo")

        searchresult.productlist()
            .then(function (item) {
                const itemCount = Cypress.$(item).length;
                cy.log(itemCount)
                for (var i = 0; i < itemCount; i++) {
                    searchresult.productlist()
                        .eq(i).should('contain.text', "Lenovo")

                }
            })


    })
})