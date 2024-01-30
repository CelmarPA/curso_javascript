function verificar() {
    // Declaração de variáveis
    let num = Number(window.prompt('Digite um número:'))
    let res = window.document.querySelector('div#saida')
    // Verifica se é par ou ímpar
    if (num % 2 == 0) {
        sit = 'PAR'
    } else {
        sit = 'ÍMPAR'
    }

    // Mostra o resultado
    res.innerHTML = `<p>O número ${num} que foi digitado é <strong>${sit}</strong>!</p>`
}