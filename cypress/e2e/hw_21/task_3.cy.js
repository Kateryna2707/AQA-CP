describe('API tests', () => {
    let cookiesValue;

    const carInfo = {
        "carBrandId": 3,
        "carModelId": 12,
        "mileage": 245
    };

    const carId = 197446;
    const expenseId = 43058;

    const expenseInfo = {
        "carId": 197446,
        "reportedAt": "2024-10-15",
        "mileage": 1587,
        "liters": 235,
        "totalCost": 1245,
        "forceMileage": false
      };

      const editExpense = {
        "carId": 197446,
        "reportedAt": "2024-10-15",
        "mileage": 1575,
        "liters": 235,
        "totalCost": 1212,
        "forceMileage": false
      };

    before(() => {
        const userInfo = {
            "email": "384934+testUser1@gmail.com",
            "password": "Qaz123Xaw",
            "remember": false
        };

        cy.api({method: 'POST', url: '/api/auth/signin', body: userInfo, failOnStatusCode: false }).then((response) => {
            const cookies = response.headers["set-cookie"][0];
            cookiesValue = cookies.split(';')[0];
            cy.log(JSON.stringify(cookies));
        });
    });

    it('Add car', () => {
        cy.api({method: 'POST', url: '/api/cars', body: carInfo, failOnStatusCode: false, headers: {'Cookie': cookiesValue}}).should((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Create an expense', () => {
        cy.api({method: 'POST', url: '/api/expenses', body: expenseInfo, failOnStatusCode: false, headers: {'Cookie': cookiesValue}}).should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Edit an expense', () => {
        cy.api({method: 'PUT', url: `/api/expenses/${expenseId}`, body: editExpense, failOnStatusCode: false, headers: {'Cookie': cookiesValue}}).should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Delete car', () => {
        cy.api({method: 'DELETE', url: `/api/cars/${carId}`, failOnStatusCode: false, headers: {'Cookie': cookiesValue}}).should((response) => {
            expect(response.status).to.eq(200);
        });
    });
})

