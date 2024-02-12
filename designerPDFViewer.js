function designerPdfViewer(h, word) {
  function abecedario(letra) {
    return letra.toUpperCase().charCodeAt() - "A".charCodeAt(0);
  }
  let indexWord = [];
  let result = [];
  for (let letra of word) {
    indexWord.push(abecedario(letra));
  }
  indexWord.forEach((element) => result.push(h[element]));
  return Math.max(...result) * result.length;
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5,
      5,
    ],
    "torn"
  )
);
