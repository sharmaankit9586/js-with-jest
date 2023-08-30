const { method } = require("..");

const expectations = [
    {
        input: [1, 2],
        output: 3
    },
    {
        input: [5, 10],
        output: 15
    }
];

describe('Tests', () => {
    expectations.forEach((testCase) => {
        const { input, output } = testCase;
        test(`should return ${output} when given inputs ${input}`, () => {
            const result = Array.isArray(input) ? method(...input) : method(input);
            expect(result).toBe(output);
        });
    });
});