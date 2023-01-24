export class genericMethod_amz {
  elements = {
    searchBox: '#twotabsearchtextbox',
    dropDnList: '[class="autocomplete-results-container"]',
    SelectPrdt: '.s-suggestion',
    checkBox : '[id ="p_89/Samsung"]',
    Product : '.a-size-mini.a-spacing-none a span',
    ProductDub : '.a-size-mini.a-spacing-none a',
    AddToCartButton : '#add-to-cart-button',
    Proceed : '[id="attach-sidesheet-checkout-button"] > span > span >span'



  }

  SearchProduct(productName) {
    cy.get(this.elements.searchBox).type(productName)
  }

  GetProductList(searchElement) {
    cy.get(this.elements.dropDnList).find(this.elements.SelectPrdt).each(function (el) {
      cy.wrap(el).invoke("text").then(function (txt) {
        cy.log(txt.trim())
        if (txt.trim() == searchElement) {
          cy.wrap(el).click({ force: true })
          return false
        }
      })
    })
  }

  BrandCheckBox(){
   // cy.get(this.elements.checkBox).check()
   cy.get(this.elements.checkBox).find('input').check({force: true})//.should('be.checked')
   cy.get(this.elements.checkBox).find('input').should('be.checked')
  }

  SelectProduct(){
    cy.get(this.elements.Product).first()//.should('contain', 'Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus')
    cy.get(this.elements.ProductDub).first().invoke('removeAttr', 'target').click().url().should('include', 'Samsung-Galaxy-Storage-6000mAh-Battery')
 
  }

  Scroll(){
    cy.get(this.elements.AddToCartButton).click()
    cy.get(this.elements.Proceed).click({force:true})
    //cy.get()

    


  }
  





}