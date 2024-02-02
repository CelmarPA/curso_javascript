function fatorial() {
    // Declaração de variáveis
    let saida = window.document.querySelector('section#saida')
    let num = Number(window.document.querySelector('input#fnum').value)
    saida.innerHTML += `<h2>Calculando ${num}!</h2>`
    let factorial = 1

    // Loop para  calcular o fatorial
    while (num >= 1) {
        if (num > 1) {
            saida.innerHTML += `${num} x `
        } else {
            saida.innerHTML += `${num} = `
        }
        factorial *= num
        num --
    }
    saida.innerHTML += `<strong>${factorial.toLocaleString('pt-BR')}<strong>`
}