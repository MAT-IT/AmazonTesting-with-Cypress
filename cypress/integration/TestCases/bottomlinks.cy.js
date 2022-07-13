/// <reference types="cypress" />

import HomePage from "../PageObjectRepository/HomePage"

describe("testing bottom links", () => {
    const homepage = new HomePage()

    beforeEach(() => {
        cy.visit("https://www.amazon.com/")
    })

    it("advert links test verify", () => {

        homepage
            .getButtomAdvertisingLink().then(function (e) {
                const advtext = e.text().substring(7, 18).toLowerCase()
                cy.log(advtext)
                homepage
                    .getButtomAdvertisingLink().click()
                cy.url().should("contain", advtext)

            })

    })

    it("business links test verify", () => {

        homepage
            .getButtomBusinessLink().then(function (e) {
                const bustext = e.text().substring(7, 15)
                cy.log(bustext)
                homepage
                    .getButtomBusinessLink().click()
                cy.title().should("contain", bustext)

            })

    })

    it("box office links test verify", () => {

        homepage
            .getButtonBoxOfficeLink().then(function (e) {
                const bustext = e.text().substring(7, 15)
                cy.log(bustext)
                homepage
                    .getButtonBoxOfficeLink().click()
                cy.title().should("contain", bustext)

            })

    })



})