const celelula = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeDeBateria : 5000,
    ligar : function() {
        console.log('Fazendo ligação...')
    }
}

//E se por acaso ve tivessse mais de 10 ou 100 celulares?
//Voce copiaria o objeto acima 10 vezes?
//Errado, usa se a Factory Functions
//Que nesse caso seria uma função com para metrizada com as propreidades do objeto 

//FACTORY FUNCTION
//Forma basica de criar uma FF
function criarCelular(marcaCelular,tamanhoTela,capacidadeDeBateria) {
    return {
        marcaCelular : marcaCelular,
        tamanhoTela : tamanhoTela,
        capacidadeDeBateria : capacidadeDeBateria,
        ligar : function() {
            console.log('Fazendo ligação...')
        }
    }
}

//FACTORY FUNCTION 
//Forma simplificada

/**
 * Quando a propriedade do obejto tem o mesmo nome que o parametro da função é possivel simplificar a função fornecendo apenas o nome da propriedade dentro do objeto.
 */

function criaCarro(marca,modelo,cor,numeroPortas){
    return {
        marca,
        modelo,
        modelo,
        cor,
        numeroPortas,
        ligar(){
            console.log('Ligando o carro...')
        }
    }
}

const tlf1 = criarCelular('Samsung',320,5000)

for (let propriedadeName in tlf1) {
    console.log(tlf1[propriedadeName]);
    
}

//console.log(typeof(criarCelular))
