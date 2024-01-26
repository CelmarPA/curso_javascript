function reajustar() {
    // Declarações de variáveis
    let resp = window.document.querySelector('section#saida')
    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let reajuste = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    // Calculo do valor de reajuste
    aumento = salario * reajuste / 100

    // Calculo do novo salário
    novo = salario + aumento

    // Formatação dos valores em monetários
    salario = salario.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    aumento = aumento.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    novo = novo.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

    // Impressão do resultado
    resp.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
    resp.innerHTML += `<p>O salário atual era ${salario}.</p>`
    resp.innerHTML += `<p>Com um aumento de ${reajuste}%, o salário vai aumentar ${aumento} no próximo mês.</p>`
    resp.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${novo}.</p>`
}
