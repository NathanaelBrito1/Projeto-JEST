const mdc = require('../funcoes/mdc');

test('MDC de 24 e 36 é 12', () => {
  expect(mdc(24, 36)).toBe(12);
});

test('MDC de 17 e 23 é 1', () => {
  expect(mdc(17, 23)).toBe(1);
});
