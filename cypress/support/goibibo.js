export class Goibibo {
    elements ={
        url : "https://www.goibibo.com",
        iframe: ".aut-iframe",
        from : ".sc-jJoQJp.echhfS > input"
        
    }

    visitSite(){
        cy.visit(this.elements.url)
    }

    selectLocation(){
       // cy.get(this.elements.from).type('pune')
       cy.get(this.elements.iframe).then(function(el){
        cy.wrap(el.contents().find('body')).as('iframBody')
       })
    }

}