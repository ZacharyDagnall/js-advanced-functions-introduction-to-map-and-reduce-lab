// Your code here
function mapToNegativize(arr) {
    return arr.map(i => -i)
}

function mapToNoChange(arr) {
    return arr.map(i => i)
}

function mapToDouble(arr) {
    return arr.map(i => 2 * i)
}

function mapToSquare(arr) {
    return arr.map(i => i ** 2)
}

function reduceToTotal(arr, start = 0) {
    return arr.reduce((total, i) => total + i, start)
}

function reduceToAllTrue(arr) {
    return arr.reduce((and, each) => and && !!each, true)
}

function reduceToAnyTrue(arr) {
    return arr.reduce((or, each) => or || !!each, false)
}