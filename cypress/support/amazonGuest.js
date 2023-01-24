export class AmazonGuest {
    elements = {
        url : "https://www.amazon.com",
        logo : "#nav-logo-sprites",
        searchButton : "#twotabsearchtextbox",
        productList : ".s-suggestion-container",
        prdt1 : "div[data-asin='B08HMRY8NG']",
        img : ".a-section.aok-relative.s-image-fixed-height >img[class='s-image']",
        watch : ".a-section.a-spacing-none.puis-padding-right-small> h2 >a >span",
        errorMsg : "#deliveryBlockMessage >div >div>span"


    }

    visitSite(){
        cy.visit(this.elements.url)
        cy.get(this.elements.logo).should('be.visible')
    }

    searchProduct(prdtName){
        cy.get(this.elements.searchButton).type(prdtName)
        cy.get(this.elements.productList).each(function(el){
            cy.wrap(el).invoke("text").then(function(res){
                const txt = res.trim()
                if(txt == prdtName){
                    cy.wrap(el).click({force:true})
                }
            })
        })   
    }

    selectProduct(){
        cy.wait(3000)
        cy.get(this.elements.prdt1).scrollIntoView()
        cy.get(this.elements.img).should('be.visible')
        cy.get(this.elements.watch).eq(7).click({force:true})
        cy.get(this.elements.errorMsg).should('contain', "cannot be shipped to your selected delivery location")
    }
}