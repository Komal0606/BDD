import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

import { Demoblaze } from "../../../../support/demoblaze";

let data = new Demoblaze()

Given('Visit Site', function(){
    data.visitSite()
})

Then('signIn and signOut account', function(){
    data.SignUp()
    //data.SignIn()
})

// Then('Select Mobile', function(){

// })