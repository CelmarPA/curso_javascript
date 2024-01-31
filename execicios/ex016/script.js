function calcular() {
    // Declaração de variáveis
    var data = new Date()
    var nasc = Number(window.prompt('Em que ano você nasceu?'))
    var ano = data.getFullYear()
    res = window.document.querySelector('div#saida')

    // Calculo da idade
    idade = ano - nasc

    // Imprime o resultado
    res.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}