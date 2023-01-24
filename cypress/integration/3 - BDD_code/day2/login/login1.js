import{Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('Visit Practice Test Automation site',() =>{
    cy.log('given')
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})

And('Enter Username', ()=>{
    cy.log('and')
    cy.get('#username').type('student')
})

And('Enter Password', ()=>{
    cy.log('and')
    cy.get('#password').type('Password123')
})

Then('Click on Login Button', ()=>{
    cy.log('then')
    cy.get('#submit').click()
})

And('Validate the Dashboard', ()=>{
    cy.log('and')
    cy.get('.post-header >h1').should('have.text', 'Logged In Successfully')
})

// *********Login with Invalid credentials***************/

And('Enter Invalid Username', ()=>{
    cy.log('and')
    cy.get('#username').type('student')
})

And('Enter Invalid Password', ()=>{
    cy.log('and')
    cy.get('#password').type('Password399')
})

And('Validate the error msg', ()=>{
    cy.log('and')
    cy.get('#error').should('have.text', 'Your password is invalid!')
})


//************************Login Orange HRM ****************************/

Given('Visit Orange HRM site', ()=>{
    cy.log("Given")
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

And('Type Username', ()=>{
    cy.log("And")
    cy.get('input[name="username"]').type('Admin')
})

And('Type Password', ()=>{
    cy.log("And")
    cy.get('input[name="password"]').type('admin123')
})

Then('Click on Button Login', ()=>{
    cy.log("then")
    cy.get('.orangehrm-login-button').click()

})

And('Validate Dashboard', ()=>{
    cy.log("and")
    cy.contains('Admin').should('be.visible')
    cy.contains('Dashboard').click()
    cy.contains('Launching Soon').should('be.visible')
})

//***********Login Orange HRM with Invalid credentials***********/


And('Type Invalid Username', ()=>{
    cy.log("And")
    cy.get('input[name="username"]').type('Admin44')
})

And('Type Invalid Password', ()=>{
    cy.log("And")
    cy.get('input[name="password"]').type('admin333')
})

And('Validate Error message', ()=>{
    cy.log("and")
    cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials')
})