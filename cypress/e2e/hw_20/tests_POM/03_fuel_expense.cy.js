import SignInForm from "../page-objects/components/forms/SignInForm";
import testData from "../../../fixtures/credentials.json";
import FuelExpenseForm from "../page-objects/components/forms/FuelExpenseForm";
import HomePage from "../page-objects/pages/HomePage";

describe('Adding fuel expense', () => {

    beforeEach(() => {
      HomePage.open();
      HomePage.openSignInForm();
      SignInForm.loginWithCredentials(testData.users.userWithCars.email, testData.users.userWithCars.password);
      cy.get('h1').should('have.text', 'Garage');
    })

    it('Adding fuel expense', () => {
        cy.get('.car').eq(0).within(() => {
            cy.contains('Add fuel expense').click();
              })
        FuelExpenseForm.addFuelExpense('52532', '555', '245');
        cy.get('h1').should('have.text', 'Fuel expenses');
    })
  })