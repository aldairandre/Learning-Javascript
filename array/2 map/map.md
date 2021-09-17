# MAP 

<p>
    O método <span style='font-weight: 900;'>map</span> é muito útil quando precisamos não somente
    passar por todos os elementos de um Array , mas também
    modificá-los. Por exemplo, imagine que precisamos de um
    algoritmo para duplicar todos os valores de uma lista de números
    naturais. Sem pensar muito, faríamos algo assim:
</p>

```
    $ node map1.js
```

<p>
    Criamos um novo Array chamado dobro e usamos o seu
    método push para inserir o dobro de cada um dos valores
    recuperados por índice na iteração dos numeros . Podemos ter o
    mesmo comportamento ao usar o map :
<p>

```
    $ node map2.js
```

<p>
    O map executa a função de callback recebida por parâmetro
    para cada elemento iterado de numeros e constrói um novo
    Array com base nos retornos de cada uma das chamadas. </br>Como o
    map nos devolve uma outra instância de Array , a lista original
    nunca é realmente modificada, o que mantém sua integridade.</br>
    E assim como no vimos no forEach , a função de callback
    não passa por elementos que foram modificados, alterados ou
    removidos depois da primeira execução da função de retorno.</br>
    Como o próprio nome já pode induzir, este método é deve ser
    utilizado quando temos a necessidade de filtrar nossa lista de acordo
    com algum critério. Por exemplo, imagine que queremos filtrar de
    uma lista de alunos, todos os que são maiores de idade.</br>Com o ES5,
    nós poderíamos fazer:
</p>

<p>
    A função de callback recebe como parâmetro cada um dos
    alunos da lista em cada iteração — assim como aconteceu nas outras
    funções auxiliares que vimos — e o atribui na variável aluno .</br>
    Dentro da função, utilizamos um critério de avaliação para devolver
    um valor booleano para o filter : true ou false . Se for
    16
    Rretornado verdadeiro, o valor é inserido no novo Array retornado;
    caso contrário, é simplesmente ignorado e não é incluído.
<p>

## FIND

<p>
    Esta função auxiliar é particularmente interessante quando o
    objetivo é encontrar um item específico dentro de um Array.</br>
    Digamos, por exemplo, que de uma lista de alunos queremos
    somente o registro que contenha o nome “Aldair”. O que faríamos
    tradicionalmente é algo nesse sentido:
</p>

```
$ node map4.js
```

### Usando metodo find