const squareAndSortArrayNumbers = (numbers) => {
    let array = []
    let firstIndex = 0
    let lastIndex = numbers.length - 1
    let position = lastIndex

    while (firstIndex <= lastIndex) {
        //if squared number e is greater than last value
        if (Math.pow(numbers[firstIndex], 2) > Math.pow(numbers[lastIndex], 2)) {
            array[position--] = Math.pow(numbers[firstIndex++], 2)
            continue;
        }
        array[position--] = Math.pow(numbers[lastIndex--], 2)
    }

    return array
};

module.exports = {squareAndSortArrayNumbers}