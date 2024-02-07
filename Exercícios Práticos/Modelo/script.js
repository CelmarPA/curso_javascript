// Declaração de variáveis
let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

// Função para verificar se o número está no intervalo permitido
function isNumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Função para verificar se o número já está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    // Se as condições forem atendidas o valor é adicionado a lista valores
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = window.document.createElement('option') // Cria um  elemento no select
        item.text = `Valor ${num.value} adicionado.` // Adiciona um texto ao elemento criado
        lista.appendChild(item) // Adiciona o texto na tela do select
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Limpa o número dentro do input num
    num.focus() // Foca na caixa do input num
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        // Declaração de variáveis
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        // Cria um loop que varre valores
        for (let pos in valores) {
            soma += valores[pos]
            // Verifica o maior valor
            if (valores[pos] > maior)  {
                maior = valores[pos]
            }
            // Verifica o menor valor
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        // Calcula a média
        media = soma / tot
        
        // Imprime os resultados
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo,  temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}