import * as app from '../../../framework'

describe('Проверка авторизации', () => {
  it('Успешно авторизовались', () => {
    app.page.SignIn.visit();
    app.page.SignIn
      .fillEmail(app.config.credentials.login)
      .fillPassword(app.config.credentials.password)

    app.page.SignIn.submit();

    cy.url().should('eq', 'https://try.vikunja.io/')
  })

  it('Не пускает с пустым логином и паролем', () => {
    app.page.SignIn.visit();
    app.page.SignIn.submit();

    app.page.SignIn
      .getEmailError()
      .contains('Please provide a username.');

    app.page.SignIn
      .getPasswordError()
      .contains('Please provide a password.');

    cy.url().should(($url) => {
      expect($url).to.not.equal('https://try.vikunja.io/')
    })
  })
})
