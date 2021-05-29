//Construct Function

//Pascal Case- UmDOisTres

function Celular(marcaCelular,tamanhoTela,capacidadeDeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeDeBateria = capacidadeDeBateria,
    this.ligar() = function () {
        console.log('Fazendo Ligação...')
    }
}

function Carro(marca,motor,cor,numeroDePortas){
    this.marca = marca,
    this.motor = motor,
    this.cor = cor,
    this.numeroDePortas = numeroDePortas,
    liga() = function(){
        console.log('Ligando o Carro...')
    }
}

//Instaciando e criando um objeto celula

const celula = new Celular('ASUS',5.5,5000)

console.log(celula.capacidadeDeBateria())
