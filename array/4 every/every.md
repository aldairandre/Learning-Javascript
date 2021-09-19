# EVERY 

<p>
    Esta é uma função auxiliar bem interessante. Ao contrário das
    outras que vimos até então, esta não retorna uma cópia do Array ,
    mas sim um valor booleano.
    A função every é pertinente para validar se todos os elementos
    de um Array respeitam uma dada condição. Para exemplificar,
    vamos novamente utilizar o cenário dos alunos maiores de idade.
    Mas para este caso, queremos saber se todos os alunos são maiores
    de idade. Primeiro, fazemos da forma convencional:
<p>

```
$ node every1.js
```

<p>
    Iteramos toda a lista procurando por alunos menores de idade. </br>
    Ao achar um, já encerramos a iteração e retornamos false . </br>
    Agora, observe como podemos simplificar essa lógica usando o every :
<p>

```
$ node every1.js
```

<p>
    A função itera cada um dos elementos sob a condição de aluno >= 18
    e usa o operador lógico E (AND) em cada
    um dos retornos. </br>Em outras palavras, caso um dos elementos não
    satisfaça a condição, o resultado do every de imediato será
    false . </br>Caso todos atendam à condição, o true é retornado
    como resultado da função.
</p>