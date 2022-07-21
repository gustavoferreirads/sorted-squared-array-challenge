const squareAndSortArrayNumbers = (numbers) => {
    let justNumbers = numbers.filter((n) => !isNaN(n))

    let array = []
    let firstIndex = 0
    let lastIndex = justNumbers.length - 1
    let position = lastIndex

    while (firstIndex <= lastIndex) {
        //if squared number e is greater than last
        if (Math.pow(justNumbers[firstIndex], 2) > Math.pow(justNumbers[lastIndex], 2)) {
            array[position--] = Math.pow(justNumbers[firstIndex++], 2)
            continue;
        }
        array[position--] = Math.pow(justNumbers[lastIndex--], 2)
    }

    return array
};

module.exports = {squareAndSortArrayNumbers}