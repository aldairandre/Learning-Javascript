//Exercicio Notas Escola
//Obter a media a partir de um array

//Se a nota estiver entre
//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70,70,80];

//Função para cacular media de um array
const calcularMedia = array => {
    let soma = 0;

    for(valor of array) soma += valor; 

    return Math.floor(soma / (array.length));
}

//Função para analisar o que vai acontecer com a media do aluno

const mediaDoAluno = notas => {
    const media = calcularMedia(notas);

    if(media <= 59) return 'F';

    else if(media <= 69) return 'D';

    else if(media <= 79) return 'C';
    
    else if(media <= 89) return 'B';
   
    return 'A';
}

console.log(mediaDoAluno(array));

