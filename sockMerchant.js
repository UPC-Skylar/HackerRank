function sockMerchant(n, ar) {
  let count = 0;
  let arSort = [...new Set(ar)]; //[4,5]
  for (let element of arSort) {
    let amount = ar.filter((x) => x == element).length;
    let cuenta = Math.floor(amount / 2);
    if (cuenta > 0) count += cuenta;
  }
  return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
