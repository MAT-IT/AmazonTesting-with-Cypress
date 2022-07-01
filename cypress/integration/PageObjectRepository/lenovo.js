class lenovo {
    product1(){
        return cy.get('[data-asin="B0B4KT5G3D"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image')
    }
produck1addchart(){
    return cy.get('#add-to-cart-button')
}

}
export default lenovo