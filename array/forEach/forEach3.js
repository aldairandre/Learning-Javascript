/**
 * Bem legal, não é mesmo? Mas calma, nem tudo são flores. 
 * É preciso estar bastante atento ao fato de que os elementos processados pelo forEach são determinados antes da primeira invocação da função de callback .
 * Isso significa que os elementos que forem adicionados depois da chamada do método não serão vistos.
 */


const canais = ["Globo", "Sbt", "Record"];

canais.forEach(function (canal) {
    canais.push("RedeTV"); // este item será ignorado
    console.log(canal);
})
console.log('\n');

/**
 * Veja com atenção o que foi feito. Atribuímos a uma variável chamada canais uma lista que representa canais da televisão aberta brasileira. 
 * A seguir, invocamos o forEach e, dentro do callback , inserimos o canal RedeTV na nossa lista. 
 * Ao executar o código, podemos ver que a RedeTV nunca é exibida:
 * Globo
 * Sbt
 * Recor
 */

/**
 * Isso acontece exatamente porque os elementos processados pelo forEach são determinados antes da primeira invocação da função de callback. 
 * Entretanto, isso não quer dizer que os valores não foram adicionados à lista. 
 * Ao adicionar um segundo console.log ao final do código para exibir a lista, notamos que a RedeTV foi adicionada várias vezes ao nosso Array . 
 * Uma cópia para cada
 * iteração:
 */

console.log(canais);

// [ 'Globo', 'Sbt', 'Record', 'RedeTV', 'RedeTV', 'RedeTV' ]