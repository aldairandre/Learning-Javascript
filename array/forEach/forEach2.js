/**
 *  Entretanto, note que a função de callback não precisa
 necessariamente ser anônima. Podemos defini-la antes e atribuí-la a
 uma variável para passá-la como parâmetro ao forEach :
 */


function imprimeNome(nome) {
    console.log(nome);
}

const nomes = ['Aldair', 'Macrina', 'Wene']
nomes.forEach(imprimeNome);
console.log('\n');
