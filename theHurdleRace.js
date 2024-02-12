function hurdleRace(k, height) {
  //k es la altura que  el personaje puede saltar de forma natural
  // height es un array con todos los obstaculos
  let elementoMaximo = Math.max(...height);
  if (k > elementoMaximo) return 0;
  return elementoMaximo - k;
}

console.log(hurdleRace(7, [2, 5, 4, 5, 2]));
