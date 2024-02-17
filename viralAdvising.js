function viralAdvertising(n) {
  //n = 4
  let result = 2;
  for (let i = 1; i <= n; i++) {
    if (i == 2) {
      result *= 3;
      continue;
    }
    result = Math.floor(result / 2) * 3;
  }
}

/* 
n=1 -> Math.floor(5/2) -> 2
n=2 -> Math.floor(5/2) * 3 -> 6
n=3 -> Math.floor(6/2) * 3 -> 9
n=4 -> Math.floor(9/2) * 3 -> 12 (3 * n)
n=5 -> Math.floor(12/2) * 3 -> 18 (3 * n + 1)
n=6 -> Math.floor(18/2) * 3 -> 27 (3 * n + 3)
7 39 3 * 13 (3 * n + 6)


*/
