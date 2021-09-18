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
<p>
    O map executa a função de callback recebida por parâmetro
    para cada elemento iterado de numeros e constrói um novo
    Array com base nos retornos de cada uma das chamadas. </br>Como o
    map nos devolve uma outra instância de Array , a lista original
    nunca é realmente modificada, o que mantém sua integridade.</br>
</p>

```
    $ node map2.js
```
