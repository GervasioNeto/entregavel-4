const contarNumerosInteiros = require('../contagem'); // importando a função

test('deve contar os números inteiros no array', () => {
    const resultado = contarNumerosInteiros([1.5, 2, 3.0, 4, 5.5]);
    expect(resultado).toBe(3); // 3 numeros inteiros
});

test('deve contar os números inteiros em um array vazio', () => {
    const resultado = contarNumerosInteiros([]);
    expect(resultado).toBe(0); // resultado tem que ser 0 em um array vazio
});

test('dev contar os números inteiros em um array', () => {
    const resultado = contarNumerosInteiros([2, 1.5, 6, 7.4, 9, 11]);
    expect(resultado).toBe(4); // 4 numeros inteiros
})
