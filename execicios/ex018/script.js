function gerar() {
    // Gera um número aleátorio entre 1 e 100 apena quando a pagina é carregada
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    num = min + Math.trunc(dif * aleatorio) // Não declara a variável para que possa ser utilizada dentro de outra função
}

function adivinhar() {
    // Declaração de variáveis
    let palpite = Number(window.prompt('Qual é o seu palpite?'))
    let res = window.document.querySelector('div#saida')

    // Analisa o resultado
    if (palpite > num) {
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (palpite < num) {
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR</strong>!</p>`
    } else {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${num}!</p>`
        window.document.getElementById('botao').style.visibility = 'hidden' // Muda a visibilidade da botão
    }
}