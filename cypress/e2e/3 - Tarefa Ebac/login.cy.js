/// <reference types="cypress"/>

describe( 'Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Realiza o login com sucesso', () => {
        cy.get('#username').type('nicolas.teste@teste.com')
        cy.get('#password').type('nicolas123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, nicolas.teste (não é nicolas.teste? Sair)')

    })

    it('Exibe uma mensagem de erro ao informar um usuário inexistente', () => {
        cy.get('#username').type('nicolas@teste.com')
        cy.get('#password').type('nicolas123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });


    it('Mostra uma mensagem de erro ao informar uma senha incorreta', () => {
            cy.get('#username').type('nicolas.teste@teste.com')
            cy.get('#password').type('nicolas1233')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail nicolas.teste@teste.com está incorreta. Perdeu a senha?')
            cy.get('.woocommerce-error').should('exist') 
    });

})