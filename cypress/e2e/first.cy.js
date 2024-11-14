
describe('My first Script',()=>{
    it('Test11',()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
    })
})