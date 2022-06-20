import '@testing-library/cypress/add-commands'
import 'cypress-xpath'
context('Actions', () => {
    before(() => {
      cy.visit('https://www.telusinternational.ai/cmp')
    })
    it('validate landing page',function(){
        cy.contains('Welcome back!')
        cy.wait(2000)
    })
    it('should login to telus',function(){
        cy.findAllByPlaceholderText('Email').type('svgawande@gmail.com')
        cy.wait(2000)
        cy.contains('Continue').click()
        cy.wait(2000)
        cy.findAllByPlaceholderText('Password').should(`exist`)
        .type('rupqat-8kiMdi-xyjtys')
        cy.contains('Sign in').click()
        cy.wait(5000)
    })
    it('should be navigated to My profile',function(){
        cy.get('.sui-nav-settings').click()
        cy.contains('My Profile').click()
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/userprofile/basic-info');
        cy.contains('Basic Information').should('exist')

    })
    it('SHould be able to edit contact info',function(){
        cy.contains('Contact Info').should('exist')
        cy.wait(2000)
        cy.get('.figma-section-header-text-margin > .col-lg-2 > .sui-rounded').click()
        cy.findByPlaceholderText('First name *').clear()
        cy.findByPlaceholderText('First name *').type(userFirstname())
        function userFirstname() {
            var text = "";
            var possible = 'abcdefghijklmnopqrst';
             for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
             }
         cy.contains('Save').click()
         cy.wait(2000)

    })    
    it ('should be able to edit location',function(){
        cy.contains('Location').should('exist')
        cy.get(':nth-child(1) > :nth-child(1) > .col-lg-2 > .sui-rounded').click()
        cy.findByPlaceholderText('Street address (optional)').clear()
        cy.findByPlaceholderText('Street address (optional)').type(streetaddr())
        function streetaddr() {
            var text = "";
            var possible = 'abcdefghijklmnopqrst';
             for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
             }
        cy.contains('Save').click()
        cy.wait(2000)
    })
    it('Should set primary language',function(){
        cy.contains('Languages').should('exist')
        .click()
        cy.url().should('eq','https://www.telusinternational.ai/cmp/contributor/userprofile/languages')
        cy.wait(2000)
        cy.get('.col-auto > .row').click()
        cy.xpath('//div[@id="edit-language-form"]//div[contains(text(),"Language*")]//parent::div//parent::div//div[contains(@class, "sui-c-input-dropdown__indicators")]').type('English (Gambia)')
        cy.xpath('//div[@id="edit-language-form"]//div[contains(text(),"Language*")]//parent::div//parent::div//div[contains(@class, "sui-c-input-dropdown__indicators")]').type('{enter}')
        cy.wait(2000)

    })

})
