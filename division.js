function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// write a test case to test the divide function
describe("divide function", () => {
    test("divide 10 by 2", () => {
        expect(divide(10, 2)).toBe(5);
    });

    test("divide 10 by 0", () => {
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
    });
});



