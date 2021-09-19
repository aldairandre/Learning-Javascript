'use strict';

const alunos = [
    {nome: 'Aldair'},
    {nome: 'Macrina'},
    {nome:'Wene'}
]

let aluno;

for(let i = 0; i < alunos.length; i++){
    if(alunos[i].nome === 'Aldair'){
        aluno = (alunos[i]);
        break; // evita percorrer o resto da lista
    }
}

console.log(aluno);//[{nome: 'Aldair'}]