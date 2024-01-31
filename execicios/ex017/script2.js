let res = window.document.querySelector('div#saida')

function gerar() {
    // Declaração de variáveis
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)
    alert(aleatorio)
    // Imprime o resultado
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() {
    // Limpa a tela
    res.innerHTML = null
}