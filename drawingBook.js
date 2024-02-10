function pageCount(n, p) {
  //"n" es el numero de paginas y "p" la pagina a buscar
  if (p == 1) return 0;
  let arr = [[1]];
  for (let i = 2; i <= n; i += 2) {
    arr.push([i, i + 1]);
  }
  //Hacemos la iteracion asumiendo que podemos comenzar desde el elemento inicial
  let indexInicial = 0;
  let indexFinal = 0;
  arr.forEach((element, index) => {
    if (element.includes(p)) indexInicial = index;
  }); //[[1],[2,3],[4,5]]
  arr.reverse().forEach((element, index) => {
    if (element.includes(p)) indexFinal = index;
  });

  return Math.min(indexFinal, indexInicial);
}

console.log(pageCount(5, 4));
