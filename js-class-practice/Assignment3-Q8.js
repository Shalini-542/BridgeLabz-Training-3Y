// function demo(a, a) {
//     total = 10;
//     delete total;
//     console.log(a);
// }

// demo(5, 10);
// console.log(globalThis.total);

// ReferenceError: total is not defined

"use strict";

function demo(a, b) {
    let total = 10;
    console.log(total);
}

demo(5, 10);
