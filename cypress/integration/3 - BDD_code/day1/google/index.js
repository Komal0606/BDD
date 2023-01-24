// step defination file

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('Open google page', ()=>{
    cy.log(Given)
    cy.visit('https://google.com')
})

Then('check Google in title', ()=>{
    cy.log(Then)
    cy.get('.FPdoLc > center > .gNO89b').should('have.value', "Google Search")

})