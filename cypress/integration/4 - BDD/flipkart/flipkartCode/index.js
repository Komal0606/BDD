import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

import { Flipkart } from "../../../../support/genericMethodFlipkart"

let flipkt = new Flipkart()

Given ('Visit flipkart Site', function(){
    flipkt.NavigateSite()
})

Then('click on Searchbox and type product name', function(){
    flipkt.SearchProduct('iphone 12')
})

When('Select Brand CheckBox for Apple', function(){
    flipkt.SelectCheckBox()
})

And ('Select product and click on it', function(){
    flipkt.SelectProduct()
})

And('click on Add to cart',function(){
    flipkt.AddToCart()
})