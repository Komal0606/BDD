import { Given, Then, When, And, Before } from "cypress-cucumber-preprocessor/steps";

import { AmazonGuest } from "../../../../support/amazonGuest";

let data = new AmazonGuest()

Given('visit amazon site', function(){
    data.visitSite()   
})

Then('Click on search button and type product name', function(){
    data.searchProduct('smart watch')
    data.selectProduct()
})