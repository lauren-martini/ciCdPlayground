// app.spec.js created with Cypress
//
describe('The app', () => {
    it('tells that you are a Martini', () => {
        cy.visit('')
        cy.get('h1')
        .should('have.text', 'Hello, my name is Lauren Martini!')
    })
  })
