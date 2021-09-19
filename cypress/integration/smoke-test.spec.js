//const hostUrl = "http://localhost:3030";
describe("The application loads", () => {
  beforeEach(() => {
    cy.displaytodos([])
  })
  it("navigates to the / route", () => {
    //cy.visit(hostUrl);
  });

  it("has the basic Todo list container", () => {
    //cy.visit(hostUrl);
    cy.get(".todo-list").should("exist");
  });

  it("Input form", () => {
    cy.focused()
      .should('have.class', 'new-todo')
  })

  it("Type form", () => {
    const TypedText = 'Learn Cypress'

    cy.get('.new-todo').type(TypedText).should('have.value',TypedText)
  })

  context('Form Submission', () => {
    beforeEach(() =>{
      cy.server()
    })
    it('Add a new todo on Submit', () => {
      const itemText = 'Learn Cypress Quickly'
      //cy.server()
      cy.route('POST', '/api/todos', {
        name : itemText,
        id: 1,
        isComplete: false
      })
      cy.get('.new-todo').type(itemText).type('{enter}').should('have.value','')

      cy.get('.todo-list li').should('have.length',1).and('contain',itemText)
    })

    it("Shows error message on failed submission", () => {
      //cy.server()
      cy.route({
        url : '/api/todos',
        method : 'POST',
        status : 500,
        response : 'error: todo\'s not submitted'
      })

      cy.get('.new-todo').type('test{enter}')
      cy.get('.todo-list li').should('not.exist')
      cy.get('.error').should('be.visible')
    })
  })
});
