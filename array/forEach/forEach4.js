
/**
 * Bem legal, não é mesmo? Mas calma, nem tudo são flores. 
 * É preciso estar bastante atento ao fato de que os elementos processados pelo forEach são determinados antes da primeira invocação da função de callback .
 * Isso significa que os elementos que forem adicionados depois da chamada do método não serão vistos.
 */
/**
 * 
 */
const canais = ["Globo", "Sbt", "Record"];

canais.forEach(function (canal) {
    canais.push("RedeTV"); // este item será ignorado
    console.log(canal);
})
console.log('\n');
console.log(canais);
