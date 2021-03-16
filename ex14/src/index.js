function myForLoop1() {
  var evenNumbers = "";
  var count = 0;
  for (var i = 0; i < 9; i++) {
    if (i % 2 == 0 && count != 4) {
      evenNumbers += i;
      evenNumbers += ", ";
      count++;
    } else if (i % 2 == 0 && count == 4) {
      evenNumbers += i;
      break;
    }
  }
  return evenNumbers;
}
function myForLoop2() {
  var evenInverseNumbers = "";
  var count = 0;
  for (var i = 9; i >= 0; i--) {
    if (i % 2 == 0 && count != 4) {
      evenInverseNumbers += i;
      evenInverseNumbers += ", ";
      count++;
    } else if (i % 2 == 0 && count == 4) {
      evenInverseNumbers += i;
      break;
    }
  }
  return evenInverseNumbers;
}


console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
  myForLoop1,
  myForLoop2,
};
