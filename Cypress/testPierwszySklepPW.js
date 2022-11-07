describe('PW', () => {
  beforeEach(() => {
   cy.visit('https://www.sklep.pw.edu.pl/',{
    })
   })

  it('add item to the basket and then clear it', () => {
      cy.get('.search-field').eq(0).type('koszulka').type('{enter}')
      cy.get('.add_to_cart_button').eq(1).click()
      cy.get('[id^=pa_rodzaj]').select(1)
      cy.get('[id^=pa_rozmiar]').select(1)

      cy.contains('Add to cart').click()
      cy.contains('has been added to your cart')
      cy.get('.woocommerce-message > .button').click()
      cy. contains('Cart')
      cy.get('.remove').click()
      cy.contains('Your cart is currently empty.')
  })
})
