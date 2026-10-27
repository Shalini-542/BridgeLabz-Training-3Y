"use strict";

const input = prompt("Enter number of rows (default 5):");
const rows = input === null || input.trim() === "" ? 5 : Number(input);

if (!Number.isInteger(rows) || rows < 1) {
    console.log("Please enter a positive integer.");
} else {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trim());
    }
}

// Replace let with var: The output remains the same for these synchronous loops, but var is function-scoped while let is block-scoped.

// Debugging: Set a breakpoint on the outer loop. Watch i, j, rows, and pattern. Press F10 to observe how the counters change.

// Strict mode: Assigning a value to an undeclared variable, such as i = 1, causes a ReferenceError.