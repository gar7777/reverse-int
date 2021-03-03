module.exports = function reverse (n) {
    n = Math.abs(n); 
    let str = n.toString();
    let result = '';
    for(i = str.length - 1; i >= 0; i--) {
      result += str[i]; 
    }
    result =  Number(result);
   return result;
}
