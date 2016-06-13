describe("Decode", function() {

  it("returns appropriate value for 1", function(){
    var decode = new Decode('I');
    expect(decode.roman).toEqual(1);
  });
});
