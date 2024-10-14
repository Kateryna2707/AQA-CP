/// <reference types="cypress" />

class FuelExpenseForm {
    get vehicleField() {
        return cy.get('#addExpenseCar');
    }

    get reportDateField() {
        return cy.get('#addExpenseDate');
    }

    get mileageField() {
        return cy.get('#addExpenseMileage');
    }

    get litersField() {
        return cy.get('#addExpenseLiters');
    }

    get costField() {
        return cy.get('#addExpenseTotalCost');
    }

    get addButton() {
        return cy.get('.modal-footer .btn-primary');
    }

    addFuelExpense(mileage, liters, cost) {
        this.mileageField.clear().type(mileage); 
        this.litersField.type(liters); 
        this.costField.type(cost)
        this.addButton.click();
        }
    }


    export default new FuelExpenseForm();