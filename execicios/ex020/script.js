function analisar() {
    // Declaração de lista e variáveis
    let out = Array('março', 'abril', 'maio')
    let inv = Array('junho', 'julho', 'agosto')
    let pri = Array('setembro', 'outubro', 'novembro')
    let ver = Array('dezembro', 'janeiro', 'fevereiro')
    let mes = window.prompt('Digite o mês em extenso (ex: Setembro)')
    let res = window.document.querySelector('div#saida')

    // Analisa o mês e verifica qual estação
    if (out.includes(mes.toLocaleLowerCase())) {
        estacao = `<mark><strong>OUTONO</strong></mark>`
    } else if (inv.includes(mes.toLocaleLowerCase())) {
        estacao = `<mark><strong>INVERNO</strong></mark>`
    } else if (pri.includes(mes.toLocaleLowerCase())) {
        estacao = `<mark><strong>PRIMAVERA</strong></mark>`
    } else if (ver.includes(mes.toLocaleLowerCase())) {
        estacao = `<mark><strong>VERÃO</strong></mark>`
    } else {
        estacao = `<mark><strong>INDEFINIDA</strong></mark>`
    }

    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação ${estacao}.</p>`
}