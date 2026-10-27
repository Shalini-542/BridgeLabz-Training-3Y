let x = 16.75;
let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`
Math Utility Dashboard
Rounded Value: ${rounded}
Square Root: ${squareRoot.toFixed(2)}
Power (x³): ${power.toFixed(2)}
Random Number: ${randomNumber}
`);