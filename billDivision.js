//k representa el item que Ana no comio y b, el monto de dinero q Ana contribuirá segun Brian
function bonAppetit(bill, k, b) {
  let billAna = bill.filter((element, index) => index !== k);
  let totalAccountPerPerson = billAna.reduce((a, b) => a + b) / 2;
  return b === totalAccountPerPerson
    ? console.log("Bon Appetit")
    : console.log(b - totalAccountPerPerson);
}

bonAppetit([3, 10, 2, 9], 1, 12);
