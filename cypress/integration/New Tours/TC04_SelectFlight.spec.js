describe('Select Flight', function() {

    beforeEach(function () {
        Cypress.Cookies.preserveOnce('osCsid')
    })

    it('Select Flight from Departure',function() {
        cy.title().should('eq','Select a Flight: Mercury Tours')
        cy.get('[name="outFlight"]').not('[disabled]')
            .check('Blue Skies Airlines$361$271$7:10').should('be.checked')
    })

    it('Select Flight for Returning',function() {
        cy.get('[name="inFlight"]').not('[disabled]')
            .check('Blue Skies Airlines$631$273$14:30').should('be.checked')
    })

    it('Continue for Booking on both flights', function() {
        cy.get('[name="reserveFlights"]').click()
        cy.url().should('include','/mercurypurchase.php')
    })
})