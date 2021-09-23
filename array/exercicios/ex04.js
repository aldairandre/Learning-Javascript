//Pegar a string de parenteses
//Transformar a string em um array
function validaParenteses (parenteses){
    const parentesesArray = parenteses.split('');
    let balanceado = !parentesesArray.reduce(function(soma,parentese){
        if(soma < 0) return soma;
        if(parentese === '(') return ++soma;
        if(parentese === ')') return --soma;
        
    },3)
    return balanceado;
}

console.log(validaParenteses('()('));