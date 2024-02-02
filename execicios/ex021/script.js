function contar() {
    // Declaração de variáveis
    let res = window.document.querySelector('div#saida')
    let count = 1

    res.innerHTML += `<h2>Contando de 1 até 10</h2>`

    // Loop para contar de 1 até 10
    while (count <= 10) {
        res.innerHTML += `${count} `
        if (count < 10) {
            res.innerHTML += `&#x1F449; `
        } else {
            res.innerHTML += `&#x1F3C1;`
        }
        count++
    }
}