import HomePage from "../page-objects/pages/HomePage";
import SignUpForm from "../page-objects/components/forms/SignUpForm";

describe('Sign Up Form', () => {

    beforeEach(() => {
        HomePage.open();
        cy.contains('Sign up').click();
    });

    it('Successful sign up', () => {

        SignUpForm.namelField.type('Ivan');
        SignUpForm.lastNamelField.type('Petrenko');
        SignUpForm.emailField.type('384934+testUser2@gmail.com');
        SignUpForm.passwordField.type('Qaz123Xaw');
        SignUpForm.repeatPasswordField.type('Qaz123Xaw');
        SignUpForm.registrationButton.click();

        cy.get('h1').should('have.text', 'Garage');
    })
})
