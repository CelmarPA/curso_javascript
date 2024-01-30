function analisar() {
    // Declaração de variáveis
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')  // Cria uma lista dos meses
    let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')  // Cria uma lista dos dias da semana
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let dia_semana = data.getDay()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    let res =  window.document.querySelector('div#saida')

    // Imprime o resultado
    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    res.innerHTML += `<p>Ano:<mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${semana[dia_semana]}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${sec}</mark></p>`
}