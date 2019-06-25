describe('Search Flight', function() {

    beforeEach(function () {
        Cypress.Cookies.preserveOnce('osCsid')
    })

    it('Enter Flight details to be searched',function() {
        cy.title().should('eq','Find a Flight: Mercury Tours:')
        //Select type of Trip One wat or Round
        cy.get('[name="tripType"]').not('[disabled]')
            .check('oneway').should('be.checked')
        //select Number of passengers
        cy.get('[name="passCount"]').select('2').should('have.value','2')
        //Select Departure From
        cy.get('[name="fromPort"]').select('London').should('have.value','London')
        //Select departure date
        cy.get('[name="fromMonth"]').select('July').should('have.value','7')
        cy.get('[name="fromDay"]').select('12').should('have.value','12')
        //select destination
        cy.get('[name="toPort"]').select('San Francisco').should('have.value','San Francisco')
        //select Return Date
        cy.get('[name="toMonth"]').select('August').should('have.value','8')
        cy.get('[name="toDay"]').select('2').should('have.value','2')
        //Select Service Class
        cy.get('[name="servClass"]').not('[disabled]')
            .check('Business').should('be.checked')
        //Select preferred Airline
        cy.get('[name="airline"]').select('Blue Skies Airlines').should('have.value','Blue Skies Airlines')
        cy.wait(5000)
        //Click on Continue to search flights
        cy.get('[name="findFlights"]').click()

        cy.url().should('include','/mercuryreservation2.php')
    })

})