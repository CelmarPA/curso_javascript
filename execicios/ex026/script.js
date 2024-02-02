function contar() {
    let saida = window.document.querySelector('section#saida')
    let n1 = Number(window.document.querySelector('input#fn1').value)
    let n2 = Number(window.document.querySelector('input#fn2').value)

    saida.innerHTML += `<h2>Contando de ${n1} até ${n2}</h2>`
    
    let ini = n1
    let fim = n2

    if (n1 < n2) {
        while (ini <= fim) {
            saida.innerHTML += `${ini} &#x1F449; `
            ini ++
        }   
    } else if (n1 > n2) {
        while (ini >= fim) {
            saida.innerHTML += `${ini} &#x1F449; `
            ini --
        }
    } else {
        saida.innerHTML += `Não é possivel contar, pois os números são iguais!`
    }

    saida.innerHTML += `&#x1F3C1`
    
}