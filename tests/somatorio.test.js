const somatorio = require('../funcoes/somatorio');

test('Somar array [1, 2, 3, 4, 5]', () => {
  expect(somatorio([1, 2, 3, 4, 5])).toBe(15);
});

test('Somar array vazio retorna 0', () => {
  expect(somatorio([])).toBe(0);
});
