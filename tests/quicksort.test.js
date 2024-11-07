const quickSort = require('../algs/quicksort');

test('deve ordenar o array de forma crescente', () => {
    const array = [3, 1, 4, 5, 2];
    expect(quickSort(array)).toEqual([1, 2, 3, 4, 5]);
});

test('deve retornar array vazio se o array de entrada for vazio', () => {
    expect(quickSort([])).toEqual([]);
});

test('deve retornar o próprio array se ele tiver um único elemento', () => {
    expect(quickSort([7])).toEqual([7]);
});

test('deve ordenar um array com números negativos e positivos', () => {
    const array = [3, -2, -1, 5, 4];
    expect(quickSort(array)).toEqual([-2, -1, 3, 4, 5]);
});

test('deve ordenar o array de forma crescente', () => {
    const array = [6, 8, 4, 5, 3];
    expect(quickSort(array)).toEqual([3, 4, 5, 6, 8]);
});