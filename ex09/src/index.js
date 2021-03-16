function functionElse(num) {
  var result;
  if (num <= 5) {
    result = "5 or smaller";
  } else {
    result = "Bigger than 5";
  }
  return result;
}

console.log(functionElse(4));

console.log(functionElse(5));

console.log(functionElse(6));

console.log(functionElse(10));

module.exports = functionElse;
