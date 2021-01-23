describe('FormPlus', () => {
    it('Should Visit and Verify', () => {
      
        cy.visit('https://pdf.formpl.us/')

        cy.get('[type=primary]').contains('Use online').should('be.visible')
        cy.get('[type=secondary]').contains('Download PDF').should('be.visible')
        cy.get('[type=text]').click().clear().type('Test')
        cy.contains('Short text').click({force: true})
        cy.contains('Email').click({force: true})
        cy.contains('Number').click({force: true})
        cy.contains('Date & Time').click({force: true})
        cy.contains('Phone Number').click({force: true})
        cy.contains('Signature').click({force: true})
        cy.contains('Multiple Choice').click({force: true})
        cy.get('[type=checkbox]').should('not.be.checked');
        cy.get('.email').click()
        cy.get('[type=secondary]').contains('Download PDF').click({ force: true })
        cy.contains('Great job creating your PDF Form!').should('be.visible')
        cy.get('.close-icon').click()
        cy.get('[type=secondary]').contains('Restart').click({ force: true })
        cy.get('[type=primary]').contains('Clear PDF').click()
        

    })
        
    });