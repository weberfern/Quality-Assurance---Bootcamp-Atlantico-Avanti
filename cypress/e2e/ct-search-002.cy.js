describe('CT-SEARCH-002 - Busca filme inexistente no TMDB', () => {
  
  it('Deve exibir mensagem para filme inexistente', () => {
    cy.visit('https://www.themoviedb.org/')
    // localizar campo de busca
    cy.get('#inner_search_v4').should('be.visible')
    // digitar termo e enviar
    cy.get('#inner_search_v4').type('filme inexistente{enter}')
    // validar que resultado aparece
    cy.contains('Não foram encontrados filmes que correspondam aos seus critérios de busca.').should('be.visible')

  })

})
