//Coerção (conversão) de tipos

//explícita
const numero = 10

console.log(numero, typeof numero)

const numeroEmString = String(numero)
console.log(numeroEmString, typeof numeroEmString)

console.log(Number('123456'))
console.log(parseFloat('123.456'))
console.log(parseInt('123456.101010'))
console.log(Boolean(0))
console.log(Boolean(122121212))

console.clear()

//implícita
console.log(10 + 1) //soma
console.log(10 + '1') //concatena
console.log('10'- 1) //converte o txt para number, subtração, divisão, exp, resto

console.log(10 - 'x') //NaN Not a Number

console.clear()

n = n - 1
console.log(n)
