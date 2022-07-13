/// <reference types="cypress" />

import HomePage from "../PageObjectRepository/HomePage"

describe("Select All Menu",()=>{
//     beforeEach(function(){        
//         cy.fixture("smarthomedata").then(
//             function(data){
//                 this.data=data
//             }            
//         )           
//    })
    const AllMenu = new HomePage()
    it("All menu Smart Home",()=>{
        cy.goUrl()
        AllMenu.getAllMenu().click()
        AllMenu.getSmarthomelink().click()
        AllMenu.getSmartHomesubCategories().should("have.length","16")
        
    })
    it.skip("Verifying smarthomedep",function(){
        //verify that Amazon Smart Home and Smart Home Lighting are sub catogories of smarthome
        cy.goUrl()
        AllMenu.getAllMenu().click()
        AllMenu.getSmarthomelink().click()
        for(let i=0; i<this.data.arr.length;i++){
        cy.contains(this.data.arr[i]).should("be.visible")
        cy.log("goruyormusun")        
        }      

    })
})