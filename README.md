# TypeScript

#### O que é TypeScript

- É um superset para a linguagem JavaScript;
- Ou seja, adicionar funcoes no JavaScript, como a declaracao de tipos de variavel;
- Pode ser utilizado com frameworks/libs, como: Express e React;
- Precisa ser compilado em JavaScript, ou seja, nao executamos TS;
- Desenvolvido e mantido pela Microsoft;

#### Por que TypeScript?

- Adiciona confiabilidade ao programa (tipos);
- Prove novas funcionalidades a JS, como interfaces;
- Com TS podemos verificar os erros antes da execucao do codigo, ou seja, no desenvolvimento;
- Deixa o JavaScript mais explicito, diminuindo a quantidade de bugs;
- Por estes e outros motivos perdemos menos tempo com debug;

#### Node.js

- Node possui um recurso chamado REPL (Read Evaluate Print Loop)
  - É uma forma de testar alguma funcionalidade dentro do Node, ele roda um ambiente node para nos e conseguimos testar ali dentro;

#### Como tirar o melhor proveito do curso

- Programar junto, e nao ficar so assistindo;
- Criar seus proprios exemplos (para os coteudos das aulas);
- Projetos proprios ao final do curso ou durante;
- Realizar os exercicios propostos;
- Responder ou criar novas perguntas;
- Ver primeiro e depois fazer;

#### O que são tipos em TypeScript?

- A principal funcao do TypeScript é determinar tipos para os dados;
- Isso vai garantir a qualidade do codigo;
- Alem de fazer os TS nos ajudar na hora do desenvolvimento;
- Ou seja, precisamos definir corretamente o tipo das variaveis, dos retornos das funcoes, das manipulacoes de dados, etc;
- Consequentemente teremos um software melhor programado e é este o principal intuito do TS;

#### Type annotation and Type inference

- Estes dois conceitos vao nos acompanhar em todo o processo do desenvolvimento de aplicacao
- Annotation é quando definimos o tipo de um dado manualmente;
- Inference é quando o TS identifica e define o tipo de dado para nos;

#### Propriedades opcionais

- Nem sempre os objetos possuem todas as propriedades que poderiam possuir;
- Quando isso acontecer, precisamos colocar um interrogacao no objeto que nao e required;
  - O primeiro parametro da funcao nao pode ser opcional quando tiver mais que um;
  - {nome: string, sobrenome?: string};
  - Por conta de ser opcional o TypeScript nao nos ajuda mais, pois ele deixa de controlar o valor que recebemos;
  - Quando temos esse ponto, precisamos utilizar uma condicional `if` para conseguir resolver a situacao;

#### Type alias x Interface

- Quando precisamos utilizar algo que ira mudar no futuro, optamos por utilizar a interface;
- Com type alias, nao e possivel realizar uma alteracao, pois se comporta como uma `const`;
- Interface é a mais utilizada hoje em dia;

#### Narrowing

- E um recurso de TS para identificar tipos de dados;
- Dando assim uma direcao diferente a execucao do programa, baseada no tipo que foi identificado;
- Isso e fundamental para evitar erros do compilador, identificando e resolvendo os possiveis erros na hora do desenvolvimento;

#### Object Types

- Sao dados que tem como o tipo de objeto, por exemplo: object literals e arrays;
- Como: interfaces, readonly, tupla e outros;

#### Readonly

- As propriedades readonly podem ser alteradas apenas uma vez, na criacao do novo dado;
- E uma forma de criar um valor constante em um objeto;

#### Index Signature

- Utilizamos o Signature quando nao sabemos o nome das chaves, mas ja sabemos quais os tipos de um objeto ou array;
- Isso restringe a tipos que nao devem ser utilizados;

#### Visibilidade

- E o conceito de expor nossos metodos de classes
- public: visibilidade default, pode ser acessado em qualquer local
- protected: acessivel apenas a subclass da class do metodo, para acessar uma propriedade precisamos de um metodo;
- private: apenas a classe que declarou o metodo pode utilizar

#### Decorators

- Podem adicionar funcionalidades extras a classes e funcoes;
- Basicamente criamos novas funcoes, que sao adicionadas a partir de um @nome
- Esta funcao sera chamada assim que o item que foi definido o decorator for executado;
- Necessario configurar o tsconfig.json
