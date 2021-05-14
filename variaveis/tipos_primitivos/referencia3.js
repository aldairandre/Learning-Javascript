//FUNCÕES

//Var

let corSite = 'Azul'

let corSite2;

//Sintaxe basica sem parametros

function resetCor(){
    corSite = ''
    console.log('Cor resetada')
}

//Sintaxe basica com parametros

function resetCor2(cor){
    corSite = cor
    console.log('Cor resetada')
}

console.log(corSite)
resetCor()
console.log(corSite)

console.log(corSite)
resetCor2('Preta')
console.log(corSite)