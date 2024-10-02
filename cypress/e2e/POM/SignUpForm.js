/// <reference types="cypress" />

class SignUpForm {
    get namelField() {
        return cy.get('#signupName');
    }

    get lastNamelField() {
        return cy.get('#signupLastName');
    }

    get emailField() {
        return cy.get('#signupEmail');
    }

    get passwordField() {
        return cy.get('#signupPassword');
    }

    get repeatPasswordField() {
        return cy.get('#signupRepeatPassword');
    }

    get errorMessage() {
        return cy.get('.invalid-feedback');
    }

    get registrationButton() {
        return cy.get('.modal-footer .btn-primary');
    }

    get loginErrorMessage() {
        return cy.get('.alert-danger');
    }

    loginWithCredentials(email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.registrationButton.click();
    }
}

export default new SignUpForm();