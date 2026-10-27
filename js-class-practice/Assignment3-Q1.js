"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const valid = [];
const invalid = [];

for (const value of apiData) {
    const num = Number(value);
    const bool = Boolean(value);
    const str = String(value);

    console.log(`Original: ${str} | Number: ${num} | Boolean: ${bool} | String: ${str}`);

    if (Number.isNaN(num) || (typeof value === "string" && value.trim() === "")) {
        invalid.push(value);
        console.log(`Invalid number: ${str}`);
    } else {
        valid.push(num);
    }
}

// Explanation: Number() converts values to numbers, Boolean() converts them to true or false, and String() converts them to strings.

// Note: Number(null) returns 0, while Number(undefined) returns NaN. The valid array is [25, 0, 0, 3.14, 0].