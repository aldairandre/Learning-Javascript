/**
 * FOREACH
 * O forEach é o primeiro método que veremos. 
 * Ele é uma mão na roda para quando precisamos passar por todos os elementos de dentro de um Array .
 * Considere o caso no qual temos de mostrar no console todos os itens de uma lista de nomes.
 * Com ES5, utilizando o laço de repetição for , estamos acostumados a fazer algo assim:
 * 
 * var nomes = ['maria', 'josé', 'joão'];
 * for(var i = 0; i < nomes.length; i++) {
 *      console.log(nomes[i]);
 * }
    --> Saida // maria, josé, joão
 */



const nomes = ['Aldair', 'Macrina', 'Wene']
nomes.forEach(function (nome) {
    console.log(nome);
})

/**
 * Neste exemplo, somente emitimos no console seu valor. 
 * Mas nesta função de callback , podemos fazer qualquer coisa com o valor da variável, inclusive passá-la como parâmetro para outros métodos.
 */

//forEach2.js abra