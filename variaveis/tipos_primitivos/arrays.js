//Array

//São variaveis capazes de armazenar mais de de um tipo de dados ou valores que podem ser acessados a partir de um indice

let alunoNumero= ['Aldair',1,'Janaina',3,'João',10]

//Acessando Array a partir do indice 

console.log(alunoNumero[0])

//Vendo tamanho do Array

console.log(alunoNumero.length)

//Comaparando valor do array

let valoTeste = 1 //Valor de teste para condição

if(alunoNumero[1]==Number){
    if(alunoNumero[1]===valoTeste){
        console.log(`São iguais\n ${alunoNumero[1]} = ${valoTeste}`)

    }else{
        console.log("É um numero mais não são iguais")
        console.log(`${alunoNumero[1]} Diferente de ${valoTeste}`) //Template string
    }
}else{
    console.log("Não é um número")
}

