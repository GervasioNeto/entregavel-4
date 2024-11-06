const calcularMDC = require('../mdc');

test('deve retornar o MDC de dois números positivos', () => {
    expect(calcularMDC(56, 98)).toBe(14); 
});

test('deve retornar o MDC quando um dos números for 0', () => {
    expect(calcularMDC(56, 0)).toBe(56);  
});

test('deve retornar o MDC de dois números iguais', () => {
    expect(calcularMDC(12, 12)).toBe(12);  
});

test('deve retornar o MDC de dois números primos entre si', () => {
    expect(calcularMDC(17, 19)).toBe(1); 
});
