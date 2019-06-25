describe('Book Flight', function() {

    beforeEach(function () {
        Cypress.Cookies.preserveOnce('osCsid')
    })

    it('Details of both Passenger',function() {
        cy.title().should('eq', 'Book a Flight: Mercury Tours')
        cy.get('[name="passFirst0"]').type('Mehul').should('have.value','Mehul')
        cy.get('[name="passLast0"]').type('Jain').should('have.value','Jain')
        cy.get('[name="pass.0.meal"]').select('Vegetarian').should('have.value','VGML')
        cy.get('[name="passFirst1"]').type('Akaash').should('have.value','Akaash')
        cy.get('[name="passLast1"]').type('Patnaik').should('have.value','Patnaik')
        cy.get('[name="pass.1.meal"]').select('Low Cholesterol').should('have.value','LFML')
    })

    it('Payment Details',function() {
        cy.get('[name="creditCard"]').select('Visa').should('have.value','BA')
        cy.get('[name="creditnumber"]').type('1234567890123456')
        cy.get('[name="cc_exp_dt_mn"]').select('07').should('have.value','07')
        cy.get('[name="cc_exp_dt_yr"]').select('2009').should('have.value','2009')
        cy.get('[name="cc_frst_name"]').type('Mehul').should('have.value','Mehul')
        cy.get('[name="cc_mid_name"]').should('have.value','')
        cy.get('[name="cc_last_name"]').type('Jain').should('have.value','Jain')
    })

    it('Billing Address Details',function() {
        cy.get('[name="billAddress1"]').clear().type('3rd Cross').should('have.value','3rd Cross')
        cy.get('[name="billAddress2"]').type('Marathalli').should('have.value','Marathalli')
        cy.get('[name="billCity"]').clear().type('Bengaluru').should('have.value','Bengaluru')
        cy.get('[name="billState"]').clear().type('KA').should('have.value','KA')
        cy.get('[name="billZip"]').clear().type('560037').should('have.value','560037')
        cy.get('[name="billCountry"]').select('INDIA').should('have.value','92')
    })

    it('Delivery Address',function() {
        //Keeping Delivery Address is same to learn CheckBox
        cy.get('[name="ticketLess"]').check('checkbox').should('be.checked')
        cy.wait(3000)
    })

    it('Click on Secure Purchase Button', function() {
        cy.get('[name="buyFlights"]').click()
        cy.url().should('include','/mercurypurchase2.php')
        cy.title().should('eq', 'Flight Confirmation: Mercury Tours')
        cy.screenshot("Booking Details")
        cy.clearCookies()
    })
})