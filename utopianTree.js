function utopianTree(n) {
  let arbol = 1;
  for (let ciclo = 1; ciclo <= n; ciclo++) {
    if (ciclo % 2 == 0) {
      arbol++;
    } else {
      arbol *= 2;
    }
  }
  return arbol;
}

console.log(utopianTree(5));

/* 
REGLAS
- Un arbol utopico pasa por 2 ciclos de crecimiento al año
- El primer ciclo hace que la altura se duplique en 2
- El segundo ciclo solo hace que la altura aumente en 1
*/
//Para impares 1,3,9,23,53 +1,+3,+5,+7
// 0 Ciclos -> 1    2 Ciclo -> 3  4 Ciclo -> 7   6 Ciclo -> 15   8 Ciclo -> 31
// 1 Ciclo -> 2     3 Ciclo -> 6  5 Ciclo -> 14   7 Ciclo -> 30  9 Ciclo -> 62
