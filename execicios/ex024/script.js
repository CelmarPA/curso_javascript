function contar() {
    // Declaração de variáveis
    let res = window.document.querySelector('div#saida')
    let count = 10

    res.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`

    // Loop para contagem
    while (count >= 1) {
        res.innerHTML += `${count} &#x1F449; `
        count--
    }

    res.innerHTML += `&#x1F3C1;`
}