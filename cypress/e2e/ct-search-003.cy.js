describe('CT-SEARCH-003 - Busca filme com campo de busca vazio no TMDB', () => {
  
  it('Deve exibir mensagem de que não foram encontrados filems que correspondam aos critérios de busca', () => {
    cy.visit('https://www.themoviedb.org/')
    // localizar campo de busca
    cy.get('#inner_search_v4').should('be.visible')
    // não digitar nenhum termo e enviar
    cy.get('#inner_search_v4').type('{enter}')
    // validar que resultado aparece
    cy.contains('Não foram encontrados filmes que correspondam aos seus critérios de busca.').should('be.visible')

  })

})
