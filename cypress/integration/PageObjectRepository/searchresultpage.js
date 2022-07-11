class searchresultpage {
    productlist(){
        return cy.get("div[class='sg-col sg-col-4-of-12 sg-col-8-of-16 sg-col-12-of-20 s-list-col-right'] span[class='a-size-medium a-color-base a-text-normal']")
        
    }
    productlist2(){
        return cy.get("h2 a span[class='a-size-base-plus a-color-base a-text-normal']")
    }
    //productinfopage e aktar ve importunu duzenle
    addchart(){
    return cy.get('#add-to-cart-button')
    }

    addassert(){
        return cy.get('.a-size-medium-plus')
    }

    productprice(){
        return cy.get('#corePrice_feature_div .a-offscreen')
    }
    gotocart(){
        return cy.get('#sw-gtc .a-button-text')

    }

    gocartproduct(){
        return   cy.get("span[class='a-truncate a-size-medium'] span[class='a-truncate-full a-offscreen']")
    }
    
    subtotal(){
        return cy.get("#sc-subtotal-amount-buybox span")

    }
    //
    addtolistmenu(){
        return cy.get('#add-to-wishlist-button-submit')
    }
}
export default searchresultpage