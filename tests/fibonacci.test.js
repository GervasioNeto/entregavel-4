const fibonacci = require('../algs/fibonacci');

test('deve retornar a sequência de Fibonacci de tamanho 10', () => {
    const resultado = fibonacci(10);
    expect(resultado).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]); 
});

test('deve retornar a sequência de Fibonacci de tamanho 5', () => {
    const resultado = fibonacci(5);
    expect(resultado).toEqual([0, 1, 1, 2, 3]);
});
