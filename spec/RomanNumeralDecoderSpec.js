describe("Roman", function() {

  it("returns appropriate value for 1", function(){
    var roman = new Roman();
    expect(roman.decode('I')).toEqual(1);
  });
});
