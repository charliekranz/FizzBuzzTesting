describe("fizzBuzz function", function() {
    // Call to the global Jasmine function describe with two parameters: a string and a function.
beforeEach(function() {
    result = new fizzBuzz();
});

describe("Checks divisibilty", function () {
    // Specs are defined by calling the global Jasmine function it
    it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });

    it("should return FizzBuzz when called as fizzBuzz(0)", function () {
        var result = fizzBuzz(0)
        expect(result).toBe("FizzBuzz");
    });
});
});