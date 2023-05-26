//objeto é definido por chave e valor

let pessoa = {
    nome: 'Charles',
    'sobrenome-da-pessoa': 'Gales',
    idade: 78,
    rei: true,

    //elemento dentro do objeto é chamado de chave

}

//acessando dados da chave
console.log(pessoa.nome)
console.log(pessoa['nome']) //forma alternativa de acessar
console.log(pessoa['sobrenome-da-pessoa']) //só acessa desse jeito, chave complexa
console.log(pessoa.idade)
console.log(pessoa.rei)

console.clear()

//adicionando elemento no objeto
pessoa.altura = 1.77

console.log(pessoa.altura)

//removendo
delete pessoa.altura
console.log(pessoa)

//percorrendo um objeto
console.clear()
for(let chave in pessoa){
    console.log(chave)
}
