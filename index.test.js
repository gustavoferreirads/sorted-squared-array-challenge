const {squareAndSortArrayNumbers} = require('./index')

describe('Squaring and sorting arrays', () => {

    it('Should square and sort just positive numbers', () => {
        const result = squareAndSortArrayNumbers(["1", 2, 3, 5, 6, 8, 9, "aa"])
        console.log("Test case 1 Sorted", result)
        expect(result).toStrictEqual([1, 4, 9, 25, 36, 64, 81]);
    });

    it('Should square and sort just negative numbers', () => {
        const result = squareAndSortArrayNumbers([-2, -1])
        console.log("Test case 2 Sorted", result)
        expect(result).toStrictEqual([1, 4]);
    });

    it('Should square and sort positive and negative numbers', () => {
        const result = squareAndSortArrayNumbers([-10, -5, 0, 5, 10]);
        console.log("Test case 3 Sorted", result)
        expect(result).toStrictEqual([0, 25, 25, 100, 100]);
    });

    it('Should square and sort just numbers avoiding letters and others', () => {
        const result = squareAndSortArrayNumbers(["1", 2, 3, 5, 6, 8, 9, "aa", "@"])
        console.log("Test case 4 Sorted", result)
        expect(result).toStrictEqual([1, 4, 9, 25, 36, 64, 81]);
    });


})
