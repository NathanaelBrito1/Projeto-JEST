const ehPrimo = require('../funcoes/numeroprimo');

test('Verificar se 17 é primo', () => {
  expect(ehPrimo(17)).toBe(true);
});

test('Verificar se 15 não é primo', () => {
  expect(ehPrimo(15)).toBe(false);
});
