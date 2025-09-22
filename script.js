var isDate = function (input) {
  return !NaN(Date.parse(input))
};

// // Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
