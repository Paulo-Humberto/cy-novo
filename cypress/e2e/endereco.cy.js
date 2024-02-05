/// <reference types="cypress" />

describe('Funcionalidade endereco - faturamento', () => {
   beforeEach(() => {
    cy.visit('minha-conta') 
    cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)
    })
   
});
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
        //cadastro de endereço

    });
});

