# Composite

- [Propósito](#proposal)
- [Problema](#problem)
- [Solução](#solution)

## Propósito <a name = "proposal"></a>

O Composite é um padrão de projeto estrutural que permite que você componha objetos em estruturas de árvores e então trabalhe com essas estruturas como se elas fossem objetos individuais.

## Problema <a name = "problem"></a>

Usar o padrão Composite faz sentido apenas quando o modelo central de sua aplicação pode ser representada como uma árvore.

Por exemplo, imagine que você tem dois tipos de objetos: Produtos e Caixas. Uma Caixa pode conter diversos Produtos bem como um número de Caixas menores. Essas Caixas menores também podem ter alguns Produtos ou até mesmo Caixas menores que elas, e assim em diante.

Digamos que você decida criar um sistema de pedidos que usa essas classes. Os pedidos podem conter produtos simples sem qualquer compartimento, bem como caixas recheadas com produtos... e outras caixas. Como você faria para determinar o preço total desse pedido?

## Solução <a name = "solution"></a>

O padrão Composite sugere que você trabalhe com Produtos e Caixas através de uma interface comum que declara um método para a contagem do preço total.

Como esse método funcionaria? Para um produto, ele simplesmente retornaria o preço dele. Para uma caixa, ele teria que ver cada item que ela contém, perguntar seu preço e então retornar o total para essa caixa. Se um desses itens for uma caixa menor, aquela caixa também deve verificar seu conteúdo e assim em diante, até que o preço de todos os componentes internos sejam calculados. Uma caixa pode até adicionar um custo extra para o preço final, como um preço de embalagem.
