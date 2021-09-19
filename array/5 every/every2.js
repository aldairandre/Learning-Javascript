const alunos = [
    {nome:'Aldair', idade: 21},
    {nome:'Macrina', idade: 19},
{   nome:'pedro', idade: 18}
]

let todosAlunosDeMaior = alunos.every(function(aluno){
    return aluno.idade >= 18 ;
}) 

console.log(todosAlunosDeMaior);
