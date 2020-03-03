const url = 'https://codepen.io/choskim/pen/RLYebL'

it('Desafio Automação', () => {
  cy.visit(url)

  const pointerEvent = {
    force: true,
    pointerType: 'touch',
    x: 11.1386137008667,
    y: 653.46533203125,
  }

  cy.get('.square')
    .trigger('pointerdown', pointerEvent)
    .wait(500)
    .trigger('pointerup', pointerEvent)
              
  cy.get('.square').should('have.css', 'width', '225px').and('have.css', 'height', '225px')
})