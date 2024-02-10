function dayOfProgrammer(year) {
  if (year < 1918) {
    //Julian Calendar
    return year % 4 === 0 ? `12.09.${year}` : `13.09.${year}`;
  } else if (year == 1918) {
    //Si es 1918, transicion
    return "26.09.1918";
  }
  // Gregorian Calendar
  // 1. Averiguar si el año es bisiesto
  let isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? true
      : false;
  };
  return isLeapYear(year) ? `12.09.${year}` : `13.09.${year}`;
}

console.log(dayOfProgrammer(2016));
