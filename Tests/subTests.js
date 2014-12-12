describe("Calculated Decimal Number Subtraction", function() {
    it("should be defined", function() {
        expect(sub).toBeDefined();
    });
    it("should be 3", function() {
        expect(sub(3,1)).toEqual(2);
    });

    it("should be 3 but will failed", function() {
        expect(sub(3,1)).toEqual(1);
    });

});