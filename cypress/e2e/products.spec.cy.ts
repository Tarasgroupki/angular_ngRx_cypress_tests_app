describe('Product page tests', () => {
  it('Visits the initial products page', () => {
    cy.visit('/');
    cy.get('mat-header-cell').contains(`ID`);
    cy.get('mat-header-cell').contains(`Name`);
    cy.get('mat-header-cell').contains(`Description`);
    cy.get('mat-header-cell').contains(`Price`);
  });

  it('Visits the create products page', () => {
    cy.visit('/create');
    cy.get('input[name=title]').type('Product_test1');
    cy.get('textarea[name=description]').type('This is test product');
    cy.get('input[name=price]').type('2000');
    cy.get('button.product-btn').click();
    cy.location("pathname").should("include", "/");
  });
});
