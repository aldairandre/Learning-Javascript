const caps = ['oi','tudo','bem']

function upString (str){
    strUppercase = str.map(function(element){
        return element.toUpperCase()
     })
     return strUppercase;
}

console.log(upString(caps));