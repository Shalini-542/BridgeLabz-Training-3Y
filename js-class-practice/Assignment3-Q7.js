"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) throw new Error("Cannot divide by zero");
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) throw new Error("Negative number has no real square root");
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError("Unknown operation");
    }
}

for (const operation of operations) {
    try {
        console.log(`${operation}: ${calculate(operation, num1, num2)}`);
    } catch (error) {
        console.log(`${operation}: ${error.message}`);
    }
}


// The root operation calculates the square root of num1; power calculates num1 raised to num2.