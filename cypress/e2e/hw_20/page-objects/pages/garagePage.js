/// <reference types="cypress" />

class GaragePage {
    get addCarButton() {
        return cy.get('.btn-primary');
    }
    get addFuelExpenseButton() {
        return cy.get('.car_add-expense')
    }

       openAddCarForm() {
        this.addCarButton.click();
        cy.get('.modal-header').should('have.text', 'Add a car');
    }

    openFuelExpenseForm() {
        this.addFuelExpenseButton.click();
        cy.get('.modal-footer').should('have.text', 'Add');
    }

}

export default new GaragePage();