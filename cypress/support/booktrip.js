export class BookTrip {
    selector = {
        url : "https://www.trip.com/",
        register : ".mc-hd__login-btn",
        google : ".way_list",
        Destination : ".search-container>div>input",
        DropdownList : "#dropList",
        checkin : ".time-tab.checkin > input",
        date : ".is-allow-hover> .day",
        assert : ".time-tab.checkout > input",
        selectRoom :  ".room-guest > i",
        room : ".choice > div > div > .icon-btn > .smarticon.u-icon-ic_plus.action-btn",
        age : ".choice>.child-age >div > select",
        doneButton : ".choice>.done > span",
        serachButton : ".li-item.li-item-btn",
        filter : ".m-checkbox-v8",
        hotelList : ".long-list.long-list-v8",
        hotelname : ".rt-head-title > [class='list-card-tagAndTitle']"
    }

    visitSite(){
        cy.visit(this.selector.url)
    }

    // registerAccount(){
    //     cy.get(this.selector.register).click()
    //     cy.window().then(function(win){
    //         cy.wait(1000)
    //         cy.get(this.selector.google).children().eq(2).click()   
    //     })
    // }

    selectDestination(place){
        cy.get(this.selector.Destination).type(place)
        cy.get(this.selector.DropdownList).find('.associative-item').eq(0).click()
    }

    SelectDate(){
        cy.get(this.selector.checkin).click()
        cy.get(this.selector.date).contains(15).click()
        cy.get(this.selector.selectRoom).click()
        cy.get(this.selector.room).eq(0).click({force:true})
        cy.get(this.selector.room).eq(1).dblclick({force:true})
        cy.get(this.selector.room).eq(2).click()
       // cy.wait(3000)
        cy.get(this.selector.age).select('5').should('contain', '5')
        cy.get(this.selector.doneButton).click({force:true})
        cy.get(this.selector.serachButton).click() 
       

    }

    SelectHotel(){
       // cy.get(this.selector.filter).check()
       //cy.wait(10000).scrollTo('bottom')
       cy.get(this.selector.hotelList).each(function(el,index){
        if(index == 5){
            cy.wrap(el).click()
        }
       })
       
        
    
    }
}