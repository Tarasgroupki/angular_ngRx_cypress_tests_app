describe('Login page tests', () => {
  it('Visits the login project page', () => {
    cy.visit('/login');
    cy.get('input[name=login]').should('be.empty');
    cy.get('input[name=password]').should('be.empty');
    cy.get('button.login').should('be.enabled');
  });

  it('Login success!', () => {
    cy.visit('/login');
    cy.get('input[name=login]').type('User1');
    cy.get('input[name=password]').type('1234567890');
    cy.get('button.login').click();
    cy.location("pathname").should("include", "/");
  });

  it('Logout user!', () => {
    cy.visit('/');
    cy.get('a.logout').click();
    cy.location("pathname").should("include", "/login");
  });

  it('Login user not found!', () => {
    cy.visit('/login');
    cy.get('input[name=login]').type('User167576');
    cy.get('input[name=password]').type('1234567890');
    cy.get('button.login').click();
    cy.get('div.error').contains(`Неправильний логін, або пароль!`);
  });
});
