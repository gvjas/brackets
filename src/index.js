module.exports = function check(str, bracketsConfig) {
  
  let tmp;
  while (str) {
    for (brackets of bracketsConfig) {
      str = str.replace(brackets.join(''), '')
    }
    if (str === tmp) {
      return false;
    }
    tmp = str;
  }
  return str.length === 0;

}