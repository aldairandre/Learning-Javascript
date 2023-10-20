const celular = {
    marcaCelular : 'Asus',
    tamanhoTela : {
        verttical : 155,
        horizontal : 75
    },
    liga: function() {
        console.log('Fazendo Ligação')
    }
}

/*Um das formas mais directas de fazer uma copia é usando Object.assign(o alvo, e objeto que se deseja clonar), é possivel tbm add uma propriedade nova ao objeto criado no momento da sua criação
*/


const novoObjeto = Object.assign({
    bateria : 5000
},celular);

console.log(novoObjeto);

//Exite uma outra chamada expred

const novoObjeto2 = {...celular}


console.log(novoObjeto2)