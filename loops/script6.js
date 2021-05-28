//for...in
//loope feito especificamente para interar com propriedades de um Objeto e elementos de um array.

const pessoa = {
    nome: 'Aldair',
    idade: 21
}

for(let chave in pessoa){
    console.log(chave,":",pessoa[chave]);
}

//Iterando sobre Array

const cores = ['preta','vermelha','amarela'];

for(let indice in cores){
    console.log(cores[indice])
}