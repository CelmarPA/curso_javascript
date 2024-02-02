function contar() {
    // Declaração de variáveis
    let res = window.document.querySelector('div#saida')
    let count = 1

    res.innerHTML += `<h2>Números pares de 1 até 10<h2>`

    while (count <= 10) {
        if (count % 2 == 0) {
            res.innerHTML += `${count} &#x1F449; `
        }
        count++
    }

    res.innerHTML += `&#x1F3C1;`
}