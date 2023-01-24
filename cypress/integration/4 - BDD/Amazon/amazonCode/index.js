import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

import { genericMethod_amz } from "../../../../support/genericMethod_amz"

let data = new genericMethod_amz()

Given('Navigate the Site', ()=>{
    cy.log('given')
    cy.visit('/')
})

Then('Search product and select product from dropdown list', ()=>{
    data.SearchProduct('Samsung')
    data.GetProductList('samsung m13')
})

When ('Select Brand CheckBox for samsung', ()=>{
    data.BrandCheckBox()

})

And ('Select product and click on it', ()=>{
    data.SelectProduct()
})

And ('scroll then click on Add to cart', ()=>{
    data.Scroll()
})