# FIND

<p>
    Esta função auxiliar é particularmente interessante quando o
    objetivo é encontrar um item específico dentro de um Array.</br>
    Digamos, por exemplo, que de uma lista de alunos queremos
    somente o registro que contenha o nome “Aldair”. O que faríamos
    tradicionalmente é algo nesse sentido:
</p>

```
$ node find1.js
```
---
## Usando metodo find
</br>

<p>
    Com o método filter , temos o mesmo efeito de forma mais
    clara:
</p>

```
$ node find1.js
```

<p>
    Para cada elemento da lista, recuperamos a propriedade do
elemento e o comparamos com o nome que estamos buscando.</br> Se
der igualdade, atribuímos o valor na variável aluno instanciada
antes do loop e o encerramos. Com o find , é possível reescrever
este código e obter o mesmo efeito, com a ressalva de que vamos
pegar somente o primeiro item que satisfaz o critério de busca.</br> Fica
assim:
<p>

```
$ node find2.js
```

* OBS:
   * Caso na lista existissem dois alunos com o nome “Aldair”, somente
    o primeiro seria retornado. Para contornar este caso, precisaríamos
    usar um critério de busca mais específico.