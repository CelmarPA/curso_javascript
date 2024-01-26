function avaliar() {
    // Declaração de variáveis
    let resp = window.document.querySelector('section#saida')
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Primeira nota de ${nome}`))
    let n2 = Number(window.prompt(`Segunda nota de ${nome}`))

    // Calcula a média
    media = (n1 + n2) / 2

    // Impressão das notas e média
    resp.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    resp.innerHTML += `<p>Com as notas ${n1.toLocaleString('pt-BR', {minimumFractionDigits: 1, maximumFractionDigits: 2})} e ${n2.toLocaleString('pt-BR', {minimumFractionDigits: 1, maximumFractionDigits: 2})}, a <strong>média é ${media.toLocaleString('pt-BR', {minimumFractionDigits: 1, maximumFractionDigits: 2})}</strong></p>`
    
    // Verifica a situação
    if (media > 6) {
        resp.innerHTML += `<p>Com média acima de 6,0, o aluno está <span id="aprov">APROVADO</span></p>`
    } else if (media >= 3 & media <= 6) {
        resp.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <span id="recup">RECUPERAÇÂO</span></p>`
    } else {
        resp.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <span id="reprov">REPROVADO</span></p>`
    }
}