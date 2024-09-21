let first;
let second;
let third;
function calculateBill() {
  first = parseFloat(document.getElementById("first").value);
  second = parseFloat(document.getElementById("second").value);
  third = parseFloat(document.getElementById("third").value);
  let bill = first + second + third;
  // we can use The backticks and ${} notation to include variables values in the string !
  document.getElementById(
    "result"
  ).innerText = `the final bill is  : ${bill}`;
}
