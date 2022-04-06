/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');

    cy.get('[data-test="filter-items"').as('filterInput');
    cy.get('[data-test="items"]').as('allItems');
    cy.get('[data-test="items-unpacked"]').as('unpackedItems')
    cy.get('[data-test="items-packed"]').as('packedItems')
  });

  it('should filter items', () => {
    cy.get('@filterInput').type('iPhone');

    cy.get('@allItems').should('not.contain.text', 'Hoodie');
  });

  it('should move items from one list to the other', () => {
    cy.get('@unpackedItems').find('label').first().as('itemLabel')
    cy.get('@itemLabel').invoke('text').as('itemName')

    cy.get('@itemLabel').click();

    cy.get('@itemName').then(text => {
      cy.get('@packedItems').contains(text)
    })
  })
});
