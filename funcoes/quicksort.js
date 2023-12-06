function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivo = arr[0];
  const esquerda = [];
  const direita = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivo) {
      esquerda.push(arr[i]);
    } else {
      direita.push(arr[i]);
    }
  }

  return [...quickSort(esquerda), pivo, ...quickSort(direita)];
}

module.exports = quickSort;
