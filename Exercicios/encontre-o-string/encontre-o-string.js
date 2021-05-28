 const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Aldair André',
    personagem : 'Thor' 
 }

const exibirPropriedades = obejeto => {
    if(typeof(obejeto) === 'object'){
        for(chave in obejeto){
            if(typeof(obejeto[chave]) === 'string'){
                console.log(chave,":",obejeto[chave])
            }
        }
    }else
        console.log("Não é um objeto.")
}

exibirPropriedades()