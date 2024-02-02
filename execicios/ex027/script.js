function tabuada() {
    // Declaração de variáveis
    let saida = window.document.querySelector('section#saida')
    let num = Number(window.document.querySelector('input#fnum').value)
    let count = 1

    saida.innerHTML += `<h2>Tabuada de ${num}</h2>`

    // Loop para calcular a tabuada
    while (count <= 10) {
        saida.innerHTML += `${num} x ${count} = <strong>${num * count}</strong><br>`
        count ++
    }

}