import { HomePage } from "../support/Pages/homePage";

describe('Homepage Tests', () => {
    const homePage = new HomePage
    
    beforeEach(() => {
        cy.visit('')
        cy.wait(7000)
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Ignora todas las excepciones no capturadas
        })
    });

    it('It validates suscribe button on welcome modal', () => {
        homePage.getSuscribeButton().should('have.text','¡Suscribite aquí! ') // button name assertion
        homePage.closeModal();
        homePage.getModal().should('not.be.visible'); // close modal asertion 
    });

    it.only('Search function', () => {
        homePage.closeModal();
        homePage.searchInputProduct().type('zapatillas').type('{enter}')
        cy.url().should('include', '/search?q=zapatilla')
        
    });


});