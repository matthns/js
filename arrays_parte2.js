//funções geralmente tem parentesis
//ex: console.log(), etc.

let arr1 = [30,12,45,34,29]
let arr2 = []

//slice
console.log(arr1.slice(0,2)) //da pos 0 até menor que três

console.log(arr1.slice(0)) //do inicio e sem fim

console.clear()

//add elementos

console.log('Antes de adicionar', arr2)

arr2.push(10, 20, 30, 40)
arr2.push(60) //joga no final do array
arr2.unshift(15) //joga no início do array

console.log('Depois de adicionar', arr2)

console.clear()

//remoção de elementos

console.log('Antes de remover com o pop', arr2)

const elementoRemovido = arr2.pop() //remove por padrão o último elemento

console.log('O elemento removido foi: ', elementoRemovido)


console.log('Depois de remover com o pop', arr2)


console.clear()

console.log('Antes de remover com o shift', arr2)

const removeShift = arr2.shift() //remove por padrão o primeiro elemento

console.log('O elemento removido foi: ', removeShift)


console.log('Depois de remover com o shift', arr2)

console.clear()

//concatenar

console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))

console.clear()
//buscando elementos

console.log(arr1)

let indElemento34 = arr1.indexOf(34)

//se no meu array tiver dois numeros 34  ele retornará sempre o primeiro

console.log('Posição no array1: ',indElemento34)
console.log('----')

//para saber o último
let arr3 = [1,2,3,5,3]
console.log('Posição no array3: ', arr3.lastIndexOf(3))

console.log('----')

let indElemento35 = arr1.indexOf(35) //inexistente

console.log('Posição no array1: ',indElemento35)

//retornou negativo = inexistente

//verificar se o elemento está dentro do array

console.clear()

console.log(arr1)

//contem elemento 10?

console.log(arr1.includes(10)) //não contem 10
console.log(arr1.includes(45)) //contem 45

//invertendo array

console.clear()

console.log('arr1 normal: ', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido: ', arr1Invertido)