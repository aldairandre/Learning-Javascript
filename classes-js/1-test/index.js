"use strict";

import Developer from "./Developer/Developer.js";
import Pessoa from "./pessoa/Pessoa.js";

console.log("\n")
let pessoa = new Pessoa('Aldair')
console.log(`Objecto ${pessoa.nome} criado`);
console.log(pessoa.walk())
console.log('===========================================\n');

let developer = new Developer('Aldair','Javascript ')
console.log(developer.code());

let lucas = new Developer('Lucas','CSS')

console.log(lucas.code());