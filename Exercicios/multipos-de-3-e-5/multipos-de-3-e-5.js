//Cria uma função que retorne a soma de todos os multiplos de 3 e 5

const somar = limite => {
    let mutiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(let i = 0;i <= limite; i++){
        if(i % 3 === 0){
            mutiplosDe3 += i; 
        }else if(i % 5 === 0){
            multiplosDe5 += i
        }
    }
    console.log(mutiplosDe3 + multiplosDe5)
}

somar(10)