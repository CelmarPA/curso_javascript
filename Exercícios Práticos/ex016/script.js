function contagem() {
    // Declaração de variáveis
    let ini = window.document.querySelector('input#txtini').value
    let fim = window.document.querySelector('input#txtfim').value
    let pas = window.document.querySelector('input#txtpas').value
    let saida = window.document.querySelector('div#saida')

    // Validaçõa dos dados
    if (ini.length == 0 || fim.length == 0 || ini == fim) {
        saida.innerHTML = `<p>Impossível contar!</p>`
    } else {
         // Transforma o valor em um número
        ini = Number(ini)
        fim = Number(fim)
        pas = Number(pas)

        // Verifica se o passo é válido
        if (pas.length == 0 || pas <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            pas += 1
        }

        // Faz a contagem 
        if (ini < fim) {        
            saida.innerHTML = `Contando: <br>`
            while (ini <= fim) {
                saida.innerHTML += `${ini} \u{1F449} `
                ini += pas
            }
        } else if (ini > fim) {
            saida.innerHTML = `Contando:<br>`
            while (ini >= fim) {
                saida.innerHTML += `${ini} \u{1F449} `
                ini -= pas
            }            
        }
        saida.innerHTML += `\u{1F3C1}`
    }   
}   