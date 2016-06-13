function Roman(input) {
  this.key = { 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 };
}

Roman.prototype.decode = function(inp) {
  return this.key[inp];
};
