function myDoWhile() {
  var myNumbers = "";
  var i = 0;
  do {
    myNumbers += i;
    if (i != 9) myNumbers += ", ";
  } while (++i < 10);
  return myNumbers;
}

console.log(myDoWhile());

module.exports = myDoWhile;
