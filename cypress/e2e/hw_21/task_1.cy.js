/// <reference types="cypress" />

describe('API tests', () => {
    let cookiesValue;

    const carInfo = {
        "carBrandId": 1,
        "carModelId": 3,
        "mileage": 158
    };
    const editCar = {
        "carBrandId": 1,
        "carModelId": 3,
        "mileage": 1471
    };
    const carId = 197299;

    before(() => {
        const userInfo = {
            "email": "384934+testUser1@gmail.com",
            "password": "Qaz123Xaw",
            "remember": false
        };

        cy.request({ method: 'POST', url: '/api/auth/signin', body: userInfo, failOnStatusCode: false }).then((response) => {
            const cookies = response.headers["set-cookie"][0];
            cookiesValue = cookies.split(';')[0];
            cy.log(JSON.stringify(cookies));
        });
    });

    it('Get car list', ()=> {
        cy.request('GET', '/api/cars/brands').its('body.data[1].title').should('eq','BMW');
    });

    it('Add car', () => {
        cy.request({method: 'POST', url: '/api/cars', body: carInfo, failOnStatusCode: false, headers: {'Cookie': cookiesValue}}).then((response) => {
        cy.log(JSON.stringify(response.body.data));
        expect(response.status).to.eq(201);
        });
    });

    it('Edit mileage', () => {
        cy.request({method: 'PUT', url: `/api/cars/${carId}`, body: editCar, failOnStatusCode: false, headers: {'Cookie': cookiesValue}}).then((response) => {
        cy.log(JSON.stringify(response.body.data));
        expect(response.status).to.eq(200);
        });
    });

    it('Delete car', () => {
        cy.request({method: 'Delete', url: `/api/cars/${carId}`, failOnStatusCode: false, headers: {'Cookie': cookiesValue}}).then((response) => {
        cy.log(JSON.stringify(response.body.data));
        expect(response.status).to.eq(200);
        });
    });
})


