describe('Login to New Tours', function() {

    beforeEach(function () {
        Cypress.Cookies.preserveOnce('osCsid')
    })

    it('Enter Username and Password', function() {
        cy.contains('Flight').click()
        cy.get('[name="userName"]').type('mehuljain').should('have.value', 'mehuljain')
        cy.get('[name="password"]').type('TestCypress').should('have.value', 'TestCypress')
        cy.get('[name="login"]').click()
        cy.url().should('include','/mercuryreservation.php')
    })

})