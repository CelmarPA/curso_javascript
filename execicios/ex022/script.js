function contar() {
    // Declaração de variáveis
    let res = window.document.querySelector('div#saida')
    let count = 1

    res.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`

    // Loop  para contar de 1 até 10 marcando os pares
    while (count <= 10) { 
        if (count % 2 == 0) {
            res.innerHTML += `<strong><mark>${count}</mark></strong> &#x1F449; `
        } else {
            res.innerHTML += `${count} &#x1F449; `
        }
        count++
    }

    res.innerHTML += `&#x1F3C1;`
} 