function calcular() {
    //Declaração de variáveis
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    res = window.document.querySelector('div#res')

    // Calcula a média
    media = (n1 + n2) / 2

    // Verificação da média
    let msg
    if (media < 6) {
        msg = 'Estude um pouco mais!'
    } else {
        msg = 'Meus parabéns!'
    }
    // Imprime o resultado
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</span>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}