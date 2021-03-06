# Builder

- [Propósito](#proposal)
- [Problema](#problem)
- [Solução](#solution)

## Propósito <a name = "proposal"></a>

O Builder é um padrão de projeto criacional que permite você construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção.

## Problema <a name = "problem"></a>

Imagine um objeto complexo que necessite de uma inicialização passo a passo trabalhosa de muitos campos e objetos agrupados. Tal código de inicialização fica geralmente enterrado dentro de um construtor monstruoso com vários parâmetros. Ou pior: espalhado por todo o código cliente.

## Solução <a name = "solution"></a>

O padrão Builder sugere que você extraia o código de construção do objeto para fora de sua própria classe e mova ele para objetos separados chamados builders.

<!-- ## Tipos


## Genérico <a name = "generic"></a>

O singleton genérico se trata de uma mesma implementação que aconteceria em todas as linguagens, em forma de classe com um getter verificando se o atributo da classe está nulo, se sim instancia um novo, caso não, devolve o existente.

## Módulo <a name = "module"></a>

O Singleton por módulo é algo específico do Javascript/Typescript, por padrão módulos já são Singletons.

### Função

O Singleton por função também é algo específico do Javascript/Typescript, tendo a forma de funções IIFE (Immediately Invoked Function Expression) -->
