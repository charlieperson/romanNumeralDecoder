describe("Roman", function() {

  it("returns appropriate value for 1", function(){
    var roman = new Roman();
    expect(roman.decode('I')).toEqual(1);
  });

  it("returns appropriate value for 6", function(){
    var roman = new Roman();
    expect(roman.decode('VI')).toEqual(6);
  });

  it("returns appropriate value for 9", function(){
    var roman = new Roman();
    expect(roman.decode('IX')).toEqual(9);
  });

  it("returns appropriate value for 21", function(){
    var roman = new Roman();
    expect(roman.decode('XXI')).toEqual(21);
  });

  it("returns appropriate value for 93", function(){
    var roman = new Roman();
    expect(roman.decode('XCIII')).toEqual(93);
  });
});
