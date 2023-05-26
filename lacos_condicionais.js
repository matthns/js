const input = require('readline-sync')

const numero_sorteado = 5

let numero = Number(input.question('Digite um numero: '))

while(numero !== numero_sorteado) {
    console.log('Vc errou! Tente novamente')

    numero = Number(input.question('Digite um numero: '))
}

console.log('Você acertou!')