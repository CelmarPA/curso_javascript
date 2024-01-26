function verificar() {
    // Declaração de variáveis
    let resp = window.document.querySelector('section#saida')
    let ano = Number(window.prompt('Qual é o ano que  quer verificar?'))
    
    // Cria um resultado para situação
    let bi = 'É BISSEXTO'
    let nobi = 'NÃO É BISSEXTO'

    resp.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    // Analisa se o ano é bissexto ou não e mostra o resultado na tela
    if (ano % 4 == 0) {
        if (ano % 100 != 0 || ano % 400 == 0) {
            resp.innerHTML += `O ano de ${ano} <span id="bi">${bi}</span>\&#x2705`
        } else {
            resp.innerHTML += `O ano de ${ano} <span id="nobi">${nobi}</span>\&#274C`
        }
    } else {
        resp.innerHTML += `O ano de ${ano} <span id="nobi">${nobi}</span>\&#x274C`
    }
}