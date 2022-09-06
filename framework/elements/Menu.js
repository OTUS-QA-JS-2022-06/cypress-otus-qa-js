export default {
  get () {
    return cy.get('.top-menu')
  },

  openPage (pageName) {
    const menu = this.get();
    menu.get('a').contains(pageName).click();
  },

  isActiveItem (pageName) {
    const menu = this.get();
    menu.get('a').contains(pageName)
    .should('have.class', 'router-link-active');
  }
}
