let nome = 'Aldair'; //String literal
let idade = 18; //String literal
let estaAprovado = true; //Boolean
let sobrenome; //Undefined
let corSelecinada = null; //Redefinir um valor


//Objeto 
//Um objeto é constituido por uma chave e um valor, cada propriedade ou classe de um objeto e separado por uma virgula 
let pessoa = {
    nome : 'Aldair',
    sobrenome : 'André',
    idade : 21 
};

//Vendo todas as propriedades de um Objeto

console.log(pessoa);

//Para acessar cada proriedade de um objeto basta colocar o nome do objeto um ponto e seguido do nome da propriedade 

console.log('Nome: '+pessoa.nome);
console.log('Sobrenome: '+pessoa.sobrenome);
console.log('Idade: '+pessoa.idade);