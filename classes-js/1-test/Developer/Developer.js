import Pessoa from "../pessoa/Pessoa.js";

export default class Developer extends Pessoa {
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
