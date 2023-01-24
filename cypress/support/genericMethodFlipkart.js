export class Flipkart{
    selector = {
        url : 'https://www.flipkart.com/',
        searchBox : "._3704LK",
        elementList : "._3izBDY",
        checkBox : "._2iDkf8.t0pPfW>input",
        productel : "[data-id='MOBFWBYZKYYZUANT']>div>a", 
        productName : ".yhB1nd>span",
        button : "._1p3MFP.dTTu2M>ul>li>button"
    
    }

    NavigateSite(){
        cy.visit(this.selector.url)
    }

    SearchProduct(product){
        cy.get(this.selector.searchBox).type(product)
        cy.get(this.selector.elementList).each(function(el, index){
           // cy.log(el.text()) //8 elements
           if(el.text().includes(product)){
            cy.wrap(el).click()
           }
        })
            
    }

    SelectCheckBox(){
        cy.get(this.selector.checkBox).first().click({force:true})
        cy.get(this.selector.checkBox).should('be.checked')
        

    }

    SelectProduct(){
        cy.get(this.selector.productel).invoke('removeAttr', 'target').click()
        cy.get(this.selector.productName).should('have.text', 'APPLE iPhone 12 (Blue, 256 GB)')
    }

    AddToCart(){
        //cy.get(this.selector.button).click()
        cy.get('._1AtVbE.col-12-12').eq(1).find('button').click({multiple:true})

    }


}