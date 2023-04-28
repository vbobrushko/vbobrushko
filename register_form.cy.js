
describe('форма реєстрації', () => {
    it('відкриває форму реєстрації', () => {
      cy.viewport(1026, 720)
      cy.visit('https://allocate-wine.gabsoft.net/')
      cy.get('#btnConfirmAgeYes').should('be.be.visible').click()
      cy.get('#form-register').should('be.be.visible').click();
    })
  })