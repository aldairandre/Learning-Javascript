let pesoDasMalas = [12,32,21,29];

let temMalaAcimaDoPeso = false;

for(let i = 0; i < pesoDasMalas.length; i++){
    if(pesoDasMalas[i] >= 30){
        temMalaAcimaDoPeso = true;
    }
}

console.log(temMalaAcimaDoPeso); // true