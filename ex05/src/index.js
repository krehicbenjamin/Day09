function compareStrictValues(m, n) {
    if (m != n) return "Not Equal";
    return "Equal";
  }
  
  console.log(compareStrictValue(8, "8"));
  console.log(compareStrictValue("8", 8));
  console.log(compareStrictValue("8", 8));
  console.log(compareStrictValue("8", "8"));
  console.log(compareStrictValue(8, 8));
  
  module.exports = compareStrictValue;
  