import * as app from '../../../framework/index.js'

describe('Страница команды', () => {
  beforeEach(() => {
    cy.login(
        app.config.credentials.login,
        app.config.credentials.password
    );
  })

  it('В меню активна текущая страница', () => {
    cy.visit('https://try.vikunja.io/teams')
    app.element.Menu.isActiveItem('Команды');
  })
})
