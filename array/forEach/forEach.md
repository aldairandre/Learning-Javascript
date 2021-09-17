# FOREACH

<p>
 O forEach é o primeiro método que veremos. 
 Ele é uma mão na roda para quando precisamos passar por todos os elementos de dentro de um Array .
 Considere o caso no qual temos de mostrar no console todos os itens de uma lista de nomes.
 Com ES5, utilizando o laço de repetição for , estamos acostumados a fazer algo assim:
</p>

```
var nomes = ['maria', 'josé', 'joão'];
 for(var i = 0; i < nomes.length; i++) {
       console.log(nomes[i]);
 }
// maria, josé, joão
```

<p>
    Neste exemplo, somente emitimos no console seu valor. 
    Mas nesta função de callback , podemos fazer qualquer coisa com o valor da variável, inclusive passá-la como parâmetro para outros métodos.
</p>

```
$ node forEach.js
```

<p>
    Entretanto, note que a função de callback não precisa
    necessariamente ser anônima. Podemos defini-la antes e atribuí-la a
    uma variável para passá-la como parâmetro ao forEach :
</p>

```
$ node forEach2.js
```

<p>
  Bem legal, não é mesmo? Mas calma, nem tudo são flores. 
  É preciso estar bastante atento ao fato de que os elementos processados pelo forEach são determinados antes da primeira invocação da função de callback .
  Isso significa que os elementos que forem adicionados depois da chamada do método não serão vistos.
</p>

```
$ node forEach3.js
```

<p>
  Veja com atenção o que foi feito. Atribuímos a uma variável chamada canais uma lista que representa canais da televisão aberta brasileira.</br>
  A seguir, invocamos o forEach e, dentro do callback , inserimos o canal RedeTV na nossa lista. </br>
  Ao executar o código, podemos ver que a RedeTV nunca é exibida:</br>
  Globo</br>
  Sbt</br>
  Recor</br>
  Isso acontece exatamente porque os elementos processados pelo forEach são determinados antes da primeira invocação da função de callback. </br>
  Entretanto, isso não quer dizer que os valores não foram adicionados à lista. 
  Ao adicionar um segundo console.log ao final do código para exibir a lista, notamos que a RedeTV foi adicionada várias vezes ao nosso Array . </br>
  Uma cópia para cada
  iteração:
<p>

```
$ node forEach4.js
```

<p>
    Bem legal, não é mesmo? Mas calma, nem tudo são flores. </br>
    É preciso estar bastante atento ao fato de que os elementos processados pelo forEach são determinados antes da primeira invocação da função de callback.</br>
    Isso significa que os elementos que forem adicionados depois da chamada do método não serão vistos.
</p>