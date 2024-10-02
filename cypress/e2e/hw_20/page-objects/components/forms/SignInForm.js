/// <reference types="cypress" />

class SignInForm {
    get emailField() {
        return cy.get('#signinEmail');
    }

    get passwordField() {
        return cy.get('#signinPassword');
    }

    get errorMessage() {
        return cy.get('.invalid-feedback');
    }

    get loginButton() {
        return cy.get('app-signin-modal .btn-primary');
    }

    get loginErrorMessage() {
        return cy.get('.alert-danger');
    }

    loginWithCredentials(email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.loginButton.click();
    }
}

export default new SignInForm();