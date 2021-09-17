'use strict';

const numeros = [1,2,3];
let dobro = numeros.map(function(numero){
    return numero * 2
})

console.log(`Primeiro Array: \n ${numeros}`); // [1,2,3]
console.log(`Dobro Array: \n ${dobro}`); // [2,4,6]