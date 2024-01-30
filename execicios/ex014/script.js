function interagir() {
    let info =  new Date()
    let res = window.document.querySelector('div#saida')

    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${info}</mark></p>`
}