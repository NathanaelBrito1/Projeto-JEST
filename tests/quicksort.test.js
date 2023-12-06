const quickSort = require('../funcoes/quicksort');

test('Ordenar array [3, 1, 4, 1, 5, 9, 2, 6, 5]', () => {
  expect(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([
    1, 1, 2, 3, 4, 5, 5, 6, 9,
  ]);
});

test('Ordenar array vazio retorna array vazio', () => {
  expect(quickSort([])).toEqual([]);
});
