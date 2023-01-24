 class EconomicTimesHomePage {
    element = {
        url : "https://economictimes.indiatimes.com/defaultinterstitial.cms"
    }

    navigateSite(){
        return cy.visit(this.element.url)
    }
}


let HomePage = new EconomicTimesHomePage();
export default HomePage;

