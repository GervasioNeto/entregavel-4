
# Entregável 4 - Algoritmos em JavaScript

Este projeto consiste em uma coleção de algoritmos implementados em JavaScript com testes automatizados usando o Jest. Cada algoritmo está encapsulado em um módulo individual na pasta `algs`, e seus respectivos testes estão na pasta `tests`.

## Estrutura do Projeto

```
entregavel-4/
│
├── algs/
│   ├── contagem.js           # Algoritmo de contagem de números inteiros
│   ├── fibonacci.js          # Algoritmo de Fibonacci
│   ├── mdc.js                # Algoritmo de Máximo Divisor Comum (MDC)
│   ├── primo.js              # Algoritmo de Verificação de Número Primo
│   ├── somatoria.js          # Algoritmo de Soma de Números em um array
│   └── quicksort.js          # Algoritmo de Quicksort
│
├── tests/
│   ├── contagem.test.js      # Testes para o algoritmo de contagem
│   ├── fibonacci.test.js     # Testes para o algoritmo de Fibonacci
│   ├── mdc.test.js           # Testes para o algoritmo de MDC
│   ├── primo.test.js         # Testes para o algoritmo de número primo
│   ├── somatoria.test.js     # Testes para o algoritmo de somatória
│   └── quicksort.test.js     # Testes para o algoritmo de Quicksort
│
├── package.json              # Configuração do npm e Jest
└── README.md                 # Documentação do projeto
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) - Instale o Node.js para executar os scripts e instalar as dependências.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/GervasioNeto/entregavel-4.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd entregavel-4
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Instale o Jest para os testes:

   ```bash
   npm install --save-dev jest
   ```

## Execução dos Algoritmos

Cada algoritmo pode ser executado individualmente. Por exemplo, para executar o algoritmo de Fibonacci:

```bash
node algs/fibonacci.js
```

## Testes

Os testes automatizados garantem a funcionalidade de cada algoritmo. Para rodar todos os testes:

```bash
npm test
```

### Estrutura dos Testes

Os testes foram escritos para cobrir cenários principais e verificar a precisão dos algoritmos. Exemplo:

- **Contagem de Números**: Verifica se a função conta corretamente os números inteiros em um array.
- **Fibonacci**: Calcula uma sequência de Fibonacci até um número específico de termos.
- **MDC**: Calcula o maior divisor comum entre dois números.
- **Número Primo**: Verifica se um número dado é primo.
- **Somatória**: Soma os elementos de um array.
- **Quicksort**: Ordena um array de números.
