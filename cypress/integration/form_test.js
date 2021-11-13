describe('User-Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    const nameInput = () => cy.get('input[name=name]')
    const specialInput = () => cy.get('textarea[name=special]')
    const orderButton = () => cy.get('button[id="order-pizza"]')

    it('Input Check', () => {
        orderButton()
         .click();
        nameInput()
            .should('have.value', '')
            .type('Lorenzo')
            .should('have.value', 'Lorenzo');
        specialInput()
            .should('have.value', '')
            .type('Gallo')
            .should('have.value', 'Gallo');
    })
})