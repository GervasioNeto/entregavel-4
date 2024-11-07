const isPrime = require('../algs/primo');

test('deve retornar true para número primo', () => {
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(13)).toBe(true);
});

test('deve retornar false para número não primo', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(1)).toBe(false);
});

test('deve retornar false para número negativo', () => {
    expect(isPrime(-5)).toBe(false);
});
