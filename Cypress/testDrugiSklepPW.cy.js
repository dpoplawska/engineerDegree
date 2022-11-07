describe('PW', () => {
  beforeEach(() => {
   cy.visit('https://www.sklep.pw.edu.pl/',{
    })
   })

  it('log in to an account and change data', () => {
      cy.get('#menu-item-1879 > a').click()
      cy.get('#username').type('testpwinz@outlook.com')
      cy.get('#password').type('Test9876!!').type('{enter}')
      cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get('#account_first_name').clear()
      cy.get('#account_first_name').type('D')
      cy.get('#account_last_name').clear()
      cy.get('#account_last_name').type('P')
      cy.get('.woocommerce-Button').click()
      cy.get('.woocommerce-message').contains('Account details changed successfully')
      cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
      cy.get('.u-column1 > h2').contains('Login')

  })
})
