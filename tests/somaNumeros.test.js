const somarNumeros = require('../algs/somaNumeros');

test('deve retornar a soma dos números do array', () => {
    const numeros = [10, 20, 30, 40, 50];
    expect(somarNumeros(numeros)).toBe(150);
});

test('deve retornar 0 para um array vazio', () => {
    expect(somarNumeros([])).toBe(0);
});

test('deve retornar o próprio número para um array com um único elemento', () => {
    expect(somarNumeros([7])).toBe(7);
});
