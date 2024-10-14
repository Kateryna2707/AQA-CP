import SignInForm from "../page-objects/components/forms/SignInForm";
import testData from "../../../fixtures/credentials.json";
import AddCarForm from "../page-objects/components/forms/AddCarForm";
import HomePage from "../page-objects/pages/HomePage";

describe('Garage page', () => {

  beforeEach(() => {
      HomePage.open();
      HomePage.openSignInForm();
      SignInForm.loginWithCredentials(testData.users.userWithCars.email, testData.users.userWithCars.password);
      cy.get('h1').should('have.text', 'Garage');
    })

    it('Adding car', () => {
      cy.contains('Add car').click();
      AddCarForm.addCar('BMW', 'X5', 12345);
    })
})
