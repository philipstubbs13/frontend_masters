/// <reference types="cypress" />

const user = {
  email: 'first@example.com',
  password: 'password123',
};

describe('Sign Up', () => {
  beforeEach(() => {
    cy.task('reset');
  });

  it('should successfully create a user when entering an email and a password', () => {
    // Sign Up
    cy.signUp(user);

    // Sign In
    cy.signIn(user);

    cy.location('pathname').should('contain', '/echo-chamber/posts');
    cy.contains('Signed in as ' + user.email);
  });
});

describe('Sign In', () => {
  beforeEach(() => {
    cy.visit('/echo-chamber/sign-in');
    cy.task('seed');
  });

  it('should sign in with an existing user', () => {
    cy.signIn(user);

    cy.location('pathname').should('contain', '/echo-chamber/posts');
    cy.contains('Signed in as ' + user.email);
  });
});
