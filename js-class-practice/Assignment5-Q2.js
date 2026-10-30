
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Double each number
function double(num) {
    return num * 2;
}

// Square each number
function square(num) {
    return num * num;
}

console.log(applyOperation([1, 2, 3, 4], double));
console.log(applyOperation([1, 2, 3, 4], square));
