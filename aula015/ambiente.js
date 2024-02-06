let num = [5, 8, 2, 9, 3] // Array num
num[3] = 6 // Adiciono o 6 na posição 3
num.push(7) // Adiciona o 7 na ultima posição
num.pop() // Remove o ultimo elemento
num.length // Verificar o tamanho do Array
num.sort() // Organiza os elementos dentro do Array

console.log(`Nosso vetor é o ${num}`)
console.log(num)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}