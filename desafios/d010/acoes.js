function calcular() {
    let resp = window.document.querySelector('section#saida')
    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c?'))

    delta = (b ** 2) - (4 * a * c)

    resp.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    resp.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    resp.innerHTML += `<p>O cálculo realizado será <strong>\&#916; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
    resp.innerHTML += `<p>O valor calculado foi <mark><strong>\&#916; = ${delta}</strong></mark></p>`
}