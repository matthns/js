//definição da função

function saudacao(){
    console.log('Bem-vindo!')
}

//chamada função
saudacao() 

console.clear()

//enviar parâmetros para a função

function saudacao(nome, curso='JS'){
    //curso='JS" é parâmetro default
    console.log(`${nome}, seja bem-vindo(a) ao curso de ${curso}`)
}

saudacao('Matheus')

console.clear()

//retorno da função

function soma(numero1, numero2) {
    console.log(`Valores: ${numero1} e ${numero2}`) //isso aqui acontece
    return numero1 + numero2 //a função acaba aqui
    console.log('Teste') //não vai acontecer
}

//return declara o fim da função, nada além dela é executado

let resultado = soma(10,20) //salvou na variável e não apenas imprimindo
console.log(resultado / 2)

console.clear()

function maiorDoQue50(numero){
    if(numero > 50){
        return true //se acondição for falsa, executa a linha de baixo
    }
    console.log('Numero não é > 50')
}

maiorDoQue50(49)

//ver sobre arrow function

