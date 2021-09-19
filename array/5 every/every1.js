const alunos = [
    {nome:'Aldair', idade: 21},
    {nome:'Macrina', idade: 19},
{   nome:'pedro', idade: 18}
]

var todosAlunosDeMaior = true;

for(let i = 0; i < alunos.length; i++){
    if(alunos[i].idade < 18){
        todosAlunosDeMaior = false
        break
    }
}
        
console.log(todosAlunosDeMaior); //true