"use strict";
/**
 * by: W3School
 * Classes são modelos para objetos
 * 
 * Os metodos internos da classe por convensão o seu nome comeca com um _
 * Os metodos internos dos da classe podem ser reutilizado em outras instancias da classe utilizando o this
 * 
 * Dentro da class deve existir sempre um metodo contructor, é basicamente neste bloco que poderemos receber parametros para a criacao do modelo de objecto.
 * 
 * get & set
 * get é uma funcao interna da class para acessar a propriedade de uma instancia(metodo/funcao) de uma class
 * set é uma funcao para atrituir uma propriedade a uma instancia(metodo/funcao) de uma class
 * Isso é muito bom para o tratamento de dados e de seguraça, etc.
 */

/**
 * Herancas e Extands
 */

class Pessoa {
    constructor(nome) {
        this._nome = this._captalize(nome) /*O _ é uma convensão* */
    }

    set nome(string){
        this._nome = this._captalize(string)
    } //Metodo que permite alterar uma propriedade de uma de uma instancia da classe

    get nome(){
        return this._nome
    } //Metodo que permite retornar uma propriedade de uma de uma instancia da classe 

    _captalize (string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    } // Metodo interno

    walk() {
        return `${this._nome} esta andando.`
    }
}

class Developer extends Pessoa {
    constructor(nome,codeLanugage){
        super(nome)
        this._codeLanugage = codeLanugage
    }

    get codeLanugage() {
        return this._codeLanugage
    }
    code() {
        return `${this.nome}  esta codando em ${this.codeLanugage}`
    }
}

/* let pessoa = new Pessoa('aldair')
pessoa.nome = 'joao'
console.log(`Objecto ${pessoa.nome} criado`);
console.log(pessoa.walk())
console.log('===========================================\n'); */

let developer = new Developer('Aldair','Javascript ')
console.log(developer.code());

let lucas = new Developer('Lucas','CSS')

console.log(lucas.code());