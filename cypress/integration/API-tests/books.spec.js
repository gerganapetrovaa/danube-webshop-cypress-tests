
describe('Book tests', () => {
    it('Should return correct number of books', () => {
        cy.intercept('GET', 'api/books').as('getNumberOfBooks')
        cy.visit('/')
        cy.wait('@getNumberOfBooks').then(xhr => {
            expect(xhr.response.statusCode).to.eql(200)
            expect(xhr.response.body.length).to.eql(30)
            expect(xhr.response.body.filter(x => x.rating === '★☆☆☆☆').length).to.eql(2)

        })
    })
})