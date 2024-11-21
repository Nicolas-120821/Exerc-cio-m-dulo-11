/// <reference types="cypress"/>

describe('Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('.product-block')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        
       
        cy.get('.woocommerce-product-details__short-description').should('exist')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

});