var res = window.document.querySelector('div#saida')

function gerar() {
    // Declaração de variáveis
    var aleatorio = parseInt(Math.random() * 100) + 1 // A funcção random do Math gera um número aleatório entre 0 e 1, usando parseInt e multiplicando por 100 e adicionando + 1 consigo gerar números de 1 a 100
    
    // Imprime o resultado
    res.innerHTML += `<p>Acabei de pensar no número <mark>${aleatorio}</mark>!</p>`
}

function limpar() {
    // Limpa a tela
    res.innerHTML = null
}