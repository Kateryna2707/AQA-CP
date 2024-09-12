describe("Find buttons", function () {
    it('Find headers buttons', function () {
      cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
      cy.get('nav').find('button');
      cy.get('[appscrollto="aboutSection"]').parent();
      cy.get('.-active').should('be.visible').and('contain.text', 'Home');
      cy.get('[appscrollto="aboutSection"]').should('be.visible').and('contain.text', 'About');
      cy.get('[appscrollto="contactsSection"]').contains('Contacts');
  });

    it('Find body elements', function () {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get('h1').parent();
    cy.title('Do more!');
    cy.get('.hero-descriptor_btn').should('be.visible').and('contain.text', 'Sign up').click();
  });

    it('Fuel expenses', function () {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get(':nth-child(1) > .about-block > .about-block_picture > .about-picture_img');
    cy.get('.about-block_descr').should('contain', '100 instructions');
  });

    it('Contacts', function () {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get('.contacts_socials>a');
    cy.get('.contacts_socials>a').eq(2);
    cy.get('a[href*="https://www.facebook.com/Hillel.IT.School"]').should('have.attr', 'href').and('include', 'https://www.facebook.com/Hillel.IT.School');
  });
});