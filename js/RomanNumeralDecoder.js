function Roman(input) {
  this.key = { 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 };
}
Roman.prototype.decode = function(inp) {
  var array = inp.split('');
  var total = 0;
  for(i=0; i<array.length; i++){
    if(array[i] == 'I' && (array[i+1] == 'V' || array[i+1] == 'X')) {
      total -= 1;
    } else {
    total += this.key[array[i]];
    }
  }
  return total;
};
