import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../../../support/economicTimesPage";


Given('navigate the Economics Times', function(){
    HomePage.navigateSite()
})