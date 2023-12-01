/// <reference types="cypress"/>

context('funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')  
    });

    afterEach(() => {
        cy.screenshot()
    })  
    
    
    it('deve efetuar login corretamente', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta' )
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac20Nome')
    })
    
    it('deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username').type('alunobac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')
    })

    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })
})

