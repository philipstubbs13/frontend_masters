/// <reference types="cypress" />

const pokemon = [
  { id: 1, name: 'Bumblesaur' },
  { id: 2, name: 'Charmer' },
  { id: 3, name: 'Turtle' },
];

describe('Pokémon Search', () => {
  beforeEach(() => {
    cy.visit('/pokemon-search');

    cy.get('[data-test="search"]').as('search');
    cy.get('[data-test="search-label"]').as('label');

    cy.intercept('/pokemon-search/api?*').as('api');
  });

  it('should call the API when the user types', () => {
    cy.get('@search').type('ivy');
    cy.wait('@api');
  });

  it('should update the query parameter', () => {
    cy.get('@search').type('ivy');
    cy.wait('@api');
    cy.location('search').should('equal', '?name=ivy');
  });

  it('should call the API with correct query parameter', () => {
    cy.get('@search').type('ivy');
    cy.wait('@api').its('request.url').should('contain', 'name=ivy');
  });

  it('should pre-populate the search field with the query parameter', () => {
    cy.visit({ url: '/pokemon-search', qs: { name: 'char' } });
    cy.wait('@api').its('request.url').should('contain', 'name=char');
  });

  it('should render the results to the page', () => {
    cy.intercept('/pokemon-search/api?*', { pokemon }).as('stubbed');
    cy.get('@search').type('ivy');

    cy.intercept('/pokemon-search/api/1', { fixture: 'bulbasaur' }).as('bulba-fixture');
    cy.get('[data-test="results"] a').first().click();

  });

  it('should link to the correct pokémon', () => {});

  it('should persist the query parameter in the link to a pokémon', () => {});

  it('should bring you to the route for the correct pokémon', () => {});

  it('should immediately fetch a pokémon if a query parameter is provided', () => {});
});
