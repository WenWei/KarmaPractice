describe("plus two number", function() {
    it("should be defined", function() {
        expect(plus).toBeDefined();
    });
    it("should be 3", function() {
        expect(plus(1,2)).toEqual(3);
    });
});