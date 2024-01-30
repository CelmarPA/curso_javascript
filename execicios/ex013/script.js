function analisar() {
    // Declaração de variáveis
    let n1 = Number(window.prompt('Digite um número:'))
    let n2 = Number(window.prompt('Digite outro número:'))
    let res = window.document.querySelector('div#result')

    // Analisa qual maior valor
    if (n1 > n2) {
        analise = `o maior valor é <strong>${n1}</strong>`
    } else if (n2 > n1) {
        analise = `o maior valor é <strong>${n2}</strong`
    } else {
        analise = 'ambos são <strong>IGUAIS</strong>'
    }

    // Imprime o resultado
    res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ${analise}</p>`
}