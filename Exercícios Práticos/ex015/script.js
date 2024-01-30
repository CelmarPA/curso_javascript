function verificar() {
    // Declaração de variáveis
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    
    // Verifica se o ano de nascimento é valido
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        // Declaração das outras variáveis
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        // Cria  um elemento (tag) img
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto') // Coloca o id como foto

        // Verifica o sexo e a idade do usuário 
        if (fsex[0].checked)  {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png') // Define o img com a fonte imagens e a foto
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            } 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img) // Adiciona o elemento elemento
    }
}