/// <reference types="cypress" />

class HomePage {
    get signInButton() {
        return cy.get('.header_signin');
    }

     open() {
         cy.visit('')
     }

    openSignInForm() {
        this.signInButton.click();
        cy.get('.modal-title').should('have.text', 'Log in');
    }
}

export default new HomePage();