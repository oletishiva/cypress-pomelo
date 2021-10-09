/// <reference types="Cypress" />

describe('signup Page: visual verification of all fields', () => {
  beforeEach(() => {
    cy.visit('/signup/')
  })
  it('Verify all fields positions and default text with visual verification', () => {

    cy.document()
        .toMatchImageSnapshot();

  })

})