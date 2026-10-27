"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

class NegativeAmountError extends Error {}
class MissingDataError extends Error {}
class NullEntryError extends Error {}

for (let i = 0; i < transactions.length; i++) {
    try {
        const t = transactions[i];

        if (t === null) {
            throw new NullEntryError("Null transaction");
        }

        if (t.id == null || t.amount == null) {
            throw new MissingDataError("Missing ID or amount");
        }

        if (t.amount < 0) {
            throw new NegativeAmountError("Negative amount");
        }

        valid.push(t);
    } catch (error) {
        invalid.push({ index: i, type: error.constructor.name });
        console.log(`Transaction ${i + 1}: ${error.message}`);
    }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful:", valid.length);
console.log("Failed:", invalid.length);

// Output summary: Successful = 1, Failed = 3.

// Debugging: Add a breakpoint inside try. Press F5 to start debugging and F10 to step through the code. Watch i, t, valid, and invalid.

