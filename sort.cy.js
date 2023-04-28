describe('Sorting sellers page', () => {
    it('Sort sellers by name Z-A', () => {
      cy.viewport(1026, 720)
      cy.visit('https://allocate-wine.gabsoft.net/sellers/#cat-seller');
      cy.get('#btnConfirmAgeYes').should('be.be.visible').click();
      cy.get('#dropdownMenu1').click();
      cy.get('#producer-dropdown').click();
      // cy.contains('Producers');
    });
    // it('Sort sellers by name A-Z', () => {
    //     cy.visit('https://allocate-wine.gabsoft.net/sellers/?sort=ms.nickname&order=DESC');
    //     cy.get('#btnConfirmAgeYes').should('be.be.visible').click();
    //     cy.get('#sort-m').click();
    //     cy.contains('Producers: A-Z').click();
    //     cy.contains('Producers');
    // })    
  });