function Roman(input) {
  this.key = { 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 };
}

Roman.prototype.decode = function(inp) {
  var array = inp.split('');
  console.log(array);
  var total = 0;
  for(i=0; i<array.length; i++){
    total += this.key[array[i]];
    console.log(total);
  }
  return total;
};
