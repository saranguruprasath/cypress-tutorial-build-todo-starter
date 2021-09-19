describe('App Intialization', () =>{
    it('Validate the App Loads', () => {
        // cy.server()
        // cy.route('GET', '/api/todos', 'fixture:todos')
        // cy.visit('/')

        cy.displaytodos()

        cy.get('.todo-list li').should('have.length', 4)
    })

    it('Display Error Message on Failure', () => {
        cy.server()
        cy.route({
            url : 'api/todos',
            method : 'GET',
            status : 500,
            response : 'error: something wrong'
        })

        cy.visit('/')
        cy.get('.todo-list li').should('not.exist')
        cy.get('.error').should('be.visible')
    })
})