const exibirAsteristico = linhas => {
    let padrao = ''
    for(let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao)
    }
}
console.log(exibirAsteristico(10))