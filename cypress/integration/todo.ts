describe('Counter', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'Is2Todo');
  });

  it('should has the correct component title', () => {
    cy.get('.todo-title').should('have.text', 'TO-DO List');
  });

  it('should add a todo task', () => {
    cy.get('.task-item').should('have.length', 5);
    cy.get('.todo-text').type('hello');
    cy.get('.btn-add').click();
    cy.get('.task-item').should('have.length', 6);
  });

  it("should change a task's status", () => {
    // mark task as done
    cy.get('.task-item .done').should('have.length', 2);
    cy.get('.task-item .title').first().click();
    cy.get('.task-item .done').should('have.length', 3);

    // mark task as open
    cy.get('.task-item .done').first().click();
    cy.get('.task-item .done').should('have.length', 2);
  });

  it('should delete a task', () => {
    cy.get('.task-item').should('have.length', 5);
    cy.get('.task-item .deletion').first().click();
    cy.get('.task-item').should('have.length', 4);
  });
});
