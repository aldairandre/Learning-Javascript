//Se voce quiser saber mais sobre a função Math va para https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

//Metos mais usado 

//Math.random() 
//Gera numeros aleatório ex

const geraNumero =  () =>  Math.random();


const funcaoComMetodoDe = {
    maiusculas : texto => texto.toUpperCase()
    ,minuscula : texto => texto.toLowerCase()
};

console.log(typeof(geraNumero));

console.log(funcaoComMetodoDe.maiusculas('aldair'));
console.log(funcaoComMetodoDe.minuscula('JOAO'));