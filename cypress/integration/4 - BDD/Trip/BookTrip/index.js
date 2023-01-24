import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

import { BookTrip } from "../../../../support/booktrip";
let trip = new BookTrip()

Given('Visit Site', function(){
    trip.visitSite()
})

Then('Select destination, date & rooms', function(){
    trip.selectDestination('Goa')
    trip.SelectDate()
})

And('Select Hotel', function(){
    trip.SelectHotel('The Crown Goa')
})