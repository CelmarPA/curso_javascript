function contar() {
    // Declaração de variáveis
    let saida = window.document.querySelector('div#saida')
    let num = Number(window.document.querySelector('input#txtnum').value)
    let count = 0

    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`

    // Loop para contagem
    while (count <= num) {
        saida.innerHTML += `${count} &#x1F449; `
        count++
    }

    saida.innerHTML += `&#x1F3C1;`
}