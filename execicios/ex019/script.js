function calcular() {
    let n1 = Number(window.prompt('Primeiro valor:'))
    let n2 = Number(window.prompt('Segundo valor:'))
    let menu = `Valore informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`
    let opc = Number(window.prompt(menu))
    res = window.document.querySelector('div#saida')

    res.innerHTML = `<h2>Calculando...</h2>`

    // Realiza a operação de acordo com a opção escolhida pelo usuário
    switch (opc) {
        case 1:
            res.innerHTML += `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`
            break
        case 2:
            res.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`
            break
        case 3:
            res.innerHTML += `<p>${n1} * ${n2} = <strong>${n1 * n2}</strong></p>`
            break
        case 4:
            res.innerHTML += `<p>${n1} / ${n2} = <strong>${n1 / n2}</strong></p>`
            break;
        default:
            window.alert(`OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`)
            res.innerHTML = null
            break
    }

    
    
}