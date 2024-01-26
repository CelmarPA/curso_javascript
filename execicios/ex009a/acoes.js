// Declaração de variáveis
let resp = window.document.querySelector('section#saida')
let cont = 0

// Inicia a contagem e mostra na tela
function contar() {
    cont += 1
    resp.innerHTML = `<p>O contador está com <mark>${cont}</mark> cliques.</p>`
}

// Zera a contagem e adiciona um valor nulo "vazio" a variável resp
function zerar () {
    cont = 0
    resp.innerHTML = `<p>O contador está com <mark>${cont}</mark> cliques.</p>`
}