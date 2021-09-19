let pesoDasMalas = [12,32,21,29];

let temMalaAcimaDoPeso = pesoDasMalas.some(function(pesoDaMala){
    return pesoDaMala >= 30;
})

console.log(temMalaAcimaDoPeso); // true