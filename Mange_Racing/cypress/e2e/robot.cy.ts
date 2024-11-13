import { should } from "chai";

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit("/");
      });
    
    it('should redirect to /home on successful login', () => {
      cy.get('input#email').type('santosisabelarocha@gmail.com'); 
      cy.get('input#password').type('isabela123'); 
      cy.get('button').contains('Entrar').click();
  
      cy.url().should('include', '/home');
    });
  });

  describe('Home Page', () => {
    beforeEach(() =>{
        cy.visit("/home");
    });
    it ('should redirect to /creteCross on successful', ()=>{
        cy.get('.carrosel .item')
        .contains('Cross Rider')
        .parent()
        .find('img')
        .click();
      cy.url().should('include', '/creteCross');

    })
  })
  