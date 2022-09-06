import * as app from '../../../framework/index.js'

describe('Проверка создания задач', () => {
  beforeEach(() => {
    // cy.login(
    //     app.config.credentials.login,
    //     app.config.credentials.password
    // );
    const signInPage = app.page.MainPage.getSignIn();
  })

  it('Добавили новую задачу', () => {
    cy.visit('https://try.vikunja.io')
    cy.get('.add-task-textarea')
        .type('new otus task')
  })

  it('В меню активна текущая страница', () => {
    cy.visit('https://try.vikunja.io')
    app.element.Menu.isActiveItem('Обзор');
  })
})
