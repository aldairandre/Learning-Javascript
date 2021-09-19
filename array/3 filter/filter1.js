const alunos = [
    {nome:'Aldair', idade: 21},
    {nome:'Macrina', idade: 19},
    {nome:'Wene', idade: 5}
]

let alunosDeMaior = [] 

for(let i = 0; i < alunos.length; i ++){
    if(alunos[i].idade >= 18){
        alunosDeMaior.push(alunos[i])
    }
}

console.log(alunosDeMaior);

// [{nome:'Aldair', idade:21}, {nome:'Macrina', idade:19}]