//Escreva uma função que usa 2 numero o retorne o maior numero entre ele.
const maiorNumero = (x = 0,y = 0) => {
    if(typeof(x) && typeof(y) === 'number'){
        if(x > y){
            return x;
        }else if(y > x){
            return y;
        }else {
            return true;
        }
    }
    else{
        console.log("Um dos parametros esta errado.")
    }
}

console.log(maiorNumero(1,4)) ;
