//Os objetos em js são dinamicos, é possivel add e remover propreidade e metodos no deorrer da execução

const mouse = {
    cor : 'red',
    marca : 'dazz'
}

mouse.velocidade = 5000;

mouse.trocaDPI = function () {
    console.log('Mudando DPI');
}

//Apagando propridade de um objeto

delete mouse.velocidade;
delete mouse.trocaDPI;

console.log(mouse)




