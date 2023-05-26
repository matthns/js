//Operadores Bool

//igualdade == ou ===
//desigualdade != ou !===
//maior que >
//menor que <
//maior ou igual =>
//menor ou igual <=
// e &&
// ou ||

const numero = 10 //um = atribuição
console.log(numero == 10)
console.log(numero > 20)
console.log(10 == '10')

//js só compara o conteúdo

console.log(10 === '10')
// usar sempre === para comparar tipo e conteúdo

console.clear()

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10') //usar um = a mais para comparar tipo e conteúdo

console.clear()

let idade = 26
let tenhoCHH = true

const possoDirigir = idade >= 18 && tenhoCHH === true

console.log('Posso dirigir?', possoDirigir)

console.clear()

idade = 40
const votoFacultativo = idade < 18 || idade >= 70

console.clear()

const estouGostandoDoCurso = false

console.log(!estouGostandoDoCurso)
