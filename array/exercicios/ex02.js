function dobro(numeros){
    const numeroDobro = numeros.map(function(numero){
        return numero * 2 
    })
    return numeroDobro
}

console.log(dobro([1,2,3]));