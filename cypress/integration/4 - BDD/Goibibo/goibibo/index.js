////Select the flight Pune to Mumbai click on date and select December cheapest flight
import { Given, Then, When, And, Before } from "cypress-cucumber-preprocessor/steps";

import { Goibibo } from "../../../../support/goibibo";
let tripToGoa = new Goibibo()

Before('',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
})
Given('Visit Goibibo Site', function(){
    tripToGoa.visitSite()
})

Then('Select location', function(){
    tripToGoa.selectLocation()
})