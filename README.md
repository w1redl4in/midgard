<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a2d37723999081.5632c5fe79802.jpg" alt="midgard logo"></a>
</p>

<h3 align="center">midgard</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">Projeto criado para a prática de Design-Patterns, Clean Code e Arquiteturas
    <br>
</p>

## 📝 Conteúdo

- [Design Patterns](#design-pattern)
- [Prós e Cons](#pros_cons)
- [SOLID](#solid)
- [Como rodar?](#run)

## 🧐 Design Patterns <a name = "design-pattern"></a>

### O que são design-patterns?

São <strong>soluções elegantes para problemas conhecidos</strong> recorrentes no desenvolvimento de softwares que foram utilizados e testados no passado e continuam relevantes nos dias atuais

Os design patterns são dividos em 3 categorias: <strong>criação (creational)</strong>, que visam abstrair o processo de como objetos são criados na aplicação; <strong>estruturais (structural)</strong>, que lidam com a composição de classes e objetos; <strong>comportamentais (behavioural)</strong>, que caracterizam como as classes e objetos interagem e distrbuem responsabilidades na aplicação

#### 🏁 Prós e Cons <a name = "pros_cons"></a>

#### Prós

- Não precisa reinventar a roda
- Padrões universais facilitam o entendimento do seu projeto
- Evita refatoração desnecessária
- Ajuda na reutilização de código (conceito DRY - Dont repeat yourself)
- Abstrai e nomei partes particulares do projeto
- Ajuda na aplicação dos princípios do design orientado a objetos <strong>(SOLID)</strong>
- Facilitam a criação de testes unitários

#### Cons

- Alguns padrões podem ser complexos até que você os compreenda
- Muito código para atingir um objetivo simples
- Podem trazer otimizações prematuras para o seu código (<strong>YAGNI</strong> - You Ain't Gonna Need It)
- Se usados incorretamente, podem atrapalhar ao invés de ajudar

## Design Patterns

| Criação          | Estrutural | Comportamental          |
| ---------------- | ---------- | ----------------------- |
| Abstract Factory | Adapter    | Interpreter             |
| Factory Method   | Bridge     | Template Method         |
| Builder          | Composite  | Chain of Responsability |
| Prototype        | Decorator  | Iterator                |
| Singleton        | Facade     | Command                 |
|                  | Flyweight  | Mediator                |
|                  | Proxy      | Memento                 |
|                  |            | Observer                |
|                  |            | State                   |
|                  |            | Strategy                |
|                  |            | Visitor                 |

## SOLID <a name = "solid"></a>

### Princípios do design orientado a objetos

- <strong>Single Responsability Principle</strong> (Princípio da responsabilidade única) - uma classe deve ter apenas um motivo para mudar.
  <strong>Exemplo:</strong> Podemos enxergar isso do ponto de vista de negócio. Imaginemos uma classe `Carro` que tem um método `fabricar()` e suponhamos que um dia chegue uma demanda da área de <strong>Contabilidade</strong> que agora precisamos calcular a taxa de entrega do `Carro`. Caso implementemos essa demanda na mesma classe `Carro` estaríamos ferindo o <strong>Single Responsability Principle</strong> pois a idea inicial da nossa classe era apenas <strong>fabricar</strong> `Carros`, ou seja, suprir uma demanda da área de <strong>Negócio</strong> e agora a mesma classe compartilha de diferentes interesses que <strong>podem ou não</strong> entrarem em <strong>conflito.</strong>
  <br />
- <strong>Open/closed principle</strong> (Princípio do aberto/fechado) - classes ou objetos e metodos devem estar abertos para extensão, mas fechados para modificações
  <br />

- <strong>Liskov substitution principle</strong> (Princípio da substituição de Liskov) - uma classe derivada deve ser substituível por sua classe base.
  <br />

- <strong>Interface Segregation Principle</strong> (Princípio da Segregação da Interface) - uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar.
  <br/>

- <strong>Dependency inversion principle</strong> (Princípio da inversão de dependência) - módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações. Detalhes devem depender das abstrações, não o inverso

## Dúvidas genéricas

### Classe abstrata vs Interface

Uma classe abstrata pode conter lógica (código), enquanto que uma interface somente pode especificar quais os métodos ou propriedades que uma classe que implementa a interface deve definir. Entretanto nenhuma das duas pode ser usada para construir um objeto, para isso é necessário definir uma classe que derive da abstrata (mas que não seja abstrata) ou que implemente a interface.

#### Exemplo de classe abstrata

```
abstract class MaquinaDeLavar

{
   public MaquinaDeLavar()
   {
      // Codigo para iniciar o objeto.
   }

   abstract public void Lavar();
   abstract public void Enxaguar(int tamanhoCarga);
   abstract public long Secar(int velocidade);
}
```

## Como rodar <a name = "run"></a>

```
$ yarn install
```

É necessário ter uma extensão do vscode chamada <strong>Code Runner</strong>, essa ext irá habilitar um botão de Play em todos arquivos .ts, é só clicar.
