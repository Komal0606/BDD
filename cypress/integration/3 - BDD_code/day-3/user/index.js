import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('Visit Practice Automation Testing site', ()=>{
    cy.log('given')
    cy.visit('https://practice.automationtesting.in/my-account/')
})

And('Enter emailaddress', ()=>{
    cy.log('and')
    cy.get('#reg_email').type('snehal27@gmail.com')
})

And('Enter Password', ()=>{
    cy.log('AND')
    cy.get('#reg_password').type('Snehal@123')
})

Then('Click on Register Button', ()=>{
    cy.log('Then')
    cy.get('input[value="Login"]').click()
})

And('Validate Dashboard', ()=>{
    cy.log('and')
    cy.get('img[alt="Automation Practice Site"]').should('be.visible')
})