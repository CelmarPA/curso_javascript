function calcular() {
    let num = window.document.querySelector('input#txtnum').value
    let saida = window.document.querySelector('select#txtsaida')

    if (num.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        num = Number(num)

        // Limpa a tabela antes de adicionar
        saida.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            // Cria um elemento  option
            let option = window.document.createElement('option')

            // Define o valor e texto de cada option
            option.value = `resultado${c}`
            option.text = `${num} x ${c} = ${num * c}`

            // Adiciona o option ao select
            saida.appendChild(option)
        }
    }
}