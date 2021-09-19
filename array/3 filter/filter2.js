const alunos = [
    {nome:'Aldair', idade: 21},
    {nome:'Macrina', idade: 19},
    {nome:'Wene', idade: 5}
]

let alunosDeMaior = alunos.filter(function(aluno){
    return aluno.idade >= 18
})

console.log(alunosDeMaior);

// [{nome:'Aldair', idade:21}, {nome:'Macrina', idade:19}]