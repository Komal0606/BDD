export class Demoblaze{
    selector = {
        url : "https://www.demoblaze.com",
        signUpEl : "#signin2",
        login:"#login2"
    }

    visitSite(){
        cy.visit(this.selector.url)
    }

    SignUp(){
        cy.get(this.selector.signUpEl).click()
        cy.window().then(function(){
           cy.wait(1000)
            cy.get('#sign-username').type('komal0619')
            cy.get('#sign-password').type('Komal@47478')
            cy.get('.modal-footer>button[onclick="register()"]').click()
            // cy.on('window:alert', function(el){
            //     expect(el).to.eq(true)
            // })
        })
    }

    // SignIn(){
    //     cy.get(this.selector.login).click()
    // }
}