/// <reference types="cypress"/>

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Caesar Warm-Up Pant')
            .click()
    });

    it.only('deve adicionar um produto no carrinho', () => {
        var quantidade = 4
        
        cy.get('[class="product-block grid"]') 
            .contains('Caesar Warm-Up Pant').click()
            cy.get('.button-variable-item-33').click()
            cy.get('.button-variable-item-Gray').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade +  ' × “Caesar Warm-Up Pant” foram adicionados no seu carrinho.')
    });
});
