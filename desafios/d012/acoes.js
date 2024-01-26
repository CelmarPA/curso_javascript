function verificar() {
    // Declaração de variáveis
    let resp = window.document.querySelector('section#saida')
    let preco_ant = Number(window.prompt('Qual era o preço anterior do produto?'))
    let preco_atu = Number(window.prompt('Qual é o preço atual do produto?'))
    
    resp.innerHTML = `<h2>Analisando os valores informados</h2>`
    // Verifica a diferença dos valores
    if (preco_ant < preco_atu) {
        dif = preco_atu - preco_ant
        perc = (dif * 100) / preco_ant
        situacao = 'caro'
        variacao = 'subiu'
        mudanca = 'cima'
    } else if (preco_ant > preco_atu) {
        dif = preco_ant - preco_atu
        perc = (dif * 100) / preco_atu
        situacao = 'barato'
        variacao = 'caiu'
        mudanca = 'baixo'
    } else {
        resp.innerHTML += `<p>Não houve mudança, os valores são identicos!</p>`
        return;
    }

    // Fomatação dos valores em monetários
    preco_ant = preco_ant.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    preco_atu = preco_atu.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    dif = dif.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

    // Impressão dos resultados
    resp.innerHTML += `<p>O produto custava ${preco_ant} e agora custa ${preco_atu}.</p>`
    resp.innerHTML += `<p>Hoje o produto está mais ${situacao}.</p>`
    resp.innerHTML += `<p>O preço ${variacao} ${dif} em relação ao preço anterior.</p>`
    resp.innerHTML += `<p>Uma variação de ${perc.toFixed(2).toString().replace('.', ',')}% para ${mudanca}.</p>`
}