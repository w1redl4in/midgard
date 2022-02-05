# Singleton

## Propósito

O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

## Tipos

- [Genérico](#generic)
- [Módulo](#module)
- [Função](#usage)

## Genérico <a name = "generic"></a>

O singleton genérico se trata de uma mesma implementação que aconteceria em todas as linguagens, em forma de classe com um getter verificando se o atributo da classe está nulo, se sim instancia um novo, caso não, devolve o existente.

## Módulo <a name = "module"></a>

O Singleton por módulo é algo específico do Javascript/Typescript, por padrão módulos já são Singletons.

### Função

O Singleton por função também é algo específico do Javascript/Typescript, tendo a forma de funções IIFE (Immediately Invoked Function Expression)
