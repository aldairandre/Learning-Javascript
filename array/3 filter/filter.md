# FILTER

<p>
    Como o próprio nome já pode induzir, este método é deve ser
    utilizado quando temos a necessidade de filtrar nossa lista de acordo
    com algum critério. Por exemplo, imagine que queremos filtrar de
    uma lista de alunos, todos os que são maiores de idade. Com o ES5,
    nós poderíamos fazer:
</p>

```
$ node filter1.js
```

<p>
    Com o método filter , temos o mesmo efeito de forma mais
    clara:
</p>

```
$ node filter2.js
```

<p>
    A função de callback recebe como parâmetro cada um dos
    alunos da lista em cada iteração — assim como aconteceu nas outras
    funções auxiliares que vimos — e o atribui na variável aluno .
    Dentro da função, utilizamos um critério de avaliação para devolver
    um valor booleano para o filter : true ou false.</br> 
    Se for retornado verdadeiro, o valor é inserido no novo Array retornado;
    caso contrário, é simplesmente ignorado e não é incluído.
</p>