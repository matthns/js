const input = require('readline-sync')

let acumulador = 0

acumulador += 10

acumulador -= 5

acumulador += acumulador + 2

acumulador++

console.log(acumulador)

console.clear()

//for

for(let i = 0; i < 10; i++) {
    console.log('Repetição: ', i)
}

console.clear()


let nota
let soma = 0

for(let i = 1; i < 4; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))
    soma = soma + nota
}

//uso da crase = template string

console.log(`A média do aluno é: ${soma/3}`)