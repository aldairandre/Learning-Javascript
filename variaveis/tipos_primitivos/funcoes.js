//fUNÇÃO QUE REALIZA TAREFA MAS NÃO RETIRNA NADA

function dizerNome(){
    console.log('Aldair')
    console.log()
}

dizerNome()

//Função que retorna o multipolde um numero
/*Em funções que retonam valores é possivel add valores o valor de retorno da função em uma variavel, o que não é possivel emm  uma função que não retorna nada
*/

function MultiplicarPorDois(valor){
    return valor * 2
}

//Add valor de retorno em uma variavel

let dobro = MultiplicarPorDois(2)

console.log(dobro)