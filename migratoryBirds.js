function migratoryBirds(arr) {
  //1. Primero seteamos el array para que no haya ningun repetido y ordenamos con sort
  let setArr = [...new Set(arr)].sort((a, b) => a - b);
  //2. Creamos un contador para ir pusheando las veces que se repite cada numero
  let contadorArr = [];
  //3. Con un for of recorremos el array seteado y para cada elemento suyo, vamos a pushear la
  //   longitud del array filtrado, el array filtrado estara compuesto de todos los numeros que sean
  //   igual al elemento del array seteado en ese instante
  //   Con esto, logramos tener un array que indicará las veces que aparece el numero en el arr original
  for (let element of setArr) {
    contadorArr.push(arr.filter((x) => x == element).length);
  }
  //4. Como deseamos elegir el menor numero en caso de empate y recordemos que nuestro array esta ordenado
  //   entonces... hallamos el index de la primera ocurrencia del elemento mayor dentro de ese array contador
  let index = contadorArr.indexOf(
    contadorArr.find((element) => element == Math.max(...contadorArr))
  );
  // 5. Simplemente retornamos el array seteado con el index que encontramos
  return setArr[index];
}

//Output: 1
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
