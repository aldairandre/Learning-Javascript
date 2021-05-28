const exibirTipo = limite => {
    if(typeof(limite) === 'number'){
        for(let i = 0;i <= limite;i++){
            if(i % 2 == 0){
                console.log(`${i} \"PAR\"`);
            }else 
                console.log(`${i} \"IMPAR\"`);
        }
    }else 
        console.log("Não é um numero.")
}

exibirTipo(2);