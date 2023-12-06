function fibonacci(n) {
  let a = 0,
    b = 1,
    temp;
  const sequencia = [a, b];
  for (let i = 2; i < n; i++) {
    temp = a + b;
    a = b;
    b = temp;
    sequencia.push(b);
  }
  return sequencia;
}

module.exports = fibonacci;
