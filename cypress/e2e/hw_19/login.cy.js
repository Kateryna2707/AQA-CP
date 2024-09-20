describe("Login", function () {
    
    it('Login user', function () {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
        cy.contains('Sign In').click();
        cy.selectUser();
        cy.get('h1').should('have.text', 'Garage');
    });
});