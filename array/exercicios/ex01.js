const numeros = [0,1,2,3,4,5];
numeros.forEach(function(numero){
    return numero % 2 === 0? console.log(`${numero} é par`) : console.log(`${numero} é impar`); 
})