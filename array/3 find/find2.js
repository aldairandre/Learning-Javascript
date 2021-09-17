'use strict';

const alunos = [
    {nome: 'Aldair'},
    {nome: 'Macrina'},
    {nome:'Wene'}
]

let aluno = alunos.find(function(aluno){
    return aluno.nome === 'Aldair';
})

console.log(aluno); // {"nome":"Aldair"}