const lib = require("./lib")

test("sumArrayValues test", () => {
    expect(lib.sumArrayValues([1, 1, 1])).toBe(3)
})