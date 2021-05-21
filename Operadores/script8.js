//COMPARAÇÇOES ENTRE VALORES BOOLEANOS E NÃO BOOLEANO

//Em js existem os valores Falsy Truthy

//FALSY 
/*
    undefined
    null
    0
    ''
    false
    NaN    
*/

//TRUTHY
/*
    São todos os valores que não são Falsy
*/

/* 
    O compaarador (ou) precisa apenas de um valor Truthy para que retorne True
    Neste caso se fazer a opreração
*/

console.log(false || 'Aldair')
console.log('')
/*
    Vai retornar Aldair porque para o operdor (ou)
    basta apenas que uma condção seja verdadeira para que retorne verdadeira e com o valor ('Aldair') não é um valor Falsy mas sim Truthy nesse caso ele vai retornar 'Aldair'
*/

/*
    E se compararmos mais de tres condições com com o operador (ou) ele vai retornar o primeiro valor Truthy que ele encontra.
    
    OBS: Basta apenas que uma das condicoes seja verdadeira para que ele exiba o primeiro resultado
    Ex:  
*/

console.log(false || 1 || 2)
console.log()
console.log(false || 1 || 'Aldair')

let corPersonalizada = 'Vermelho'
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao
console.log(corPersonalizada)

