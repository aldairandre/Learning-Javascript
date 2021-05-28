const medidorVelocidade = velocidade => {
    if(typeof(velocidade) === 'number'){
        const maxvelo = 70;
        const kmPontos = 5
        if(velocidade <= maxvelo){
            return 'OK';
        }else if(velocidade > maxvelo){
            let pontos = Math.floor((velocidade - maxvelo) / kmPontos);
            if(pontos >= 12){
                console.log('Carteira suspensa');
            }else
                console.log('Pontos: ',pontos)
        }
    }
}

medidorVelocidade(130)