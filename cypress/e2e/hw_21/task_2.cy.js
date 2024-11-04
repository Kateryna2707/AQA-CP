import HomePage from "../hw_20/page-objects/pages/HomePage";
import SignInForm from "../hw_20/page-objects/components/forms/SignInForm";


describe('Intercept test', () => {
    it('Change name', ()=> {
        const body = {
                "status": "ok",
                "data": {
                    "userId": 152961,
                    "photoFilename": "default-user.png",
                    "name": "Polar",
                    "lastName": "Bear"
                }
            }
        cy.intercept('GET', '/api/users/profile', body);
        HomePage.open();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentials('384934+testUser1@gmail.com', 'Qaz123Xaw');
        cy.get('.-profile').click();
        cy.get('h1').should('have.text', 'Profile');
        cy.get('.profile_name').should('have.text', 'Polar Bear');
    })
})