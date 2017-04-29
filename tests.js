const chai = require("chai");
const CNJokes = require("./index.js");


describe("get chucknorris joke", function() {


  beforeEach(() => {
    expect = chai.expect;
    assert = chai.assert;
  });


  it("should return one random joke", function() {
    CNJokes.getRandomJoke()
      .then((response) => {
        expect(response.data.type).to.equal("success");
      });
  });

  it("should return count jokes", function() {
     CNJokes.getNumberOfJokes()
      .then((response) => {
        assert.isNumber(response.data.value);
        
        expect(response.data.type).to.equal("success");
      });
  });

  it("should return random jokes", function() {
     CNJokes.getRandomJokes()
      .then((response) => {
        
        expect(response.data.type).to.equal("success");
      });
  });

  it("should return categories", function() {
     CNJokes.getCategories()
      .then((response) => {
        assert.isArray(response.data.value);

        expect(response.data.type).to.equal("success");
      });
  });
});
