describe("Regstration", function () {
    beforeEach(() => {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
        cy.contains('Sign up').click();
    })
    
//Field name
    it('Field name. Empty field', function () {
        cy.get('#signupName').focus().blur();
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Name required' );
    });

    it('Field name. Name is invalid', function () {
        cy.get('#signupName').type('Катерина');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Name is invalid' );
    });

    it('Field name. Wrong length. 1 symbol', function () {
        cy.get('#signupName').type('K');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Name has to be from 2 to 20 characters long' );
    });
    
    it('Field name. Wrong length. 24 symbols', function () {
        cy.get('#signupName').type('KaterynaKaterynaKateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Name has to be from 2 to 20 characters long' );
    });

    it('Field name. Border color', function () {
        cy.get('#signupName').type('KaterynaKaterynaKateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)' );
    });

//Field Last name
    it('Field Last name. Empty field', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').focus().blur();
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Last name required' );
    });

    it('Field Last name. Wrong data', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tka4enko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Last name is invalid' );
    });

    it('Field Last name. Wrong length. 1 symbol', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('T');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Last name has to be from 2 to 20 characters long' );
    });

    it('Field Last name. Wrong length. 27 symbols', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('TkachenkoTkachenkoTkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Last name has to be from 2 to 20 characters long' );
    });

    it('Field Last name. Wrong length. 27 symbols', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tka4enko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)' );
    });

    //Field Email
    it('Field Email. Wrong data', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Email is incorrect' );
    });

    it('Field Email. Empty field', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').focus().blur();
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Email required' );
    });
    
    it('Field Email. Border color', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').focus().blur();
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)' );
    });
    
//Field Password
    it('Field Password. Length', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('qazqwe123');
        cy.get('#signupRepeatPassword').type('qazqwe123');
        cy.get('.invalid-feedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter' );
    });

    it('Field Password. Empty', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').focus().blur();;
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.invalid-feedback').should('have.text', 'Password required' );
    });

    it('Field Password. Border color', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').focus().blur();;
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)' );
    });

//Field Re-enter password
    it('Field Re-enter password. Passwords do not match', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe12');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('.invalid-feedback').should('have.text', 'Passwords do not match' );
    });

    it('Field Re-enter password. Empty', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').focus().blur();;
        cy.get('.invalid-feedback').should('have.text', 'Re-enter password required' );
    });

    it('Field Re-enter password. Border color', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').focus().blur();;
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)' );
    });

//Button Register
    it('Button Register disabled', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').focus().blur();;
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.modal-footer .btn-primary').should('be.disabled');
    });

    it('Successfull registration', function () {
        cy.get('#signupName').type('Kateryna');
        cy.get('#signupLastName').type('Tkachenko');
        cy.get('#signupEmail').type('kateryna.tkachenko2707@gmail.com');
        cy.get('#signupPassword').type('QazQwe123');
        cy.get('#signupRepeatPassword').type('QazQwe123');
        cy.get('.modal-footer .btn-primary').click();
    });
});