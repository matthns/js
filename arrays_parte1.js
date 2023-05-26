let arr = ['Matheus', 16, 1.77, true] //array

console.log(arr)

//acessando array 
console.log('-----')

console.log(arr[0])

console.clear()

//ver tamanho do array
console.log(arr.length)

console.clear()

for(i = 0; i < arr.length; i++){
    console.log(`O dado é no array é ${arr[i]}`)
}

console.clear()

//percorrendo os elementos do array
for(let elemento of arr) {
    console.log(`${elemento}`)
}

//percorrendo os índices do array
for(let elemento in arr) {
    console.log(`${elemento}`)
}

//por indice

for(let elemento in arr) {
    console.log(elemento, arr[elemento])
}