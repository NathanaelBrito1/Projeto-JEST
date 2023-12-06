function contagem(arr, N) {
  const primeiroNumero = arr[0];
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= primeiroNumero && arr[i] <= N) {
      contador++;
    }
  }
  return contador;
}

module.exports = contagem;
