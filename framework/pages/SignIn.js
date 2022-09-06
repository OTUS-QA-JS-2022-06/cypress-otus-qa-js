import * as app from '../index';

export default {
  visit () {
    cy.visit('https://try.vikunja.io/login')
  },

  fillEmail (email) {
    const field = cy.get('#username')
    field.clear();
    field.type(email);

    return this;
  },

  fillPassword (password) {
    const field = cy.get('#password')
    field.clear();
    field.type(password);

    return this;
  },

  submit () {
    cy.get('.button').contains('Войти').click();
  },

  getEmailError () {
    return cy.get('[for="username"] ~ .help');
  },

  getPasswordError () {
    return cy.get('.label-with-link ~ .help');
  }
}
