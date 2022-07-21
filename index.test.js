const {squareAndSortArrayNumbers} = require('./index')

describe('Squaring and sorting arrays', () => {

    it('Should square and sort just positive numbers', () => {
        expect(squareAndSortArrayNumbers([1, 2, 3, 5, 6, 8, 9])).toStrictEqual([1, 4, 9, 25, 36, 64, 81]);
    });

    it('Should square and sort just negative numbers', () => {
        expect(squareAndSortArrayNumbers([-2, -1])).toStrictEqual([1, 4]);
    });

    it('Should square and sort positive and negative numbers', () => {
        expect(squareAndSortArrayNumbers([-10, -5, 0, 5, 10])).toStrictEqual([0, 25, 25, 100, 100]);
    });

})
