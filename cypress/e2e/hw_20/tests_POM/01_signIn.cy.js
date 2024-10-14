import HomePage from "../page-objects/pages/HomePage";
import SignInForm from "../page-objects/components/forms/SignInForm";
import testData from "../../../fixtures/credentials.json";

describe('Sign In Form', () => {

    beforeEach(() => {
        HomePage.open();
        HomePage.openSignInForm();
    });

    it('Successful login', () => {
       SignInForm.loginWithCredentials(testData.users.userWithCars.email, testData.users.userWithCars.password);
       cy.get('h1').should('have.text', 'Garage');
    })
})