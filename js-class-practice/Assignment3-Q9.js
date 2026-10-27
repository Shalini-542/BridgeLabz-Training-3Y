"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const obj = JSON.parse(rawData[i]);

        if (!("user" in obj) || !("age" in obj)) {
            throw new Error("Missing user or age");
        }

        const age = Number(obj.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age");
        }

        const user = { ...obj, age };
        clean.push(user);

        if (age < 18) {
            under18.push(user);
        }
    } catch (error) {
        errors.push({ line: i + 1, message: error.message });
    }
}

console.log("Clean data:", clean);
console.log("Errors:", errors);
console.log("Under-18 users:", under18);
console.log("Valid count:", clean.length);
console.log("Error count:", errors.length);


// Output summary:
// - Valid records: 2 — Alex and Mina.
// - Invalid records: 2 — line 2 has missing keys; line 3 contains invalid JSON.
// - Under-18 users: [].
// Debugging: Place a breakpoint at JSON.parse(rawData[i]). Watch i, obj, clean, and errors. When parsing fails, execution jumps directly to catch.