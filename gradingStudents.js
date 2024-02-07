function gradingStudents(grades) {
  function redondearNotas(nota) {
    if (nota < 38) return nota;
    let sigMultiplo5 = nota + (5 - (nota % 5));
    return sigMultiplo5 - nota < 3 ? sigMultiplo5 : nota;
  }
  return grades.map((element) => redondearNotas(element));
}
console.log(gradingStudents([73, 67, 68, 33]));
