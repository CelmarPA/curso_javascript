function carregar() {
    // Declaração de variáveis
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    // Exibição das horas
    msg.innerHTML = `Agora são ${hora} horas.`

    // Condição para alterar as imagens
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        // #e2cd9f
        img.src = 'imagens/fotomanha.png'
        window.document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/fototarde.png'
        window.document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'imagens/fotonoite.png'
        window.document.body.style.background = '#515154'
    }
}