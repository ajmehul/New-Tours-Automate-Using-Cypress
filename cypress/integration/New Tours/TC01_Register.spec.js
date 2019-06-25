describe('Register as New User', function()  {

    it('Navigate to Mercury Tours',function() {
        cy.clearCookies()
        cy.visit('http://www.newtours.demoaut.com/')
        cy.title().should('eq', 'Welcome: Mercury Tours')
    })

    it('Click on Register', function() {
        cy.contains('REGISTER').click()
        cy.title().should('eq', 'Register: Mercury Tours')
    })

    it('Enter Contact Information',function() {
        cy.get('[name="firstName"]').type('Mehul').should('have.value', 'Mehul')
        cy.get('[name="lastName"]').type('Jain').should('have.value', 'Jain')
        cy.get('[name="phone"]').type('9876543210').should('have.value', '9876543210')
        cy.get('[name="userName"]').type('mehuljain@gmail.com').should('have.value', 'mehuljain@gmail.com')
    })

    it('Enter Mailing Information',function() {
        cy.get('[name="address1"]').type('3rd Cross').should('have.value', '3rd Cross')
        cy.get('[name="address2"]').type('Marathahalli').should('have.value', 'Marathahalli')
        cy.get('[name="city"]').type('Bengaluru').should('have.value', 'Bengaluru')
        cy.get('[name="state"]').type('Karnataka').should('have.value', 'Karnataka')
        cy.get('[name="postalCode"]').type('560037').should('have.value', '560037')
        cy.get('[name="country"]').select('INDIA').should('have.value', '92')
    })

    it('Enter User Information',function() {
        cy.get('[name="email"]').type('mehuljain').should('have.value', 'mehuljain')
        cy.get('[name="password"]').type('TestCypress').should('have.value', 'TestCypress')
        cy.get('[name="confirmPassword"]').type('TestCypress').should('have.value', 'TestCypress')
    })

    it('Click on Submit Button',function() {
        cy.get('[name="register"]').click()
        cy.url().should('include','/create_account_success.php')
        //cy.get('[href="mercurysignon.php"]').should('contain','sign-in').click()
        cy.contains('SIGN-OFF').click()
        cy.url().should('include','/mercurysignon.php')
    })
})