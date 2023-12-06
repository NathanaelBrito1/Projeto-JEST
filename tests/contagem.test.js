const contagem = require('../funcoes/contagem');

test('Contar inteiros entre 3 e 8 no conjunto [3, 7, 4, 10, 15, 2]', () => {
  expect(contagem([3, 7, 4, 10, 15, 2], 8)).toBe(3);
});

test('Contar inteiros entre 1 e 5 no conjunto [1, 2, 3, 4, 5]', () => {
  expect(contagem([1, 2, 3, 4, 5], 5)).toBe(5);
});
