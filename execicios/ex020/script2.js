function analisar() {
    // Declaração das variáveis
    let mes = window.prompt('Digite o mês em extenso (ex: Setembro)')
    let res = window.document.querySelector('div#saida')
    let estacao

    // Analisa o mês e verifica qual estação
    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Múltiplos casos podem ser testados em uma mesma linha
            estacao = `<mark><strong>INVERNO</strong></mark>`            
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = `<mark><strong>PRIMAVERA</strong></mark>`  
            break;
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = `<mark><strong>VERÃO</strong></mark>` 
            break;
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = `<mark><strong>OUTONO</strong></mark>` 
            break
        default:
            estacao = `<mark><strong>INDEFINIDO</strong></mark>`  
            break;
    }

    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação ${estacao}.</p>`
}